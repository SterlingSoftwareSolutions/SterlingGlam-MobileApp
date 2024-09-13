// SplashScreen.js
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import GradientBackground from '../components/GradientBackground';
import { useNavigation } from '@react-navigation/native';


const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('GetStarted');
    }, 2000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <GradientBackground>
      <View style={styles.innerContainer}>
        <Image
          source={require('../resources/salonsameeralogo.png')} 
          style={styles.logo}
        />
        <Text style={styles.appName}>Refine Your Edge</Text>
        <Text style={styles.appName}>Where Grooming Meets Excellence</Text>

      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 270, 
    height: 270, 
    resizeMode: 'contain',
  },
  appName: {
    // marginTop: 20,
    fontSize: 18, 
    color: '#000000', 
    fontWeight: 'bold',
    // textTransform: 'uppercase',
    // letterSpacing: 2,
  },
});

export default SplashScreen;
