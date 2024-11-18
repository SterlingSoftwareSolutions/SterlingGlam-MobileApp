import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../auth/context';
import DaySchedule from './DaySchedule';
import admin from '../api/admin';
const stylistsImage = require('../resources/stylists.png');
const servicesImage = require('../resources/servicesImg.png');

// Reusable StatBox component for different statistics
const StatBox = ({ color, title, number, trend }) => (
  <View style={[styles.statBox, { backgroundColor: color }]}>
    <Text style={styles.statText}>{title}</Text>
    <Text style={styles.statNumber}>{number}</Text>
    <Text style={styles.statMore}>{trend}</Text>
  </View>
);

const AdminScreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  const [stats, setStats] = useState({
    active: 0,
    rejected: 0,
    completed: 0,
  });
  const [loading, setLoading] = useState(true);

  // Fetch booking counts from the API
  useEffect(() => {
    const fetchBookingCounts = async () => {
      try {
        const api = await admin();
        const bookingResponse = await api.get('/bookings/counts');

        if (bookingResponse.data.success) {
          const { data } = bookingResponse.data;
          setStats({
            active: data.approved,
            rejected: data.rejected,
            completed: data.completed,
          });
        } else {
          console.error('Failed to fetch booking counts');
        }
      } catch (error) {
        console.error('Error fetching booking counts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookingCounts();
  }, []);

  const handleServices = () => navigation.navigate("Services");
  const handleStylist = () => navigation.navigate("Stylists");
  const handleProfile = () => navigation.navigate('AdminProfile', { user });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.adminText}>{user.role || 'User'}</Text>
          <Text style={styles.adminText}>Sterling Glam</Text>
        </View>

        <Text style={styles.username}>{user.first_name || 'User'}</Text>

        {/* Stats Section */}
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        ) : (
          <View style={styles.statsContainer}>
            <StatBox
              color="#8EC354"
              title="Active Bookings"
              number={stats.active}
              trend="↑ vs last 7 days"
            />
            <StatBox
              color="#EC5464"
              title="Rejected Bookings"
              number={stats.rejected}
              trend="↓ vs last 7 days"
            />
            <StatBox
              color="#5B9BEB"
              title="Completed Bookings"
              number={stats.completed}
              trend="↑ vs last 7 days"
            />
          </View>
        )}

        {/* Day Schedule Section */}
        <View style={styles.scheduleContainer}>
          <Text style={styles.appointmentText}>Appointments booking chart</Text>
          <DaySchedule />
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonContainer}>
          <Button onPress={handleServices} image={servicesImage} label="Services" />
          <Button onPress={handleStylist} image={stylistsImage} label="Stylists" />
        </View>
      </ScrollView>
    </View>
  );
};

// Reusable Button component
const Button = ({ onPress, image, label }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Image source={image} style={styles.image} />
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scrollContainer: { paddingHorizontal: 20, paddingBottom: 80 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  adminText: { fontSize: 14, color: 'gray', textTransform: 'uppercase' },
  username: { fontSize: 22, fontWeight: 'bold' },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, flexWrap: 'wrap' },
  statBox: { padding: 15, borderRadius: 10, width: '48%', marginBottom: 15 },
  statText: { fontSize: 14, color: '#FFF' },
  statNumber: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginVertical: 5 },
  statMore: { fontSize: 12, color: '#FFF' },
  scheduleContainer: { marginVertical: 0 },
  loader: { marginVertical: 20 },
  appointmentText: { fontSize: 14, marginBottom: 10, color: 'gray' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 20 },
  button: { flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 10, padding: 10, elevation: 2, borderColor: 'black', borderWidth: 1, width: '40%' },
  buttonText: { fontSize: 14, marginTop: 5 },
  image: { width: 50, height: 50 },
});

export default AdminScreen;
