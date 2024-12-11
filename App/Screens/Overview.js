import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import admin from '../api/admin';

const Overview = () => {
  const navigation = useNavigation();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to sort bookings by date (most recent first)
  const sortBookingsByDate = (bookings) => {
    return bookings.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const fetchData = async () => {
    try {
      const api = await admin();
      const bookingResponse = await api.get('/booking');

      if (bookingResponse.ok) {
        setBookings(sortBookingsByDate(bookingResponse.data.booking));
      } else {
        setError('Failed to fetch data');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchData();
    }, [])
  );

  // Function to return color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#F6A800'; // Orange/yellow for pending
      case 'rejected':
        return '#D32F2F'; // Red for rejected
      case 'approved':
        return '#388E3C'; // Green for approved
      case 'completed':
        return '#1976D2'; // Blue for completed
      default:
        return '#BDBDBD'; // Grey as default
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.recentAppointment}>
        <Text style={styles.sectionTitle}>Your Appointments</Text>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <TouchableOpacity
              key={booking.id}
              style={[styles.appointmentCard, { borderLeftColor: getStatusColor(booking.status) }]}
              // onPress={() => navigation.navigate('BookingDetails', { bookingId: booking.id })}
            >
              <View style={styles.appointmentHeader}>
                <Icon name="calendar-clock" size={20} color="#000" />
                <Text style={styles.appointmentDate}>
                  {new Date(booking.date).toLocaleDateString()} at {booking.start_time} - {booking.end_time}
                </Text>
              </View>
              <Text style={styles.appointmentTitle}>{booking.services[0]?.name}</Text>
              <Text style={styles.appointmentSubtitle}>Specialist: {booking.staff.name}</Text>
              <Text style={styles.appointmentService}>
                {booking.services.map((service) => service.name).join(', ')}
              </Text>
              <View style={styles.appointmentFooter}>
                <Text style={[styles.appointmentStatus, { color: getStatusColor(booking.status) }]}>
                  {booking.status}
                </Text>
                <Text style={styles.appointmentPrice}>
                  Rs.{booking.total_price ? booking.total_price : '0.00'}
                </Text>
              </View>
            </TouchableOpacity>
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
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  recentAppointment: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
  },
  appointmentCard: {
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginHorizontal: 10,
    borderLeftWidth: 5,
    overflow: 'hidden',
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  appointmentDate: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  appointmentTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginTop: 12,
  },
  appointmentSubtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  appointmentService: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  appointmentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },
  appointmentStatus: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  appointmentPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  noAppointments: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default Overview;
