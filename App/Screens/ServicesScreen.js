import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import admin from '../api/admin';

const ServicesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState(route.params.serviceType);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [categoriesData, setCategoriesData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [specialistsData, setSpecialistsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const localProfilePicture = require('../resources/specialist1.jpeg');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await admin();
        const categoriesResponse = await api.get('/categories');
        const servicesResponse = await api.get('/services');
        const specialistsResponse = await api.get('/staff');

        if (categoriesResponse.ok && servicesResponse.ok) {
          setCategoriesData(categoriesResponse.data);
          setServicesData(servicesResponse.data);
          setSpecialistsData(specialistsResponse.data.data);
          
        } else {
          setError('Failed to fetch data');
        }
      } catch (err) {
        setError('Error: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter services by selected category
  const filteredServices = servicesData.filter(service => service.category.id === selectedCategory);

  // Handle category selection from the slider
  const handleCategoryPress = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

  // Handle service selection
  const handleServiceSelection = (serviceId) => {
    setSelectedServices((prevSelected) => {
      if (prevSelected.includes(serviceId)) {
        return prevSelected.filter((id) => id !== serviceId);
      } else {
        return [...prevSelected, serviceId];
      }
    });
  };

 // Handle appointment
const handleAppointment = () => {
  const selectedServicesDetails = servicesData.filter(service => selectedServices.includes(service.id));
  const totalPrice = selectedServicesDetails.reduce((acc, service) => acc + service.price, 0);

  navigation.navigate('Booking', { selectedServices: selectedServicesDetails, selectedSpecialist, totalPrice });
};


  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  // Render category item (horizontal slider)
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
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  // Render service item
  const renderServiceItem = ({ item }) => {
    const isSelected = selectedServices.includes(item.id);

    return (
      <View key={item.id} style={styles.serviceItem}>
        <View style={styles.serviceTextContainer}>
          <Text style={styles.serviceName}>{item.name}</Text>
          <Text style={styles.serviceDescription}>{item.description}</Text>
          <Text style={styles.servicePrice}>{item.price}</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.bookButton,
            isSelected ? styles.bookButtonSelected : styles.bookButtonDefault,
          ]}
          onPress={() => handleServiceSelection(item.id)}
        >
          <Text
            style={[
              styles.bookButtonText,
              isSelected ? styles.bookButtonTextSelected : styles.bookButtonTextDefault,
            ]}
          >
            {isSelected ? 'Selected' : 'Select'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Make an Appointment</Text>

      {/* Horizontal Slider for Categories */}
      <FlatList
        data={categoriesData}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />

      {/* Services Section */}
      {filteredServices.length > 0 ? (
        <FlatList
          data={filteredServices} // Only show services of the selected category
          renderItem={renderServiceItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No services available for this category.</Text> // Handle no services case
      )}

      <View style={styles.specialistContainer}>
        <Text style={styles.sectionHeader}>Select a Specialist</Text>
        <View style={styles.specialistList}>
          {specialistsData.map((specialist) => (
            <TouchableOpacity
              key={specialist.id}
              style={[
                styles.specialistCard,
                selectedSpecialist === specialist.id && styles.selectedSpecialistCard,
              ]}
              onPress={() => setSelectedSpecialist(specialist.id)}
            >
              <Image source={localProfilePicture} style={styles.specialistImage} />
              <Text style={styles.specialistName}>{specialist.name}</Text>
              <Text style={styles.specialistRating}>⭐ {specialist.ratings}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Book Now Button */}
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
  bookButton: { borderRadius: 20, paddingVertical: 10, paddingHorizontal: 20, alignSelf: 'center' },
  bookButtonDefault: { backgroundColor: '#FFF', borderColor: '#24150E', borderWidth: 1 },
  bookButtonSelected: { backgroundColor: '#24150E' },
  bookButtonText: { fontWeight: 'bold', fontSize: 12 },
  bookButtonTextDefault: { color: '#24150E' },
  bookButtonTextSelected: { color: '#FFF' },
  bookNowButton: { backgroundColor: '#24150E', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20, marginBottom: 95 },
  bookNowButtonText: { color: '#FFF', fontSize: 18 },
  categoryContainer: { alignItems: 'center', marginRight: 20, backgroundColor: '#fff', borderRadius: 20, padding: 10, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 3, marginBottom: 10 },
  activeCategoryContainer: { backgroundColor: '#24150E' },
  categoryTitle: { fontSize: 14, color: '#24150E', fontWeight: 'bold', textAlign: 'center' },
  activeCategoryTitle: { color: '#FFF' },
  specialistContainer: { marginBottom: 20 },
  specialistList: { flexDirection: 'row', justifyContent: 'space-around' },
  specialistCard: { alignItems: 'center', padding: 10, borderRadius: 10, backgroundColor: '#6B4E35', width: 100 },
  selectedSpecialistCard: { backgroundColor: '#24150E' },
  specialistImage: { width: 50, height: 50, borderRadius: 25, marginBottom: 10 },
  specialistName: { color: '#FFF', fontWeight: 'bold' },
  specialistRating: { color: '#FFF' },
});

export default ServicesScreen;
