import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={['#ffffff', '#3b3b3b']}
      style={styles.gradientBackground}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GradientBackground;
