import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView ,Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AddServiceScreen = () => {
  const navigation = useNavigation();

  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [price, setPrice] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  
  const handleService = () => {
    Alert.alert('Success', 'Service added successfully');
    navigation.navigate("AdminDashboard");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Add New Service</Text>
      </View>

      {/* Service Name */}
      <Text style={styles.label}>Service Name</Text>
      <TextInput
        style={styles.input}
        value={serviceName}
        onChangeText={setServiceName}
        placeholder="Enter Service Name"
      />

      {/* Add Service Image */}
      <Text style={styles.label}>Add Service Image</Text>
      <TouchableOpacity style={styles.imageUpload}>
        <Ionicons name="add" size={40} color="gray" />
      </TouchableOpacity>

      {/* Service Description */}
      <Text style={styles.label}>Service Description</Text>
      <TextInput
        style={styles.textArea}
        value={serviceDescription}
        onChangeText={setServiceDescription}
        placeholder="Enter Service Description"
        multiline
        numberOfLines={4}
      />

      {/* Price */}
      <Text style={styles.label}>Price</Text>
      <View style={styles.priceRow}>
        <Text style={styles.currency}>Rs.</Text>
        <TextInput
          style={[styles.input, styles.priceInput]}
          value={price}
          onChangeText={setPrice}
          placeholder="Enter Price"
          keyboardType="numeric"
        />
      </View>

      {/* Estimated Time */}
      <Text style={styles.label}>Estimated time</Text>
      <TextInput
        style={styles.input}
        value={estimatedTime}
        onChangeText={setEstimatedTime}
        placeholder="Enter Estimated Time"
        keyboardType="numeric"
      />

      {/* Add Service Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleService}>
        <Text style={styles.addButtonText}>Add Service</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  textArea: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 16,
    height: 100,
    marginBottom: 20,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  currency: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  priceInput: {
    flex: 1,
  },
  imageUpload: {
    backgroundColor: '#F0F0F0',
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom:100
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddServiceScreen;
