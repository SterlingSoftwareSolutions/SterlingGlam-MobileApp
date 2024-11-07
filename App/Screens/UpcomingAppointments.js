import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { format, addDays, subDays } from 'date-fns'; 

const appointments = [
  { id: '1', name: 'Dhanushka', services: 'Haircut, Shaving', time: '10:00', stylist: 'Anderson' },
  { id: '2', name: 'Umindu', services: 'Shaving, Facial', time: '12:30', stylist: 'Clinton' },
  { id: '3', name: 'Shavin', services: 'Facial, Haircut, Shaving', time: '15:00', stylist: 'Anderson' },
  { id: '4', name: 'Isuru', services: 'Haircut', time: '10:00', stylist: 'Allen' },
  { id: '5', name: 'Thevanan', services: 'Beard Trimming', time: '09:00', stylist: 'Anderson' },
  { id: '6', name: 'Gamika', services: 'Massage Therapy', time: '10:00', stylist: 'Clinton' },
];

const UpcomingAppointments = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [startDate, setStartDate] = useState(new Date());

  const getNextDays = (start, days) => {
    return Array.from({ length: days }, (_, index) => addDays(start, index));
  };

  const cancelAppointment = (id) => {
    console.log(`Appointment ${id} cancelled`);
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
        <Text style={styles.details}>{item.services}</Text>
        <Text style={styles.time}>{item.time} | {item.stylist}</Text>
      </View>
      <TouchableOpacity style={styles.cancelButton} onPress={() => cancelAppointment(item.id)}>
        <Text style={styles.cancelButtonText}>Cancel Appointment</Text>
      </TouchableOpacity>
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
            style={[
              styles.dateItem,
              selectedDate === format(date, 'yyyy-MM-dd') ? styles.selectedDateItem : {},
            ]}
            onPress={() => setSelectedDate(format(date, 'yyyy-MM-dd'))}
          >
            <Text
              style={[
                styles.weekday,
                selectedDate === format(date, 'yyyy-MM-dd') ? styles.selectedDateText : {},
              ]}
            >
              {format(date, 'EEE').toUpperCase()}
            </Text>
            <Text
              style={[
                styles.dateText,
                selectedDate === format(date, 'yyyy-MM-dd') ? styles.selectedDateText : {},
              ]}
            >
              {format(date, 'dd')}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
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
  },
  arrow: {
    fontSize: 24,
    paddingHorizontal: 10,
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
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  weekday: {
    color: '#666',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  selectedDateText: {
    color: 'white',
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
  },
  appointmentInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    color: '#666',
  },
  time: {
    color: '#666',
  },
  cancelButton: {
    backgroundColor: '#DADADA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#FF0000',
  },
});

export default UpcomingAppointments;
