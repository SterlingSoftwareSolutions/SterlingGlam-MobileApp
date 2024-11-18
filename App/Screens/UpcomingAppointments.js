import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { format, addDays, subDays } from 'date-fns';
import admin from '../api/admin';
import { useFocusEffect } from '@react-navigation/native';

const UpcomingAppointments = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd')); // Start with today's date
  const [startDate, setStartDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const api = await admin();
      const bookingResponse = await api.get('/booking');

      if (bookingResponse.ok) {
        const formattedBookings = bookingResponse.data.booking
          .filter((booking) => booking.date === selectedDate) // Filter bookings based on selected date
          .map((booking) => ({
            id: booking.id,
            name: `${booking.user.first_name} ${booking.user.last_name}`,
            services: booking.services.map(service => service.name).join(', '),
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

  // Fetch data on initial mount
  useEffect(() => {
    fetchData();
  }, [selectedDate]); // Re-fetch when selectedDate changes

  // Refetch data when the screen is focused
  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchData();
    }, [selectedDate]) // Refetch data when the selectedDate changes
  );

  const updateAppointmentStatus = async (id, status, date, start_time, staff_id) => {
    try {
      setLoading(true);
      const api = await admin();
      
      const response = await api.post(`/booking-update/${id}`, {
        status,
        date,
        start_time,
        staff_id
      });

      if (response.ok) {
        fetchData(); // Refresh the booking list after update
        showAlert(status); // Show the alert based on the status
      } else {
        setError('Failed to update booking status');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const showAlert = (status) => {
    let message = '';
    if (status === 'approved') {
      message = 'Appointment has been approved.';
    } else if (status === 'rejected') {
      message = 'Appointment has been rejected.';
    } else if (status === 'completed') {
      message = 'Appointment has been marked as completed.';
    }
    Alert.alert('Appointment Status', message);
  };

  const cancelAppointment = (id, date, start_time, staff_id) => {
    updateAppointmentStatus(id, 'rejected', date, start_time, staff_id);
  };

  const approveAppointment = (id, date, start_time, staff_id) => {
    updateAppointmentStatus(id, 'approved', date, start_time, staff_id);
  };

  const completeAppointment = (id, date, start_time, staff_id) => {
    updateAppointmentStatus(id, 'completed', date, start_time, staff_id);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#24150E" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  // Get next 6 days
  const getNextDays = (start, days) => {
    return Array.from({ length: days }, (_, index) => addDays(start, index));
  };

  const handlePrevious = () => {
    const newStartDate = subDays(startDate, 6); 
    setStartDate(newStartDate);
    setSelectedDate(format(newStartDate, 'yyyy-MM-dd')); // Update selectedDate to reflect new start date
  };

  const handleNext = () => {
    const newStartDate = addDays(startDate, 6); 
    setStartDate(newStartDate);
    setSelectedDate(format(newStartDate, 'yyyy-MM-dd')); // Update selectedDate to reflect new start date
  };

  const handleDateClick = (date) => {
    setSelectedDate(format(date, 'yyyy-MM-dd')); // Update selectedDate when a date is clicked
  };

  const renderAppointment = ({ item }) => (
    <View style={styles.appointmentCard}>
      <View style={styles.appointmentInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.services}>{item.services}</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.stylist}>{item.stylist}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.approveButton]}
          onPress={() => approveAppointment(item.id, item.date, item.start_time, item.staff_id)}
        >
          <Text style={styles.buttonText}>Approve</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => cancelAppointment(item.id, item.date, item.start_time, item.staff_id)}
        >
          <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.completeButton]}
          onPress={() => completeAppointment(item.id, item.date, item.start_time, item.staff_id)}
        >
          <Text style={styles.buttonText}>Complete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
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
            style={[styles.dateItem, selectedDate === format(date, 'yyyy-MM-dd') ? styles.selectedDateItem : {}]}
            onPress={() => handleDateClick(date)} // When a date is clicked, update selectedDate
          >
            <Text style={[styles.weekday, selectedDate === format(date, 'yyyy-MM-dd') ? styles.selectedDateText : {}]}>
              {format(date, 'EEE').toUpperCase()}
            </Text>
            <Text style={[styles.dateText, selectedDate === format(date, 'yyyy-MM-dd') ? styles.selectedDateText : {}]}>
              {format(date, 'dd')}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAppointment}
        contentContainerStyle={styles.appointmentList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4A4A4A',
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  arrow: {
    fontSize: 24,
    paddingHorizontal: 10,
    color: '#4A4A4A',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dateItem: {
    alignItems: 'center',
    padding: 10,
  },
  selectedDateItem: {
    backgroundColor: '#909090',  
    borderRadius: 10,
    padding: 10,
  },
  weekday: {
    color: '#666',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedDateText: {
    color: '#fff',
  },
  appointmentList: {
    paddingBottom: 20,
  },
  appointmentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignSelf: 'center', 
    elevation: 3, 
  },
  appointmentInfo: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  services: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,  
  },
  timeContainer: {
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#888',
  },
  stylist: {
    fontSize: 14,
    color: '#888',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 90,
    paddingVertical: 8,
    marginVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  approveButton: {
    backgroundColor: '#7FBF7F', 
  },
  cancelButton: {
    backgroundColor: '#FF6F61', 
  },
  completeButton: {
    backgroundColor: '#6EC1E4',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UpcomingAppointments;
