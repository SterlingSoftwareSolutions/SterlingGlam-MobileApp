import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EditServiceScreen = () => {
  // Initial service and stylist data
  const [serviceName, setServiceName] = useState('Haircuts');
  const [stylists, setStylists] = useState([
    { id: 1, name: 'Allen' },
    { id: 2, name: 'Anderson' },
    { id: 3, name: 'Clinton' },
  ]);

  // Function to delete a stylist
  const handleDeleteStylist = (id) => {
    setStylists(stylists.filter((stylist) => stylist.id !== id));
  };

  // Function to add a new stylist (for demo purposes)
  const handleAddStylist = () => {
    const newStylist = { id: stylists.length + 1, name: 'New Stylist' };
    setStylists([...stylists, newStylist]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Haircuts</Text>
      </View>

      {/* Service Name */}
      <Text style={styles.label}>Service Name</Text>
      <TextInput
        style={styles.input}
        value={serviceName}
        onChangeText={setServiceName}
        editable={false}
      />

      {/* Stylists List */}
      <Text style={styles.label}>Stylists</Text>
      <FlatList
        data={stylists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.stylistItem}>
            <Text style={styles.stylistText}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleDeleteStylist(item.id)}>
              <Ionicons name="remove-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Add Stylist */}
      <TouchableOpacity style={styles.addStylistButton} onPress={handleAddStylist}>
        <Text style={styles.addStylistText}>+ Add Stylist</Text>
      </TouchableOpacity>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>

      {/* Delete Service Button */}
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete Service</Text>
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

export default EditServiceScreen;
