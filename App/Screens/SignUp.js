import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usersApi from "../api/users";

import Logo from '../resources/lllll.png'; 

const SignUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async () => {
    console.log('First Name:', first_name);
    console.log('Email:', email);
    console.log('Contact Number:', phone_number);
    console.log('Password:', password);
    console.log('Confirm Password:', password_confirmation);
    console.log('Role:', 'user');

    const role = "user";  // Default role set to 'user'

    try {
      const result = await usersApi.register(email, first_name, phone_number, password, password_confirmation, role);
      console.log(result);

      setError(!result.ok);
      const errorMessage = result.data?.message || "An unknown error occurred.";
      setErrorMessage(errorMessage);

      if (result.ok) {
        navigation.navigate('Login');
      } else {
        console.log('Register Failed', result.data.user);
        setError(true);
        setErrorMessage("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage("Registration failed. Please try again.");
      setError(true);
    }
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
          placeholder="First Name"
          placeholderTextColor="#6e6e6e"
          value={first_name}
          onChangeText={text => setFirstName(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Contact Number"
          placeholderTextColor="#6e6e6e"
          value={phone_number}
          onChangeText={text => setPhoneNumber(text)}
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
          value={password_confirmation}
          onChangeText={text => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.signupBtn} onPress={handleSubmit}>
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
    borderColor:'#000000',
    borderWidth:1,
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
    backgroundColor: '#000000',
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
    color: '#141414',
    fontSize: 16,
  },
  loginHighlight: {
    color: '#24150E',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default SignUp;
