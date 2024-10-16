import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DaySchedule from './DaySchedule';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/footer'; 

const stylists = require('../resources/stylists.png');
const services = require('../resources/servicesImg.png');

const AdminScreen = () => {
  const navigation = useNavigation();

  const handleServices = () => {
    navigation.navigate("Services");
  };
 

  const handleStylist = () => {
    navigation.navigate("Stylists");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.adminText}>Admin</Text>
          <Icon name="person-circle-outline" size={45} color="black" />
        </View>

        <Text style={styles.username}>Sameera Appuhamy</Text>

        {/* Booking Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statBoxGreen}>
            <Text style={styles.statText}>Active Bookings</Text>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statMore}>↑ 3 More vs last 7 days</Text>
          </View>
          <View style={styles.statBoxRed}>
            <Text style={styles.statText}>Rejected Bookings</Text>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statMore}>↓ 2 More vs last 7 days</Text>
          </View>
          <View style={styles.statBoxBlue}>
            <Text style={styles.statText}>New Visitors</Text>
            <Text style={styles.statNumber}>20</Text>
            <Text style={styles.statMore}>↑ 15 More vs last 7 days</Text>
          </View>
        </View>

        {/* Day Schedule */}
        <View style={styles.scheduleContainer}>
          <View style={styles.scheduleHeader}>
            <Text style={styles.dayScheduleText}>Day Schedule</Text>
            <Text style={styles.dateText}>02nd of Sep 2024</Text>
          </View>
          <Text style={styles.appointmentText}>Appointments booking chart</Text>

          {/* Appointment Chart */}
          <DaySchedule />
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleServices}>
            <Image
              source={services} 
              style={styles.Image}
            />
            <Text style={styles.buttonText}>Services</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleStylist}>
            <Image
              source={stylists} 
              style={styles.Image}
            />
            <Text style={styles.buttonText}>Stylists</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 80, // Ensure there's space for the footer
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  adminText: {
    fontSize: 14,
    color: 'gray',
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    flexWrap: 'wrap',
  },
  statBoxGreen: {
    backgroundColor: '#8EC354',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    marginBottom: 15,
  },
  statBoxRed: {
    backgroundColor: '#EC5464',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    marginBottom: 15,
  },
  statBoxBlue: {
    backgroundColor: '#5B9BEB',
    padding: 15,
    borderRadius: 10,
    width: '48%',
  },
  statText: {
    fontSize: 14,
    color: '#FFF',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginVertical: 5,
  },
  statMore: {
    fontSize: 12,
    color: '#FFF',
  },
  scheduleContainer: {
    marginVertical: 20,
  },
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayScheduleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 13,
    color: 'black',
  },
  appointmentText: {
    fontSize: 14,
    marginVertical: 10,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20, // Adjusted margin to make room for the footer
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    borderColor: 'black',
    borderWidth: 1,
    width: '40%',
  },
  buttonText: {
    fontSize: 14,
    marginTop: 5,
  },
  Image: {
    width: 50,
    height: 50,
  },
  statsButton: {
    marginVertical: 20,
    paddingVertical: 15,
    backgroundColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
  },
  statsButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default AdminScreen;
