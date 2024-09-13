import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const AddStylistScreen = () => {
  const navigation = useNavigation();

  const [stylistName, setStylistName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    { id: 1, name: 'Hair Cut' },
    { id: 2, name: 'Beard Grooming' },
    { id: 3, name: 'Facial' },
    { id: 4, name: 'Shaving' },
    { id: 5, name: 'Massage Therapy' },
    { id: 6, name: 'Eyebrow Grooming' },
    { id: 7, name: 'Hair Coloring' },
    { id: 8, name: 'Waxing' }
  ];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(item => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleAddStylist = () => {
    if (stylistName && contactNumber && selectedRating && selectedServices.length > 0) {
      Alert.alert('Stylist Added', `Stylist: ${stylistName}\nContact: ${contactNumber}\nRating: ${selectedRating} stars\nServices: ${selectedServices.join(', ')}`);
      navigation.navigate("AdminDashboard");
    } else {
      Alert.alert('Error', 'Please fill all fields and select at least one service.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Stylist</Text>

      {/* Stylist Name Input */}
      <Text style={styles.label}>Stylist Name</Text>
      <TextInput
        style={styles.input}
        // placeholder="Full Name"
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
        // placeholder="Mobile Number"
        keyboardType="numeric"
        value={contactNumber}
        onChangeText={setContactNumber}
      />

      {/* Services */}
      <Text style={styles.label}>Services</Text>
      <View style={styles.servicesContainer}>
        {services.map(service => (
          <TouchableOpacity
            key={service.id}
            style={[styles.serviceBox, selectedServices.includes(service.name) && styles.selectedService]}
            onPress={() => toggleService(service.name)}
          >
            <Text style={styles.serviceText}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Add Stylist Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddStylist}>
        <Text style={styles.addButtonText}>Add Stylist</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    // fontWeight:'bold'
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
