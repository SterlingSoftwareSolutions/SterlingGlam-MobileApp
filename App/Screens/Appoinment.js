import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontSize, Color, Border } from '../Styles/GlobalStyles';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleConfirm = (date) => {
    setSelectedDate(date);
    setDatePickerVisibility(false); // Hide date picker after selecting date
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleBookAppointment = () => {
    if (selectedDate) {
      // Logic to handle booking appointment with selectedDate
      console.log('Booking appointment for:', selectedDate);
    } else {
      console.warn('Please select a date for the appointment.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Appointment</Text>

      <View style={styles.dateContainer}>
        <Text style={styles.account}>Date</Text>
        <TouchableOpacity onPress={showDatePicker} >
          <Image
            source={require('../Assets/date-icon.png')}
            style={styles.calendarIcon}
          />
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {selectedDate && (
        <Text style={styles.selectedDateText}>
          Selected Date: {selectedDate.toLocaleDateString()}
        </Text>
      )}

<Text style={styles.day}>Morning</Text>
      <View style={styles.timeStyle}>
        <TouchableOpacity style={styles.timeSlot}>
          <Text style={styles.timeText}>9.00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeSlot}>
          <Text style={styles.timeText}>10.00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeSlot}>
          <Text style={styles.timeText}>11.00</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.day}>Afternoon</Text>
      <View style={styles.timeStyle}>
        <TouchableOpacity style={styles.timeSlot}>
          <Text style={styles.timeText}>1.00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeSlot}>
          <Text style={styles.timeText}>2.00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeSlot}>
          <Text style={styles.timeText}>3.00</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.timeStyle}>
        <TouchableOpacity style={styles.timeSlot}>
          <Text style={styles.timeText}>4.00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeSlot}>
          <Text style={styles.timeText}>5.00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeSlot}>
          <Text style={styles.timeText}>6.00</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.bookButton, styles.groupChildLayout]} onPress={handleBookAppointment}>
        <View style={styles.groupChild} />
        <Text style={styles.bookButtonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  account: {
    fontSize: 20,
    // flex: 1, // Take up remaining space
  },
  calendarIcon: {
    width: 30,
    height: 30,
    marginLeft: 10, // Add some margin between text and icon
  },
  selectedDateText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  day: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  timeStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  timeSlot: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  timeText: {
    fontSize: 16,
    textAlign: 'center',
  },
  groupChildLayout: {
    height: 54,
    width: '100%',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorPurple,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bookButtonText: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: 'center',
    lineHeight: 50,
  },
});

export default Appointment;
