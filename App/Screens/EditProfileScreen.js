import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const localProfilePicture = require('../resources/specialist1.jpeg');

const EditProfileScreen = () => {
  const [firstName, setFirstName] = useState('Jenifer');
  const [lastName, setLastName] = useState('Lopez');
  const [email, setEmail] = useState('jeniferlopez100@gmail.com');
  const [password, setPassword] = useState('•••••••');
  const [phoneNumber, setPhoneNumber] = useState('0766032444');

  const [editableField, setEditableField] = useState(null);

  const handleEdit = (field) => {
    setEditableField(field);
  };

  const handleSave = () => {
    setEditableField(null);
    // Here you would typically save the updated profile information to a server or local storage
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Accounts Settings</Text>
      <View style={styles.profileSection}>
        <Image
          source={localProfilePicture}
          style={styles.profileImage}
        />
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

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={password}
            editable={editableField === 'password'}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('password')}>
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
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
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
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
