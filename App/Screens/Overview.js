import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const plusIcon = require('../resources/plusIcon.png');


const Overview = () => {
  const navigation = useNavigation();

  const handlePlus = () => {
    navigation.navigate("Home");
};


  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>Book New Service!</Text>
          <Text style={styles.tagline}>“Unleash Your Inner Glam”</Text>
        </View>
        <TouchableOpacity onPress={handlePlus}>
        <Image source={plusIcon} style={styles.profileImage} />
        </TouchableOpacity>
      </View>

      {/* Search Section */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="magnify" size={24} color="#24150E" />
          <TextInput style={styles.searchInput} placeholder="Search" />
          <Icon name="tune" size={24} color="#24150E" />
        </View>
      </View>

      {/* Recent Appointment Section */}
      <View style={styles.recentAppointment}>
        <Text style={styles.sectionTitle}>Your Recent Appointment</Text>
        <View style={styles.appointmentCard}>
          <View style={styles.appointmentHeader}>
            <Icon name="calendar-clock" size={18} color="#24150E" />
            <Text style={styles.appointmentDate}>Saturday 17 August 2024 at 11.00 - 12.00</Text>
          </View>
          <Text style={styles.appointmentTitle}>Sterling Glam</Text>
          <Text style={styles.appointmentSubtitle}>Katherine</Text>
          <Text style={styles.appointmentService}>Foundation, Blush</Text>
          <View style={styles.appointmentFooter}>
            <Text style={styles.appointmentStatus}>Confirmed</Text>
            <Text style={styles.appointmentPrice}>Rs.5,050.00</Text>
          </View>
        </View>
      </View>

      {/* Overview Section */}
      <View style={styles.overview}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.overviewBoxes}>
          <View style={styles.overviewBox}>
            <Text style={styles.overviewLabel}>New Appointments</Text>
            <Text style={styles.overviewCount}>01</Text>
          </View>
          <View style={styles.overviewBox}>
            <Text style={styles.overviewLabel}>All Appointments</Text>
            <Text style={styles.overviewCount}>02</Text>
          </View>
        </View>
      </View>

      
    </ScrollView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#624332',
  },
  tagline: {
    fontSize: 16,
    color: '#6F4E37',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 24,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
  },
  recentAppointment: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  appointmentCard: {
    backgroundColor: '#F5E8E4',
    padding: 16,
    borderRadius: 8,
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  appointmentDate: {
    marginLeft: 8,
    color: '#6F4E37',
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6F4E37',
  },
  appointmentSubtitle: {
    color: '#6F4E37',
  },
  appointmentService: {
    color: '#6F4E37',
    marginVertical: 8,
  },
  appointmentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#DCDCDC',
    paddingTop: 8,
  },
  appointmentStatus: {
    color: '#6F4E37',
  },
  appointmentPrice: {
    fontWeight: 'bold',
    color: '#24150E',
  },
  overview: {
    padding: 16,
  },
  overviewBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  overviewBox: {
    backgroundColor: '#EDEDED',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '48%',
  },
  overviewLabel: {
    color: 'black',
    fontWeight:'bold',
  },
  overviewCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#24150E',
  },
  offers: {
    padding: 16,
    marginBottom:80
  },
  offerImage: {
    height: 150,
    borderRadius: 8,
  },
});

export default Overview;