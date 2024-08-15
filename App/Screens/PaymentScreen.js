import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Input, Icon, Button, CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const AddCardScreen = () => {
  const navigation = useNavigation();

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvvNumber, setCvvNumber] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [isCardSaved, setIsCardSaved] = useState(true);

    const handleCardNumberChange = (text) => {
        const formattedText = text.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
        setCardNumber(formattedText);
    };

    const handleExpiryDateChange = (text) => {
        const formattedText = text.replace(/\s?/g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
        setExpiryDate(formattedText);
    };

    const handlePayNow = () => {
        Alert.alert('Success', 'Payment made successfully');
        navigation.navigate("AppointmentOverview");
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Payment</Text>

            <Image
                source={require('../resources/dummyCard.png')}
                style={styles.cardImage}
            />

            <TextInput
                style={styles.input}
                placeholder="Card Number"
                placeholderTextColor="#A9A9A9"
                keyboardType="numeric"
                value={cardNumber}
                onChangeText={handleCardNumberChange}
                maxLength={19}
            />

            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="Expiry Date"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="numeric"
                    value={expiryDate}
                    onChangeText={handleExpiryDateChange}
                    maxLength={5} // MM/YY format
                />

                <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="CVV Number"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="numeric"
                    value={cvvNumber}
                    onChangeText={setCvvNumber}
                    maxLength={4}
                />
            </View>

            <TextInput
                style={styles.input}
                placeholder="Name on Card"
                placeholderTextColor="#A9A9A9"
                value={nameOnCard}
                onChangeText={setNameOnCard}
            />


            <CheckBox
                title="Securely save card and details"
                checked={isCardSaved}
                onPress={() => setIsCardSaved(!isCardSaved)}
                checkedColor="#24150E"
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
            />

            <View style={styles.payContainer}>
                <View>
                    <Text style={styles.amount}>Rs. 2000.00</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.payButton} onPress={handlePayNow}>
                        <Text style={styles.payButtonText}>Pay Now</Text>
                    </TouchableOpacity>
                </View>
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
    backButton: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    cardImagePlaceholder: {
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderColor: '#A9A9A9',
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    cardIcon: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    input: {
        height: 50,
        borderColor: '#A9A9A9',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 18,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        width: '48%',
    },
    label: {
        fontSize: 16,
    },
    amount: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    payButton: {
        backgroundColor: '#24150E',
        padding: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: 'center',
    },
    payButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        marginBottom: 20,
    },
    checkboxText: {
        color: '#24150E',
    },
    payContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    }
});

export default AddCardScreen;
