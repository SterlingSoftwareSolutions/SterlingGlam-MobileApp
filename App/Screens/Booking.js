import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { format, addDays } from 'date-fns';

const BookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const daysToShow = 6; // Number of days to display for selection
  const currentDate = new Date();

  const slots = [
    '09.00 - 10.00',
    '10.00 - 11.00',
    '11.00 - 12.00',
    '13.00 - 14.00',
    '14.00 - 15.00',
    '15.00 - 16.00',
    '16.00 - 17.00',
    '17.00 - 18.00',
  ];

  const otherServices = [
    { id: 1, name: 'Eye Makeup', image: 'eye-makeup-image-uri' },
    { id: 2, name: 'Hair Makeup', image: 'hair-makeup-image-uri' },
    { id: 3, name: 'Bridal Makeup', image: 'bridal-makeup-image-uri' },
  ];

  const selectDate = (date) => {
    setSelectedDate(date);
  };

  const selectSlot = (slot) => {
    setSelectedSlot(slot);
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
        <Text style={styles.dateText}>{dateFormatted.split(' ')[0]}</Text>
        <Text style={styles.dateText}>{dateFormatted.split(' ')[1]}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Booking</Text>

      <View style={styles.datePickerContainer}>
        <Text style={styles.sectionTitle}>Pick Day</Text>
        <FlatList
          data={[...Array(daysToShow).keys()].map(i => addDays(currentDate, i))}
          renderItem={renderDateItem}
          horizontal
          keyExtractor={(item) => item.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateList}
        />
      </View>

      <View style={styles.slotsContainer}>
        <Text style={styles.sectionTitle}>Slots</Text>
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
              <Text style={styles.slotText}>{slot}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.otherServicesContainer}>
        <Text style={styles.sectionTitle}>Other Services (3)</Text>
        <FlatList
          data={otherServices}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.otherServiceItem}
              onPress={() => setSelectedService(item.id)}
            >
              <View style={styles.serviceImage} />
              <Text style={styles.serviceText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book</Text>
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
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
    backgroundColor: '#795548',
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  slotsContainer: {
    paddingHorizontal: 20,
  },
  slotsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  slotItem: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    width: '30%',
    alignItems: 'center',
  },
  selectedSlotItem: {
    backgroundColor: '#795548',
  },
  slotText: {
    fontSize: 16,
    color: '#000',
  },
  otherServicesContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  otherServiceItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  serviceImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 14,
  },
  bookButton: {
    backgroundColor: '#795548',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 5,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingScreen;
