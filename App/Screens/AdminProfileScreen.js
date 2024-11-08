import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../auth/useAuth'; // Import your useAuth hook
import authService from '../auth/authService';

export default function AdminProfileScreen() {
  const navigation = useNavigation();
  const { getUser } = authService.getUser(); // Get getUser from useAuth
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const userDetails = authService.getUser(); // Fetch user details from auth context
    console.log('userrrrrrrr', authService.getUser());
    if (userDetails) {
      setUser(userDetails);
    }
    setLoading(false); // Set loading to false since user details are fetched
  }, [getUser]);

  // Function to handle logout
  const handleLogout = () => {
    // Optionally clear authentication tokens, etc.
    navigation.navigate('Login');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Text style={styles.adminText}>{user.role || 'User'}</Text>
        <Text style={styles.username}>{user.first_name || 'User'}</Text>
      </View>

      {/* Menu Items */}
      <ScrollView contentContainerStyle={styles.menuContainer}>
        <MenuItem
          title="Account"
          iconName="account"
          onPress={() => navigation.navigate('AdminEditProfile', { user })} // Pass user to Edit Profile
        />
        <MenuItem title="Notifications" iconName="bell" />
        <MenuItem title="Log Out" iconName="logout" onPress={handleLogout} />
      </ScrollView>
    </View>
  );
}

function MenuItem({ title, iconName, onPress }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemContent}>
        <MaterialCommunityIcons name={iconName} size={24} color="black" />
        <Text style={styles.menuText}>{title}</Text>
      </View>
      <Icon name="chevron-forward" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 15,
    marginTop: 20,
  },
  adminText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  username: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  menuContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
});
