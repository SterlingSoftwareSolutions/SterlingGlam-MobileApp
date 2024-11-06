import React, { useState, useContext  } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useAuth from '../auth/useAuth';
import AuthContext from '../auth/context';

const localProfilePicture = require('../resources/specialist1.jpeg');

export default function ProfileScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const {logOut} = useAuth();
  
  return (
    <View style={styles.container}>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={localProfilePicture} 
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{user?.first_name || 'User Name'}</Text>
        <Text style={styles.profileRole}>{user?.role || 'User Role'}</Text>
      </View>

      {/* Menu Items */}
      <ScrollView contentContainerStyle={styles.menuContainer}>
        <MenuItem title="Account" iconName="account" onPress={() => navigation.navigate('EditProfile')}/>
        <MenuItem title="Language Support" iconName="translate" onPress={() => navigation.navigate('Language')}/>
        <MenuItem title="Invite Friend" iconName="account-multiple-plus" onPress={() => navigation.navigate('Invite')} />
        <MenuItem title="About" iconName="information-outline" onPress={() => navigation.navigate('About')} />
        <MenuItem title="Log Out" iconName="logout" logout onPress={logOut}/>
      </ScrollView>
    </View>
  );
}

function MenuItem({ title, logout, iconName, onPress }) {
  return (
    <TouchableOpacity style={logout ? [styles.menuItem, styles.logout] : styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemContent}>
        <MaterialCommunityIcons name={iconName} size={24} color="#4D2906" />
        <Text style={logout ? [styles.menuText, styles.logoutText] : styles.menuText}>{title}</Text>
      </View>
      {!logout && <Icon name="chevron-forward" size={24} color="black" />}
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4D2906',
  },
  profileRole: {
    color: '#4D2906',
    marginBottom: 20,
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
    color: '#000',
    marginLeft: 10,
  },
  logout: {
    borderBottomWidth: 0,
    marginTop: 20,
  },
  logoutText: {
    color: '#4D2906',
    fontWeight: 'bold',
  },
});
