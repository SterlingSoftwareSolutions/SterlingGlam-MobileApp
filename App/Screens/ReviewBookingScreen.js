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

const ReviewBookingScreen = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const services = [
    'Foundation',
    'Primer',
    'Setting Powder',
    'Setting Spray',
    'Blush',
    'Bronzer',
    'Contour',
    'Highlighter',
  ];

  const specialists = ['Selena', 'Rachelle', 'Katherine'];

  const slots = [
    '09.00 - 10.00',
    '10.00 - 11.00',
    '11.00 - 12.00',
    '13.00 - 14.00',
    '14.00 - 15.00',
    '15.00 - 16.00',
    '16.00 - 17.00',
    '17.00 - 18.00',
    '18.00 - 19.00',
  ];

  const daysToShow = 6; 
  const currentDate = new Date();

  const toggleService = (service) => {
    setSelectedServices((prevServices) =>
      prevServices.includes(service)
        ? prevServices.filter((s) => s !== service)
        : [...prevServices, service]
    );
  };

  const renderDateItem = ({ item }) => {
    const dateFormatted = format(item, 'EEE dd');
    return (
      <TouchableOpacity
        style={[
          styles.dateItem,
          selectedDate?.toDateString() === item.toDateString() && styles.selectedDateItem,
        ]}
        onPress={() => setSelectedDate(item)}
      >
        <Text style={styles.dateText}>{dateFormatted.split(' ')[0]}</Text>
        <Text style={styles.dateText}>{dateFormatted.split(' ')[1]}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Review Booking</Text>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.servicesContainer}>
          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.serviceItem,
                selectedServices.includes(service) && styles.selectedServiceItem,
              ]}
              onPress={() => toggleService(service)}
            >
              <Text style={styles.serviceText}>{service}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Specialist</Text>
        <View style={styles.specialistsContainer}>
          {specialists.map((specialist, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.specialistItem,
                selectedSpecialist === specialist && styles.selectedSpecialistItem,
              ]}
              onPress={() => setSelectedSpecialist(specialist)}
            >
              <Text style={styles.specialistText}>{specialist}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Day</Text>
        <FlatList
          data={[...Array(daysToShow).keys()].map(i => addDays(currentDate, i))}
          renderItem={renderDateItem}
          horizontal
          keyExtractor={(item) => item.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateList}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Slot</Text>
        <View style={styles.slotsGrid}>
          {slots.map((slot, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.slotItem,
                selectedSlot === slot && styles.selectedSlotItem,
              ]}
              onPress={() => setSelectedSlot(slot)}
            >
              <Text style={styles.slotText}>{slot}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
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
  sectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  serviceItem: {
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  selectedServiceItem: {
    backgroundColor: '#795548',
  },
  serviceText: {
    fontSize: 16,
    color: '#000',
  },
  specialistsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  specialistItem: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  selectedSpecialistItem: {
    backgroundColor: '#795548',
  },
  specialistText: {
    fontSize: 16,
    color: '#000',
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
    fontSize: 14,
    color: '#000',
  },
  confirmButton: {
    backgroundColor: '#795548',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 5,
    marginBottom:80
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReviewBookingScreen;
