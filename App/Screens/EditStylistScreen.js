import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EditStylistScreen = () => {
  // Initial service and stylist data
  const [serviceName, setServiceName] = useState('Anderson');
  const [services, setServices] = useState([
    { id: 1, name: 'Haircut' },
    { id: 2, name: 'Waxing' },
    { id: 3, name: 'Shaving' },
  ]);

  // Function to delete a Service
  const handleDeleteService = (id) => {
    setServices(services.filter((stylist) => stylist.id !== id));
  };

  // Function to add a new Service
  const handleAddService = () => {
    const newService = { id: services.length + 1, name: 'New Service' };
    setServices([...services, newService]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Anderson</Text>
      </View>

      {/* Stylist Name */}
      <Text style={styles.label}>Stylist Name</Text>
      <TextInput
        style={styles.input}
        value={serviceName}
        onChangeText={setServiceName}
        editable={false}
      />

      {/* Services List */}
      <Text style={styles.label}>Services</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.stylistItem}>
            <Text style={styles.stylistText}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleDeleteService(item.id)}>
              <Ionicons name="remove-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Add Service */}
      <TouchableOpacity style={styles.addStylistButton} onPress={handleAddService}>
        <Text style={styles.addStylistText}>+ Add Service</Text>
      </TouchableOpacity>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>

      {/* Delete Stylist Button */}
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete Stylist</Text>
      </TouchableOpacity>
    </View>
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
  stylistItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  stylistText: {
    fontSize: 16,
  },
  addStylistButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  addStylistText: {
    fontSize: 16,
    color: '#555',
  },
  updateButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom:70
  },
  deleteButtonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditStylistScreen;
