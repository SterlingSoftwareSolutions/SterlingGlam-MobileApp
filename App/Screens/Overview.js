import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import admin from '../api/admin';

const Overview = () => {
  const navigation = useNavigation();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const api = await admin();
      const bookingResponse = await api.get('/booking');

      if (bookingResponse.ok) {
        setBookings(bookingResponse.data.booking);
      } else {
        setError('Failed to fetch data');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Use useEffect to fetch data on initial mount
  useEffect(() => {
    fetchData();
  }, []);

  // Use useFocusEffect to refetch data when the screen is focused
  useFocusEffect(
    useCallback(() => {
      setLoading(true); // Show loader when refetching
      fetchData();
    }, [])
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#24150E" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Recent Appointments */}
      <View style={styles.recentAppointment}>
        <Text style={styles.sectionTitle}>Your Appointments</Text>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <View key={booking.id} style={styles.appointmentCard}>
              <View style={styles.appointmentHeader}>
                <Icon name="calendar-clock" size={18} color="#24150E" />
                <Text style={styles.appointmentDate}>
                  {new Date(booking.date).toLocaleDateString()} at {booking.start_time} - {booking.end_time}
                </Text>
              </View>
              <Text style={styles.appointmentTitle}>{booking.services[0]?.name}</Text>
              <Text style={styles.appointmentSubtitle}>Specialist: {booking.staff.name}</Text>
              <Text style={styles.appointmentService}>
                {booking.services.map(service => service.name).join(', ')}
              </Text>
              <View style={styles.appointmentFooter}>
                <Text style={styles.appointmentStatus}>Confirmed</Text>
                <Text style={styles.appointmentPrice}>
                  Rs.{booking.total_price ? booking.total_price : '0.00'}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noAppointments}>No recent appointments available.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  recentAppointment: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000', // black
    marginBottom: 15,
  },
  appointmentCard: {
    backgroundColor: '#F2F2F2', // light grey
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  appointmentDate: {
    fontSize: 14,
    color: '#24150E', // brown
    marginLeft: 8,
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000', // black
    marginTop: 8,
  },
  appointmentSubtitle: {
    fontSize: 14,
    color: '#8A8A8A', // light grey
    marginTop: 5,
  },
  appointmentService: {
    fontSize: 14,
    color: '#24150E', // brown
    marginTop: 5,
  },
  appointmentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  appointmentStatus: {
    fontSize: 14,
    fontWeight: '600',
    color: '#24150E', // brown
  },
  appointmentPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000', // black
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Overview;
