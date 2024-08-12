import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const localProfilePicture = require('../resources/specialist1.jpeg');


export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      {/* <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity> */}

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={localProfilePicture} 
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Jenifer Lopez</Text>
        <Text style={styles.profileRole}>User</Text>
      </View>

      {/* Menu Items */}
      <ScrollView contentContainerStyle={styles.menuContainer}>
        <MenuItem title="Account" />
        <MenuItem title="Notifications" />
        <MenuItem title="Language Support" />
        {/* <MenuItem title="Rewards" /> */}
        <MenuItem title="Help and Support" />
        <MenuItem title="Settings" />
        <MenuItem title="Recent Bookings" />
        <MenuItem title="Log Out" logout />
      </ScrollView>
    </View>
  );
}

function MenuItem({ title, logout }) {
  return (
    <TouchableOpacity style={logout ? [styles.menuItem, styles.logout] : styles.menuItem}>
      <Text style={logout ? [styles.menuText, styles.logoutText] : styles.menuText}>{title}</Text>
      {!logout && <Icon name="chevron-forward" size={24} color="black" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 10,
    marginLeft: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 15,
    marginTop:20
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
  menuText: {
    fontSize: 16,
    color: '#000',
  },
  logout: {
    borderBottomWidth: 0,
    marginTop: 20,
  },
  logoutText: {
    color: '#4D2906',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#EDEDED',
  },
  activeNavItem: {
    backgroundColor: '#4D2906',
    padding: 10,
    borderRadius: 50,
  },
});
