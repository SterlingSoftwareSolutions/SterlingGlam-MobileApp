import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import admin from '../api/admin';
import { useFocusEffect } from '@react-navigation/native';
import dayjs from 'dayjs';
import { format, addDays, subDays } from 'date-fns';

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
  const [startDate, setStartDate] = useState(new Date());

  const fetchBookings = async (date) => {
    try {
      const api = await admin();
      const bookingResponse = await api.get('/booking');
      console.log("booooooooooooooooooooooooooooking", bookingResponse);

      if (bookingResponse.ok) {
        const formattedBookings = bookingResponse.data.booking
          .filter((booking) => booking.date === date) // Filter bookings based on the selected date
          .map((booking) => ({
            id: booking.id,
            name: `${booking.user.first_name} ${booking.user.last_name}`,
            services: booking.services.map(service => service.name),
            time: format(new Date(`${booking.date}T${booking.start_time}`), 'HH:mm'),
            stylist: booking.staff.name,
            date: booking.date,
            start_time: booking.start_time,
            staff_id: booking.staff.id,
          }));
        setBookings(formattedBookings);
      } else {
        setError('Failed to fetch data');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setLoading(false);
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

  const handleDateClick = (date) => {
    setSelectedDate(format(date, 'yyyy-MM-dd')); 
  };

  const handlePrevious = () => {
    const newStartDate = subDays(startDate, 6);
    setStartDate(newStartDate);
    setSelectedDate(format(newStartDate, 'yyyy-MM-dd'));
  };

  const handleNext = () => {
    const newStartDate = addDays(startDate, 6);
    setStartDate(newStartDate);
    setSelectedDate(format(newStartDate, 'yyyy-MM-dd'));
  };

  // Generate the next 6 days from the start date
  const getNextDays = (start, days) => {
    return Array.from({ length: days }, (_, index) => addDays(start, index));
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#24150E" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Upcoming Appointments</Text>
      <View style={styles.datePicker}>
        <TouchableOpacity onPress={handlePrevious}>
          <Text style={styles.arrow}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>{format(startDate, 'MMMM, yyyy')}</Text>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.arrow}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dateRow}>
        {getNextDays(startDate, 6).map((date) => (
          <TouchableOpacity
            key={format(date, 'yyyy-MM-dd')}
            style={[
              styles.dateItem,
              selectedDate === format(date, 'yyyy-MM-dd') ? styles.selectedDateItem : {}
            ]}
            onPress={() => handleDateClick(date)}
          >
            <Text
              style={[
                styles.weekday,
                selectedDate === format(date, 'yyyy-MM-dd') ? styles.selectedDateText : {}
              ]}
            >
              {format(date, 'EEE').toUpperCase()}
            </Text>
            <Text
              style={[
                styles.dateText,
                selectedDate === format(date, 'yyyy-MM-dd') ? styles.selectedDateText : {}
              ]}
            >
              {format(date, 'dd')}
            </Text>
          </TouchableOpacity>
        ))}
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
                  keyExtractor={(item, index) => `${booking.id}-${index}`}
                  renderItem={({ item }) => (
                    <View
                      style={[
                        styles.appointmentCard,
                        { borderColor: staffMember?.color, backgroundColor: `${staffMember?.color}20` },
                      ]}
                    >
                      <Text style={styles.serviceText}>{item}</Text>
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
    fontSize: 20, // Reduced font size
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4A4A4A',
  },
  heading: {
    fontSize: 16, // Reduced font size
    fontWeight: 'bold',
    color: '#24150E',
    marginHorizontal: 10,
  },
  arrowButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  arrowText: {
    fontSize: 20, // Reduced font size
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
    fontSize: 14, // Reduced font size
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
    fontSize: 14, // Reduced font size
    color: '#555',
    fontWeight: 'bold',
  },
  appointmentCard: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 10,
    maxWidth: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceText: {
    fontSize: 12, // Reduced font size
    color: '#333',
    textAlign: 'center',
  },
  noBookingsText: {
    fontSize: 14, // Reduced font size
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  arrow: {
    fontSize: 20, // Reduced font size
    color: '#333',
  },
  monthText: {
    fontSize: 16, // Reduced font size
    fontWeight: 'bold',
    color: '#333',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateItem: {
    alignItems: 'center',
    paddingVertical: 8, // Reduced padding
    paddingHorizontal: 12, // Reduced padding
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    width: 50,
  },
  selectedDateItem: {
    backgroundColor: '#4B9B61',
  },
  weekday: {
    fontSize: 12, // Reduced font size
    fontWeight: 'bold',
    color: '#333',
  },
  dateText: {
    fontSize: 14, // Reduced font size
    fontWeight: 'bold',
    color: '#333',
  },
  selectedDateText: {
    color: '#fff',
  },
});

export default DaySchedule;
