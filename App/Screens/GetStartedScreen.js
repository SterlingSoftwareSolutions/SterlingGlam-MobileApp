import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import GradientBackground from '../components/GradientBackground';

const GetStartedScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Login'); 
  };

  return (
    <GradientBackground>
      <ImageBackground
        source={require('../resources/SalonSameeraScreen.png')} 
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay} /> 
        <View style={styles.container}>
          <Text style={styles.headerText}>Stay In Touch with Us</Text>
          <Text style={styles.subText}>
            Reach out to anyone, anywhere{'\n'}We are here for you.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Get Started</Text>
            <FontAwesome name="arrow-right" size={22} color="#000000" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    marginTop: 20,
    fontSize: 25, 
    fontWeight: '900',
    color: '#000000',
    textAlign: 'center',
  },
  subText: {
    marginTop: 10,
    fontSize: 15, 
    color: '#000000',
    textAlign: 'center',
    marginHorizontal: 50,
    fontWeight:'bold'
  },
  button: {
    marginTop: 80,
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20, 
    color: '#000000',
    fontWeight: 'bold',
  },
  arrowIcon: {
    marginLeft: 20,
  },
});

export default GetStartedScreen;
