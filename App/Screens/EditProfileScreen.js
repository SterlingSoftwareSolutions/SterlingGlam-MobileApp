import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const localProfilePicture = require('../resources/specialist1.jpeg');


const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accounts Settings</Text>
      <View style={styles.profileSection}>
        <Image
          source={localProfilePicture}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Jenifer Lopez</Text>
        <Text style={styles.email}>jeniferlopez100@gmail.com</Text>
      </View>
      <View style={styles.inputSection}>
        <Text style={styles.label}>First Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value="Jenifer"
            editable={false}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Text style={styles.editText}>✎</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Last Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value="Lopez"
            editable={false}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Text style={styles.editText}>✎</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value="jeniferlopez100@gmail.com"
            editable={false}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Text style={styles.editText}>✎</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value="•••••••"
            editable={false}
            secureTextEntry
          />
          <TouchableOpacity style={styles.editIcon}>
            <Text style={styles.editText}>✎</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value="0094771347137"
            editable={false}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Text style={styles.editText}>✎</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  backText: {
    fontSize: 24,
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
});

export default EditProfileScreen;
