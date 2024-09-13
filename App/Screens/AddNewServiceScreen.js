import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const AddNewServiceScreen = () => {
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [price, setPrice] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [serviceImage, setServiceImage] = useState(null);

  // Open image picker to select service image
  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 200,
      maxHeight: 200,
      quality: 1,
    };
    
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        const source = { uri: response.assets[0].uri };
        setServiceImage(source);
      }
    });
  };

  // Handle submit service
  const handleSubmit = () => {
    // Logic to add new service go here
    console.log({
      serviceName,
      serviceDescription,
      price,
      estimatedTime,
      serviceImage,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add New Service</Text>

      {/* Service Name */}
      <Text style={styles.label}>Service Name</Text>
      <TextInput
        style={styles.input}
        // placeholder="Enter service name"
        value={serviceName}
        onChangeText={setServiceName}
      />

      {/* Add Service Image */}
      <Text style={styles.label}>Add Service Image</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={selectImage}>
        {serviceImage ? (
          <Image source={serviceImage} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>+</Text>
        )}
      </TouchableOpacity>

      {/* Service Description */}
      <Text style={styles.label}>Service Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        // placeholder="Enter service description"
        value={serviceDescription}
        onChangeText={setServiceDescription}
        multiline
      />

      {/* Price */}
      <Text style={styles.label}>Price</Text>
      <View style={styles.priceRow}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
        //   placeholder="Enter price"
          value={price}
          keyboardType="numeric"
          onChangeText={setPrice}
        />
      </View>

      {/* Estimated Time */}
      <Text style={styles.label}>Estimated time</Text>
      <TextInput
        style={styles.input}
        // placeholder="Enter estimated time"
        value={estimatedTime}
        onChangeText={setEstimatedTime}
      />

      {/* Add Service Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>Add Service</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    // borderWidth: 1,
    // borderColor: '#ddd',
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#eee',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  imagePicker: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    height: 100,
    width: 100,
    borderRadius: 10,
    marginBottom: 15,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  imageText: {
    fontSize: 30,
    color: '#aaa',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  currencyText: {
    fontSize: 16,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom:100
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddNewServiceScreen;
