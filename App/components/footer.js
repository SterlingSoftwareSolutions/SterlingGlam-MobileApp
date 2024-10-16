import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Use Ionicons or your preferred icon set

const Footer = ({ navigation }) => {
  
  const handleViewStatistics = () => {
    navigation.navigate('Statistics'); // Navigate to the Statistics screen
  };

  const handleViewHome = () => {
    navigation.navigate('AdminDashboard'); // Navigate to Admin Dashboard
  };

  const upcomingView = () => {
    navigation.navigate('UpcomingAppointments'); // Navigate to Upcoming Appointments
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer} onPress={upcomingView}>
        <Icon name="calendar-outline" size={25} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.iconContainer, styles.middleIconContainer]} onPress={handleViewHome}>
        <View style={styles.middleIconBackground}>
          <Icon name="grid-outline" size={25} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={handleViewStatistics}>
        <Icon name="bar-chart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 18, // Padding for the footer
    backgroundColor: '#000', // Black background color
    borderTopWidth: 1,
    borderColor: '#ddd', // Optional border for footer
    borderRadius: 50, // Rounded corners for the footer
    marginHorizontal: 20, // Space on the sides
    marginBottom: 10, // Margin from the bottom of the screen
  },
  iconContainer: {
    paddingHorizontal: 20,
  },
  middleIconContainer: {
    marginTop: -40, // Moves the middle icon slightly upwards, above the footer
    paddingHorizontal: 30,
  },
  middleIconBackground: {
    width: 60, // Width of the circular background
    height: 60, // Height of the circular background
    borderRadius: 30, // Half of width/height to make it circular
    backgroundColor: '#000', // Black background color
    borderWidth: 2, // White border width
    borderColor: '#fff', // White border color
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;
