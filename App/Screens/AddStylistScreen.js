import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Footer from "../components/footer"; // Import the Footer component
import authClient from "../api/authClient"; // Ensure you import authClient

const AddStylistScreen = () => {
  const navigation = useNavigation();

  const [stylistName, setStylistName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [services, setServices] = useState([]); // State to store services from the backend

  // Fetch services from the backend when the component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await authClient.get('/categories'); // Use authClient to make the request
        setServices(response.data); // Set the services from response.data
      } catch (error) {
        console.error('Failed to fetch services', error); // Log the error
        Alert.alert('Error', 'Failed to fetch services.');
      }
    };

    fetchServices();
  }, []);

  // Toggle service selection
  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(item => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Handle adding a new stylist
  const handleAddStylist = async () => {
    // Validate input fields
    if (!stylistName || !contactNumber || selectedRating === 0 || selectedServices.length === 0) {
      Alert.alert('Error', 'Please fill all fields and select at least one service.');
      return;
    }

    try {
      // Call the API to add a stylist using authClient
      const response = await authClient.post('/staff', {
        name: stylistName,
        contact_number: contactNumber,
        ratings: selectedRating,
        category_ids: selectedServices.map(service => service.id), // Send service IDs
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Stylist added successfully.');
        navigation.navigate('AdminDashboard'); // Navigate to the admin dashboard
      } else {
        Alert.alert('Error', response.data.message || 'Failed to add stylist.');
      }
    } catch (error) {
      console.error('Error adding stylist:', error); // Log the error
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add New Stylist</Text>
        </View>

        {/* Stylist Name Input */}
        <Text style={styles.label}>Stylist Name</Text>
        <TextInput
          style={styles.input}
          value={stylistName}
          onChangeText={setStylistName}
        />

        {/* Stylist Rating */}
        <Text style={styles.label}>Stylist Ratings</Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map(star => (
            <TouchableOpacity key={star} onPress={() => setSelectedRating(star)}>
              <FontAwesome
                name={star <= selectedRating ? 'star' : 'star-o'}
                size={24}
                color="gold"
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Stylist Contact Number */}
        <Text style={styles.label}>Stylist Contact Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={contactNumber}
          onChangeText={setContactNumber}
        />

        {/* Services */}
        <Text style={styles.label}>Categories</Text>
        <View style={styles.servicesContainer}>
          {services.map(service => (
            <TouchableOpacity
              key={service.id}
              style={[styles.serviceBox, selectedServices.includes(service) && styles.selectedService]}
              onPress={() => toggleService(service)}
            >
              <Text style={styles.serviceText}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Add Stylist Button */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddStylist}>
          <Text style={styles.addButtonText}>Add Stylist</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
  },
  scrollContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceBox: {
    width: '48%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedService: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  serviceText: {
    color: '#333',
  },
  addButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddStylistScreen;
