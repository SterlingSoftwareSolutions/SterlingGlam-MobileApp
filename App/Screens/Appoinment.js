import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontSize, Color, Border } from '../Styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';


const Appointment = () => {
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

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

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleBookAppointment = () => {
    if (selectedDate && selectedTimeSlot) {
      // Logic to handle booking appointment with selectedDate and selectedTimeSlot
      console.log('Booking appointment for:', selectedDate, 'at time slot:', selectedTimeSlot);
      navigation.navigate("AppoinmentHistory");
      
    } else {
      console.warn('Please select a date and a time slot for the appointment.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Appointment</Text>

      <View style={styles.dateContainer}>
        <Text style={styles.account}>Pick the Date</Text>
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
        <TouchableOpacity
          style={[styles.timeSlot, selectedTimeSlot === '9.00' && styles.selectedTimeSlot]}
          onPress={() => handleTimeSlotSelect('9.00')}
        >
          <Text style={styles.timeText}>9.00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.timeSlot, selectedTimeSlot === '10.00' && styles.selectedTimeSlot]}
          onPress={() => handleTimeSlotSelect('10.00')}
        >
          <Text style={styles.timeText}>10.00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.timeSlot, selectedTimeSlot === '11.00' && styles.selectedTimeSlot]}
          onPress={() => handleTimeSlotSelect('11.00')}
        >
          <Text style={styles.timeText}>11.00</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.day}>Afternoon</Text>
      <View style={styles.timeStyle}>
        <TouchableOpacity
          style={[styles.timeSlot, selectedTimeSlot === '13.00' && styles.selectedTimeSlot]}
          onPress={() => handleTimeSlotSelect('13.00')}
        >
          <Text style={styles.timeText}>13.00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.timeSlot, selectedTimeSlot === '14.00' && styles.selectedTimeSlot]}
          onPress={() => handleTimeSlotSelect('14.00')}
        >
          <Text style={styles.timeText}>14.00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.timeSlot, selectedTimeSlot === '15.00' && styles.selectedTimeSlot]}
          onPress={() => handleTimeSlotSelect('15.00')}
        >
          <Text style={styles.timeText}>15.00</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.timeStyle}>
        <TouchableOpacity
          style={[styles.timeSlot, selectedTimeSlot === '16.00' && styles.selectedTimeSlot]}
          onPress={() => handleTimeSlotSelect('16.00')}
        >
          <Text style={styles.timeText}>16.00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.timeSlot, selectedTimeSlot === '17.00' && styles.selectedTimeSlot]}
          onPress={() => handleTimeSlotSelect('17.00')}
        >
          <Text style={styles.timeText}>17.00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.timeSlot, selectedTimeSlot === '18.00' && styles.selectedTimeSlot]}
          onPress={() => handleTimeSlotSelect('18.00')}
        >
          <Text style={styles.timeText}>18.00</Text>
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
    margin: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  account: {
    fontSize: 20,
    // flex: 1, 
  },
  calendarIcon: {
    width: 30,
    height: 30,
    marginLeft: 10, 
  },
  selectedDateText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color:Color.colorPurple
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
  selectedTimeSlot: {
    borderColor: Color.colorPurple,
    borderWidth: 2,
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
