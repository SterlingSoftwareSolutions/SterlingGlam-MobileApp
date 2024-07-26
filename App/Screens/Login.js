import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../Assets/logoSmall.png'; 

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Handle login logic here
    // For demo purposes, just navigate to Dashboard screen
    navigation.navigate("Dashboard");
  };

  const handleSignup = () => {
    // Navigate to SignUp screen
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email Address"
          placeholderTextColor="#6e6e6e"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#6e6e6e"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignup} style={styles.signupContainer}>
        <Text style={styles.signupText}>New to Sterling Glam? </Text>
        <Text style={[styles.signupText, styles.signupHighlight]} onPress={handleSignup}>Signup</Text>
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
    width:250,
    height: 120,
    marginBottom:20
  },
  inputView: {
    width: '80%',
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#6e6e6e',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#7E0681',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signupText: {
    color: '#5e6d6c',
    fontSize: 16,
  },
  signupText: {
    color: '#6e6e6e',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signupText: {
    color: '#6e6e6e',
    fontSize: 16,
  },
  signupHighlight: {
    color: '#7E0681',
    fontSize: 16,
    marginLeft: 5, 
  },
});

export default Login;
