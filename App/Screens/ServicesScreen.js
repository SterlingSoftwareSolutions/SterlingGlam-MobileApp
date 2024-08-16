import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { servicesData } from '../components/dummyData';

const ServicesScreen = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('haircutStyling');
  const [selectedServiceId, setSelectedServiceId] = useState(null); // Added state for tracking selected service
  const navigation = useNavigation();

  const categoriesData = Object.keys(servicesData).map((key) => ({
    id: key,
    title: servicesData[key].headerTitle,
  }));

  const handleCategoryPress = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

  const handleAppointment = () => {
    navigation.navigate("Booking");
  };

  const handleBookButtonPress = (serviceId) => {
    setSelectedServiceId(serviceId);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={[
        styles.categoryContainer,
        selectedCategory === item.id && styles.activeCategoryContainer,
      ]}
      onPress={() => handleCategoryPress(item.id)}
    >
      <Text
        style={[
          styles.categoryTitle,
          selectedCategory === item.id && styles.activeCategoryTitle,
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const selectedServiceData = servicesData[selectedCategory];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Make an Appointment</Text>

      <View style={styles.servicesContainer}>
        <Text style={styles.sectionHeader}>Services</Text>

        <FlatList
          data={categoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        />

        {selectedServiceData.services.map((service) => (
          <View key={service.id} style={styles.serviceItem}>
            <View style={styles.serviceTextContainer}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
              <Text style={styles.servicePrice}>{service.price}</Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.bookButton,
                selectedServiceId === service.id ? styles.bookButtonSelected : styles.bookButtonDefault
              ]}
              onPress={() => handleBookButtonPress(service.id)}
            >
              <Text style={[
                styles.bookButtonText,
                selectedServiceId === service.id ? styles.bookButtonTextSelected : styles.bookButtonTextDefault
              ]}>
                {selectedServiceId === service.id ? 'Selected' : 'Select'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.specialistContainer}>
        <Text style={styles.sectionHeader}>Select a Specialist</Text>
        <View style={styles.specialistList}>
          {selectedServiceData.specialists.map((specialist) => (
            <TouchableOpacity
              key={specialist.id}
              style={[
                styles.specialistCard,
                selectedSpecialist === specialist.id && styles.selectedSpecialistCard,
              ]}
              onPress={() => setSelectedSpecialist(specialist.id)}
            >
              <Image source={specialist.image} style={styles.specialistImage} />
              <Text style={styles.specialistName}>{specialist.name}</Text>
              <Text style={styles.specialistRating}>⭐ {specialist.rating}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.bookNowButton} onPress={handleAppointment}>
        <Text style={styles.bookNowButtonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#24150E', textAlign: 'center', marginBottom: 20 },
  servicesContainer: { marginBottom: 20 },
  sectionHeader: { fontSize: 18, fontWeight: 'bold', color: '#24150E', marginBottom: 10 },
  serviceItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  serviceTextContainer: { flex: 1, marginRight: 10 },
  serviceName: { fontSize: 16, fontWeight: 'bold', color: '#24150E' },
  serviceDescription: { fontSize: 14, color: '#24150E', marginVertical: 5 },
  servicePrice: { fontSize: 16, color: 'green' },
  bookButton: { 
    borderRadius: 20, 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    alignSelf: 'center' 
  },
  bookButtonDefault: { 
    backgroundColor: '#FFF', 
    borderColor: '#24150E', 
    borderWidth: 1
  },
  bookButtonSelected: { 
    backgroundColor: '#24150E' 
  },
  bookButtonText: { 
    fontWeight: 'bold', 
    fontSize: 12 
  },
  bookButtonTextDefault: {
    color: '#24150E'
  },
  bookButtonTextSelected: {
    color: '#FFF'
  },
  specialistContainer: { marginBottom: 20 },
  specialistList: { flexDirection: 'row', justifyContent: 'space-around' },
  specialistCard: { alignItems: 'center', padding: 10, borderRadius: 10, backgroundColor: '#6B4E35', width: 100 },
  selectedSpecialistCard: { backgroundColor: '#24150E' },
  specialistImage: { width: 50, height: 50, borderRadius: 25, marginBottom: 10 },
  specialistName: { color: '#FFF', fontWeight: 'bold' },
  specialistRating: { color: '#FFF' },
  bookNowButton: { backgroundColor: '#24150E', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 , marginBottom:95},
  bookNowButtonText: { color: '#FFF', fontSize: 18 },
  categoryContainer: {
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom:10
  },
  activeCategoryContainer: {
    backgroundColor: '#24150E',
  },
  categoryTitle: {
    fontSize: 14,
    color: '#24150E',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  activeCategoryTitle: {
    color: '#FFF',
  },
});

export default ServicesScreen;
