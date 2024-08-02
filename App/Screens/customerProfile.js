import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-paper';

const localProfilePicture = require('../Assets/avatar.png');

const CustomerProfile = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [profilePicture, setProfilePicture] = useState(localProfilePicture);

    // Handler for saving profile data
    const handleSave = () => {
        console.log('Profile saved:', { name, email, contactNumber, address, profilePicture });
    };

    // Handler for profile picture change
    const handleProfilePictureChange = () => {
        // trigger an image picker;
        setProfilePicture(localProfilePicture);
    };

    const handleBackPress = () => {
        navigation.goBack(); // Use this to navigate back
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleProfilePictureChange}>
                <Avatar.Image
                    size={100}
                    source={profilePicture}
                    style={styles.avatar}
                />
            </TouchableOpacity>

            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
            />

            <Text style={styles.label}>Contact Number</Text>
            <TextInput
                style={styles.input}
                value={contactNumber}
                onChangeText={setContactNumber}
                placeholder="Enter your contact number"
                keyboardType="phone-pad"
            />

            <Text style={styles.label}>Address</Text>
            <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
                placeholder="Enter your address"
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#ffffff',

    },
    avatar: {
        alignSelf: 'center',
        margin: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: '#7E0681',
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 80,
        justifyContent: 'center',
        alignItems: 'center',

    },
    saveButtonText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default CustomerProfile;
