import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../Assets/logoSmall.png'; 

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <Text style={styles.startButtonText}>Get Glam Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 320, 
    height: 260,
    resizeMode: 'contain',
    marginBottom: 40, 
  },
  startButton: {
    backgroundColor: '#7E0681', 
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 80, 
    position: 'absolute',
    bottom: 70,
  },
  startButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
