import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import admin from '../api/admin';
import { useFocusEffect } from '@react-navigation/native';
import dayjs from 'dayjs';

const generateColor = (index) => {
  const colors = ['#00CC66', '#FFCC00', '#66B2FF', '#FF6347', '#8A2BE2'];
  return colors[index % colors.length];
};

const DaySchedule = () => {
  const [bookings, setBookings] = useState([]);
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));

  const fetchBookings = async (date) => {
    try {
      const api = await admin();
      const bookingResponse = await api.get(`/booking?date=${date}`);

      if (bookingResponse.ok) {
        setBookings(bookingResponse.data.booking);
      } else {
        setError('Failed to fetch booking data');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    }
  };

  const fetchStaff = async () => {
    try {
      const api = await admin();
      const staffResponse = await api.get('/staff');

      if (staffResponse.ok) {
        const staffData = staffResponse.data.data.map((member, index) => ({
          ...member,
          color: generateColor(index),
        }));
        setStaff(staffData);
      } else {
        setError('Failed to fetch staff data');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchBookings(selectedDate), fetchStaff()]);
      setLoading(false);
    };
    loadData();
  }, [selectedDate]);

  useFocusEffect(
    useCallback(() => {
      const refetchData = async () => {
        setLoading(true);
        await fetchBookings(selectedDate);
        setLoading(false);
      };
      refetchData();
    }, [selectedDate])
  );

  const handlePrevDate = () => {
    setSelectedDate((prevDate) => dayjs(prevDate).subtract(1, 'day').format('YYYY-MM-DD'));
  };

  const handleNextDate = () => {
    setSelectedDate((prevDate) => dayjs(prevDate).add(1, 'day').format('YYYY-MM-DD'));
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#24150E" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevDate} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Day Schedule - {dayjs(selectedDate).format('DD MMM YYYY')}</Text>
        <TouchableOpacity onPress={handleNextDate} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.legendContainer}>
        {staff.map((member) => (
          <View key={member.id} style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: member.color }]} />
            <Text style={styles.legendText}>{member.name}</Text>
          </View>
        ))}
      </View>

      {bookings.length === 0 ? (
        <Text style={styles.noBookingsText}>No bookings available for this date.</Text>
      ) : (
        <View style={styles.scheduleContainer}>
          {bookings.map((booking) => {
            const staffMember = staff.find((member) => member.id === booking.staff_id);
            return (
              <View key={booking.id} style={styles.timeSlotRow}>
                <Text style={styles.time}>{booking.start_time.slice(0, 5)}</Text>
                <FlatList
                  horizontal
                  data={booking.services}
                  keyExtractor={(item) => `${item.id}`}
                  renderItem={({ item }) => (
                    <View
                      style={[
                        styles.appointmentCard,
                        { borderColor: staffMember?.color, backgroundColor: `${staffMember?.color}20` },
                      ]}
                    >
                      <Text style={styles.serviceText}>{item.name}</Text>
                    </View>
                  )}
                />
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#24150E',
    marginHorizontal: 10,
  },
  arrowButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  arrowText: {
    fontSize: 22,
    color: '#24150E',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 15,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 16,
    color: '#333',
  },
  scheduleContainer: {
    marginTop: 10,
  },
  timeSlotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  time: {
    width: 60,
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',
  },
  appointmentCard: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 10,
    borderWidth: 1,
  },
  serviceText: {
    fontSize: 14,
    color: '#333',
  },
  noBookingsText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default DaySchedule;
