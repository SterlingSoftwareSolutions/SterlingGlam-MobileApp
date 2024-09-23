import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView ,Alert, ActivityIndicator} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import authClient from "../api/authClient";
import * as ImagePicker from 'expo-image-picker';
import admin from '../api/admin';

const AddServiceScreen = () => {
  const navigation = useNavigation();

  const [name, setServiceName] = useState('');
  const [category_id, setCategoryName] = useState('');
  const [description, setServiceDescription] = useState('');
  const [price, setPrice] = useState('');
  const [estimated_time, setEstimatedTime] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [image, setImageUri] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const handleService = async () => {
    if (!category_id || !price || !name || !estimated_time) {
      console.log('null');
      Alert.alert('Please fill the necessary details');
      return;
    }
    else{
      try{
        console.log('null',category_id);
        console.log('null',price);
        console.log('null',name);
        console.log('null',estimated_time);
        console.log('null',image);
        const api = await admin();

        const response = await api.post('/services', {
          name, category_id, description, price, estimated_time, image
        });
     
        console.log('services added', response);

        if(response.status === 201){
          const successMessage = response.data?.message || 'Service added successfully!';
          Alert.alert('Success', successMessage);
          navigation.navigate("AdminDashboard");
        }
        else{
          const errorMessage = response.data?.message || 'An error occurred while adding the service.';
          Alert.alert('Error', errorMessage);
          setErrorMessage(errorMessage);
        }
      
      }
      catch(error){
        console.log('Error adding service:', error);
        const errorMessage = response.data?.message || 'An error occurred while adding the service.';
        Alert.alert('Error', errorMessage);
        setError(true);
        setErrorMessage('Please try again.');
        
      }
        
      }
  };

  //upload image
  const handleImageUpload = async () => {
    // Request media library permission
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (permissionResult.granted === false) {
      alert("Permission to access the camera roll is required!");
      return;
    }
  
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };
  
    let result = await ImagePicker.launchImageLibraryAsync(options);
    console.log('image12', result);
  
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      console.log('image', result);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await authClient.get('/categories');
        setCategories(response.data); // Assuming the categories are in response.data
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch categories', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Service</Text>
      </View>

      {/* Service Name */}
      <Text style={styles.label}>Service Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setServiceName}
        placeholder="Enter Service Name"
      />

      {/* Service Category */}
      <Text style={styles.label}>Service Category</Text>
      <RNPickerSelect
        onValueChange={(value) => setCategoryName(value)}
        items={categories.map((category) => ({
          label: category.name,
          value: category.id,
        }))}
        placeholder={{ label: "Select a category", value: null }}
        style={pickerSelectStyles}
      />
    
      {/* <Picker
        selectedValue={category_id}
        onValueChange={(itemValue) => setCategoryName(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a Service" value="" />
        {categories.map((category) => (
          <Picker.Item key={category.id} label={category.name} value={category.id} />
        ))}
      </Picker> */}

      {/* Add Service Image */}
      <Text style={styles.label}>Add Service Image</Text>
      <TouchableOpacity style={styles.imageUpload} onPress={handleImageUpload}>
      {image ? (
          <Image source={{ uri: image }} style={styles.uploadedImage} />
        ) : (
          <Ionicons name="add" size={40} color="gray" />
        )}
      </TouchableOpacity>

      {/* Service Description */}
      <Text style={styles.label}>Service Description</Text>
      <TextInput
        style={styles.textArea}
        value={description}
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
        value={estimated_time}
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
    paddingTop: 80,
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
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
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
  picker: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 16,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 50,
    backgroundColor: '#F0F0F0',
    fontSize: 16,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'black',
  },
  inputAndroid: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    color: 'black',
  },
});

export default AddServiceScreen;
