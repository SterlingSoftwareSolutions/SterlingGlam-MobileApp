import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import admin from '../api/admin';

const ServicesScreen = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('haircutStyling');
  const [selectedServices, setSelectedServices] = useState([]); // Multi-selection state
  const [categoriesData, setCategoriesData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await admin();

        const categoriesResponse = await api.get('/categories');
        const servicesResponse = await api.get('/services');
        console.log(servicesResponse)


        if (categoriesResponse.ok && servicesResponse.ok) {
          setCategoriesData(categoriesResponse.data);
          setServicesData(servicesResponse.data);
        console.log('Services servicesResponse',servicesData)
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

  const handleCategoryPress = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

  const handleServiceSelection = (serviceId) => {
    setSelectedServices((prevSelected) => {
      if (prevSelected.includes(serviceId)) {
        return prevSelected.filter((id) => id !== serviceId);
      } else {
        return [...prevSelected, serviceId];
      }
    });
  };

  const handleAppointment = () => {
    navigation.navigate('Booking', { selectedServices });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

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

        <FlatList
  data={servicesData.filter(service => service.category.id === selectedCategory)}
  renderItem={renderServiceItem}
          keyExtractor={(item) => item.id}
        />

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
});

export default ServicesScreen;
