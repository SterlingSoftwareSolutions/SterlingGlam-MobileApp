import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const LanguageSettingsScreen = () => {
  const [checked, setChecked] = useState('English');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Language Settings</Text>

      <View style={styles.radioButtonContainer}>
        <RadioButton
          value="English"
          status={checked === 'English' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('English')}
          color="#24150E"
        />
        <Text style={styles.radioText}>English</Text>

      </View>

      <View style={styles.radioButtonContainer}>
        <RadioButton
          value="Sinhala"
          status={checked === 'Sinhala' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Sinhala')}
          color="#24150E"
        />
        <Text style={styles.radioText}>Sinhala</Text>
      </View>

      <View style={styles.radioButtonContainer}>
        <RadioButton
          value="Tamil"
          status={checked === 'Tamil' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Tamil')}
          color="#24150E"
        />
        <Text style={styles.radioText}>Tamil</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  radioButtonContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  radioText: {
    fontSize: 18,
  },
});

export default LanguageSettingsScreen;
