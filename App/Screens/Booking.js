import React, { useState } from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,FlatList,} from 'react-native';
import { format, addDays } from 'date-fns';
import { useRoute, useNavigation } from '@react-navigation/native';

const BookingScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [startDayOffset, setStartDayOffset] = useState(0);

  const daysToShow = 6; 
  const currentDate = new Date();

  // Generating time slots in 30-minute increments from 9:00 AM to 6:00 PM
  const slots = [];
  for (let i = 9; i < 18; i++) {
    slots.push(`${i}:00`, `${i}:30`);
  }

  // handleBooking
  const handleBooking = () => {
    const [hour, minute] = selectedSlot.split(':');
  
    const formattedSlot = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:00`; 
  
    navigation.navigate("BookingConfirm", {
      selectedServices: route.params.selectedServices,
      selectedSpecialist: route.params.selectedSpecialist,
      selectedDate,
      selectedSlot: formattedSlot,
      totalPrice: route.params.totalPrice
    });
  };
  

  const selectDate = (date) => {
    setSelectedDate(date);
  };

  const selectSlot = (slot) => {
    setSelectedSlot(slot);
  }

  const moveDaysBack = () => {
    if (startDayOffset > 0) {
      setStartDayOffset(startDayOffset - daysToShow);
    }
  };

  const moveDaysForward = () => {
    setStartDayOffset(startDayOffset + daysToShow);
  };

  const renderDateItem = ({ item }) => {
    const dateFormatted = format(item, 'EEE dd');
    return (
      <TouchableOpacity
        style={[
          styles.dateItem,
          selectedDate?.toDateString() === item.toDateString() && styles.selectedDateItem,
        ]}
        onPress={() => selectDate(item)}
      >
        <Text
          style={[
            styles.dateText,
            selectedDate?.toDateString() === item.toDateString() && styles.selectedDateText,
          ]}
        >
          {dateFormatted.split(' ')[0]}
        </Text>
        <Text
          style={[
            styles.dateText,
            selectedDate?.toDateString() === item.toDateString() && styles.selectedDateText,
          ]}
        >
          {dateFormatted.split(' ')[1]}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Booking</Text>

      <View style={styles.datePickerContainer}>
        <Text style={styles.sectionTitle}>Pick Day</Text>
        <View style={styles.dateNavigation}>
          <TouchableOpacity onPress={moveDaysBack} style={styles.arrowButton}>
            <Text style={styles.arrowText}>{'<'}</Text>
          </TouchableOpacity>
          <FlatList
            data={[...Array(daysToShow).keys()].map(i => addDays(currentDate, i + startDayOffset))}
            renderItem={renderDateItem}
            horizontal
            keyExtractor={(item) => item.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dateList}
          />
          <TouchableOpacity onPress={moveDaysForward} style={styles.arrowButton}>
            <Text style={styles.arrowText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.slotsContainer}>
        <Text style={styles.sectionTitle}>Available Slots</Text>
        <View style={styles.slotsGrid}>
          {slots.map((slot, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.slotItem,
                selectedSlot === slot && styles.selectedSlotItem,
              ]}
              onPress={() => selectSlot(slot)}
            >
              <Text
                style={[
                  styles.slotText,
                  selectedSlot === slot && styles.selectedSlotText,
                ]}
              >
                {slot}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>Proceed</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  datePickerContainer: {
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#24150E',
    marginTop:10
  },
  dateNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowButton: {
    padding: 10,
  },
  arrowText: {
    fontSize: 20,
    color: '#000',
    fontWeight:"bold"
  },
  dateList: {
    flexDirection: 'row',
  },
  dateItem: {
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  selectedDateItem: {
    backgroundColor: '#24150E',
  },
  dateText: {
    fontSize: 16,
    color: '#000',
    fontWeight:"bold"
  },
  selectedDateText: {
    color: '#fff',
  },
  slotsContainer: {
    paddingHorizontal: 20,
    marginTop:30
  },
  slotsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
  },
  slotItem: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    // backgroundColor: '#f0f0f0',
    width: '47%', // Adjust to fit 2 slots per row
    alignItems: 'center',
    marginTop:15,
    borderWidth:1,
    borderColor:'#795548'
  },
  selectedSlotItem: {
    backgroundColor: '#24150E',
  },
  slotText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  selectedSlotText: {
    color: '#fff',
  },
  bookButton: {
    backgroundColor: '#24150E',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 5,
    marginBottom:80
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingScreen;
