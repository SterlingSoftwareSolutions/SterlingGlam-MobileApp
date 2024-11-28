import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AuthContext from '../auth/context';  
import admin, { BASE_URL } from '../api/admin';  

const localProfilePicture = require('../resources/avatar.jpg'); 

const EditProfileScreen = () => {
  const { user, setUser } = useContext(AuthContext); 

  const [firstName, setFirstName] = useState(user?.first_name || '');
  const [lastName, setLastName] = useState(user?.last_name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number || '');
  const [editableField, setEditableField] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEdit = (field) => {
    setEditableField(field);
  };

  const handleSave = async () => {
    const updatedData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
    };

    try {
      setLoading(true);
      const api = await admin(); 
      const response = await api.post(`/user/${user.id}`, updatedData); 

      if (response.ok) {
        setUser((prevState) => ({
          ...prevState,
          ...updatedData, 
        }));

        Alert.alert('Success', 'Profile updated successfully!');
        setEditableField(null);  
      } else {
        throw new Error(response.data.message || 'Failed to update profile');
      }
    } catch (err) {
      setError(err.message); 
      Alert.alert('Error', err.message);
    } finally {
      setLoading(false);
    }
  };

  // Render the component
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Account Settings</Text>

      <View style={styles.profileSection}>
        <Image source={localProfilePicture} style={styles.profileImage} />
        <Text style={styles.name}>{firstName} {lastName}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.label}>First Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={firstName}
            editable={editableField === 'firstName'}
            onChangeText={setFirstName}
          />
          <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('firstName')}>
            <Text style={styles.editText}>✎</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Last Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={lastName}
            editable={editableField === 'lastName'}
            onChangeText={setLastName}
          />
          <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('lastName')}>
            <Text style={styles.editText}>✎</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            editable={editableField === 'email'}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('email')}>
            <Text style={styles.editText}>✎</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            editable={editableField === 'phoneNumber'}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('phoneNumber')}>
            <Text style={styles.editText}>✎</Text>
          </TouchableOpacity>
        </View>
      </View>

      {editableField && (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={loading}>
          <Text style={styles.saveButtonText}>
            {loading ? 'Saving...' : 'Save Changes'}
          </Text>
        </TouchableOpacity>
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: 'black',
  },
  editIcon: {
    marginLeft: 10,
  },
  editText: {
    fontSize: 16,
    color: 'gray',
  },
  saveButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 90,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default EditProfileScreen;
