import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../resources/lllll.png'; 

const SignUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Implement your signup logic here, e.g., API call, form validation
    console.log('Signing up with:', { email, username, contactNumber, password, confirmPassword });
    // For demo purposes, navigate to Dashboard screen after signup
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email Address"
          placeholderTextColor="#6e6e6e"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#6e6e6e"
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Contact Number"
          placeholderTextColor="#6e6e6e"
          value={contactNumber}
          onChangeText={text => setContactNumber(text)}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#6e6e6e"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Confirm Password"
          placeholderTextColor="#6e6e6e"
          secureTextEntry
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.signupBtn} onPress={handleSignUp}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <Text style={styles.loginHighlight}>Login</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 120,
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputText: {
    height: 50,
    color: '#6e6e6e',
  },
  signupBtn: {
    width: '80%',
    backgroundColor: '#24150E',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  signupText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  loginText: {
    color: '#6e6e6e',
    fontSize: 16,
  },
  loginHighlight: {
    color: '#24150E',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default SignUp;
