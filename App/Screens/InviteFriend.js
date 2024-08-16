import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InviteFriend = ({ navigation }) => {

    const handlePress = (platform) => {
        Alert.alert('Link copied to clipboard');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Invite a Friend</Text>
            <Image
                source={require('../resources/InviteFriend.png')}
                style={styles.image}
            />
            <Text style={styles.subText}>Invite your friends and get discounts!</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconWrapper} onPress={() => handlePress('WhatsApp')}>
                    <MaterialCommunityIcons name="whatsapp" size={32} color="#24150E" />
                    <Text style={styles.iconText}>WhatsApp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconWrapper} onPress={() => handlePress('Facebook')}>
                    <MaterialCommunityIcons name="facebook" size={32} color="#24150E" />
                    <Text style={styles.iconText}>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconWrapper} onPress={() => handlePress('Share')}>
                    <MaterialCommunityIcons name="share" size={32} color="#24150E" />
                    <Text style={styles.iconText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  subText: {
    fontSize: 16,
    color: '#24150E',
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  iconWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
});

export default InviteFriend;
