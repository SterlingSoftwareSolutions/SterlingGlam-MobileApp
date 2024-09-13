import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const AboutScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>STERLING GLAM</Text>
      <Text style={styles.subText}>Version 1.0</Text>

      <Image
        source={require('../resources/sterlingglamlogo.png')}
        style={styles.image}
      />
      <Text style={styles.subText}>© 2024 SterlingIT</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Licenses</Text>
      </TouchableOpacity>
    </View>
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
    fontSize: 30,
    fontWeight: '900',
    color: '#624332',
    textAlign: 'center',
    letterSpacing: 2,
  },
  subText: {
    marginTop: 10,
    fontSize: 15,
    color: '#624332',
    textAlign: 'center',
    marginHorizontal: 50,
  },
  button: {
    marginTop: 80,
    backgroundColor: '#624332',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  arrowIcon: {
    marginLeft: 20,
  },
});

export default AboutScreen;
