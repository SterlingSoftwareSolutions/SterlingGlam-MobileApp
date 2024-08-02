import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import GradientBackground from '../components/GradientBackground';

const GetStartedScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Dashboard'); 
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Image
          source={require('../resources/getStarted.png')} 
          style={styles.image}
        />
        <Text style={styles.headerText}>Stay In Touch with Us</Text>
        <Text style={styles.subText}>
        Reach out to anyone, anywhere{'\n'}We are here for you.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Get Started</Text>
          <FontAwesome name="arrow-right" size={22} color="#ffffff" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 220, 
    height: 220, 
    resizeMode: 'contain',
  },
  headerText: {
    marginTop: 20,
    fontSize: 25, 
    fontWeight: '900',
    color: '#624332',
    textAlign: 'center',
  },
  subText: {
    marginTop: 10,
    fontSize: 15, 
    color: '#624332',
    textAlign: 'center',
    marginHorizontal:50,
  },
  button: {
    marginTop: 80,
    backgroundColor: '#624332', 
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20, 
    color: '#ffffff',
    fontWeight:'bold'
  },
  arrowIcon: {
    marginLeft: 20,
  },
});

export default GetStartedScreen;
