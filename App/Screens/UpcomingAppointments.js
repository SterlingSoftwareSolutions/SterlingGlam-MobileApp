import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { format, addDays, subDays } from 'date-fns'; 
import admin from '../api/admin';
import { useFocusEffect } from '@react-navigation/native';

const UpcomingAppointments = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [startDate, setStartDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const api = await admin();
      const bookingResponse = await api.get('/booking');

      if (bookingResponse.ok) {
        const formattedBookings = bookingResponse.data.booking.map((booking) => ({
          id: booking.id,
          name: `${booking.user.first_name} ${booking.user.last_name}`,
          services: booking.services.map(service => service.name).join(', '),
          time: format(new Date(`${booking.date}T${booking.start_time}`), 'HH:mm'),
          stylist: booking.staff.name,
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
  }, []);

  // Refetch data when the screen is focused
  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchData();
    }, [])
  );

  const updateAppointmentStatus = async (id, status) => {
    try {
      setLoading(true);
      const api = await admin();
      const response = await api.post(`/booking-update/${id}`, { status });

      if (response.ok) {
        Alert.alert("Success", `Appointment ${status}`);
        fetchData(); // Refresh the booking list after update
      } else {
        setError('Failed to update booking status');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const cancelAppointment = (id) => updateAppointmentStatus(id, 'canceled');
  const approveAppointment = (id) => updateAppointmentStatus(id, 'approved');
  const completeAppointment = (id) => updateAppointmentStatus(id, 'completed');

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
  };

  const handleNext = () => {
    const newStartDate = addDays(startDate, 6); 
    setStartDate(newStartDate);
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
          onPress={() => approveAppointment(item.id)}
        >
          <Text style={styles.buttonText}>Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => cancelAppointment(item.id)}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.completeButton]}
          onPress={() => completeAppointment(item.id)}
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
            onPress={() => setSelectedDate(format(date, 'yyyy-MM-dd'))}
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
    backgroundColor: '#FEC107',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default UpcomingAppointments;
