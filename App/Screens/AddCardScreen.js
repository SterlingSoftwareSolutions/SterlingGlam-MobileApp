import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { Input, Icon, Button, CheckBox } from 'react-native-elements';
import { CardField, useStripe } from '@stripe/stripe-react-native';

const AddCardScreen = () => {
  const [name, setName] = useState('');
  const [isCardSaved, setIsCardSaved] = useState(false);
  const { confirmPayment } = useStripe();

  const handleAddCard = async () => {
    try {
      const paymentMethod = await confirmPayment('payment_intent_client_secret', {
        type: 'Card',
        billingDetails: { name },
      });

      if (paymentMethod) {
        Alert.alert('Success', 'Card added successfully');
      } else {
        Alert.alert('Error', 'Failed to add card');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Card</Text>

      <Image
        source={require('../resources/cardMap.png')}
        style={styles.cardImage}
      />

      <Input
        placeholder="Card Number"
        value="2323 5456 8495 1567"
        editable={false}
        containerStyle={styles.input}
        rightIcon={<Image source={require('../resources/mastercard2.png')} style={styles.icon} />}
      />

      <View style={styles.row}>
        <Input
          placeholder="Expiray Date"
          value="MM/YY"
          editable={false}
          containerStyle={[styles.input, styles.halfInput]}
          leftIcon={<Icon name="calendar" type="feather" size={20} />}
        />
        <Input
          placeholder="CVV Number"
          value="***"
          editable={false}
          containerStyle={[styles.input, styles.halfInput]}
        />
      </View>

      <Input
        placeholder="Name on Card"
        value="JENIFER LOPEZ"
        editable={false}
        containerStyle={styles.input}
      />

      <CheckBox
        title="Securely save card and details"
        checked={isCardSaved}
        onPress={() => setIsCardSaved(!isCardSaved)}
        checkedColor="#24150E"
        containerStyle={styles.checkboxContainer}
        textStyle={styles.checkboxText}
      />

      <Button
        title="Add Card"
        buttonStyle={styles.addButton}
        onPress={handleAddCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#24150E',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    borderColor: '#24150E',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  halfInput: {
    width: '48%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginBottom: 20,
  },
  checkboxText: {
    color: '#24150E',
  },
  addButton: {
    backgroundColor: '#24150E',
    paddingVertical: 15,
    borderRadius: 5,
  },
});

export default AddCardScreen;
