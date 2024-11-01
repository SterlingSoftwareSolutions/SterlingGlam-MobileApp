import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import admin from '../api/admin';

const ReviewBookingScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // Retrieve passed params from previous screens
  const { selectedServices, selectedSpecialist, selectedDate, selectedSlot } = route.params;

  const [services, setServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch the service details based on selected service IDs
  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const api = await admin();
        const response = await api.get('/services');
        const servicesData = response.data;

        // Filter the services based on selectedServices
        const filteredServices = servicesData.filter(service =>
          selectedServices.some(selected => parseInt(selected.id, 10) === parseInt(service.id, 10))
        );

        setServices(filteredServices);

        // Calculate total price
        const price = filteredServices.reduce((sum, service) => sum + (parseFloat(service.price) || 0), 0);
        setTotalPrice(price);
      } catch (error) {
        console.error('Error fetching service details:', error);
      }
    };

    if (selectedServices.length > 0) {
      fetchServiceDetails();
    }
  }, [selectedServices]);

  // Confirm booking and send the POST request to the backend
  const handleConfirmBooking = async () => {
    try {
      const bookingData = {
        date: selectedDate.toISOString().split('T')[0], // Format date to 'YYYY-MM-DD'
        start_time: selectedSlot, // Assuming the slot is already in the 'HH:mm:ss' format
        staff_id: selectedSpecialist, // ID of the selected specialist
        service_ids: selectedServices.map(service => service.id), // Array of selected service IDs
      };

      const api = await admin();
      const response = await api.post('/booking', bookingData);

      if (response.status === 201) {
        Alert.alert('Success', 'Your booking has been confirmed!', [
          { text: 'OK', onPress: () => navigation.navigate('Home') },
        ]);
      } else {
        throw new Error('Failed to confirm booking');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to confirm booking. Please try again later.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Review Your Booking</Text>

      {/* Selected services */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="work" size={24} color="#24150E" />
          <Text style={styles.sectionTitleIcon}>Services Booked</Text>
        </View>
        {services.length > 0 ? (
          services.map((service) => (
            <View key={service.id} style={styles.serviceItem}>
              <Text>{service.name}</Text>
              <Text>${parseFloat(service.price).toFixed(2)}</Text>
            </View>
          ))
        ) : (
          <Text>No services selected</Text>
        )}
      </View>

      {/* Selected date and time */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="calendar" size={24} color="#24150E" />
          <Text style={styles.sectionTitleIcon}>Date & Time</Text>
        </View>
        <Text>{selectedDate.toDateString()}</Text>
        <Text>{selectedSlot}</Text>
      </View>

      {/* Selected specialist */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <FontAwesome name="user" size={24} color="#24150E" />
          <Text style={styles.sectionTitleIcon}>Specialist</Text>
        </View>
        <Text>{selectedSpecialist}</Text>
      </View>

      {/* Total price */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="pricetag" size={24} color="#24150E" />
          <Text style={styles.sectionTitleIcon}>Price</Text>
        </View>
        <Text>${totalPrice.toFixed(2)}</Text>
      </View>

      {/* Confirm booking button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
        <Text style={styles.confirmButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#24150E',
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  confirmButton: {
    backgroundColor: '#24150E',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitleIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#24150E',
    marginLeft: 10,
  },
  sectionContent: {
    color: '#888888',
    fontSize: 16,
  },
});

export default ReviewBookingScreen;
