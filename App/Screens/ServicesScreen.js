import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground, Image
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { servicesData } from '../components/dummyData';
import { useNavigation } from '@react-navigation/native';


const ServicesScreen = ({ route }) => {
  const navigation = useNavigation();

  const { serviceType } = route.params;
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);

  const data = servicesData[serviceType];

  const selectService = (service) => {
    setSelectedService(service);
  };

  const selectSpecialist = (specialist) => {
    setSelectedSpecialist(specialist);
  };

  const handleAppointment = () => {
    navigation.navigate("Booking");
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={data.headerImage}
        style={styles.headerBackground}
      >
        <Text style={styles.headerText}>{data.headerTitle}</Text>
        <Text style={styles.subHeaderText}>
          {data.headerSubtitle}
        </Text>
      </ImageBackground>

      {/* Services */}
      <View style={styles.servicesContainer}>
        <Text style={styles.sectionTitle}>Services ({data.services.length})</Text>
        {data.services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={[
              styles.serviceItem,
              selectedService?.id === service.id && styles.selectedServiceItem,
            ]}
            onPress={() => selectService(service)}
          >
            <View style={styles.serviceItemContent}>
              <RadioButton
                value={service.id}
                status={selectedService?.id === service.id ? 'checked' : 'unchecked'}
                onPress={() => selectService(service)}
                color="#24150E"
              />
              <Text style={styles.serviceText}>{service.name}</Text>
            </View>
            <Text style={styles.descriptionText}>{service.description}</Text>
            <Text style={styles.priceText}>{service.price}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Specialists */}
      <View style={styles.specialistsContainer}>
        <Text style={styles.sectionTitle}>Specialists</Text>
        <View style={styles.specialistsList}>
          {data.specialists.map((specialist) => (
            <TouchableOpacity
              key={specialist.id}
              style={[
                styles.specialistItem,
                selectedSpecialist?.id === specialist.id &&
                styles.selectedSpecialistItem,
              ]}
              onPress={() => selectSpecialist(specialist)}
            >
              <Image
                source={specialist.image}
                style={styles.specialistImage}
              />
              <Text style={styles.specialistName}>{specialist.name}</Text>
              <Text style={styles.specialistRating}>⭐ {specialist.rating}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.scheduleButton} onPress={handleAppointment}>
        <Text style={styles.scheduleButtonText}>Schedule Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBackground: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  servicesContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  serviceItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceText: {
    fontSize: 16,
    // marginLeft: 10,
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 4,
    color: '#555',
    marginLeft:8
  },
  priceText: {
    fontSize: 16,
    textAlign: 'right',
    marginTop: 10,
    color: '#24150E',
    fontWeight:'bold'
  },
  selectedServiceItem: {
    backgroundColor: '#EDE0D7',
  },
  specialistsContainer: {
    padding: 20,
  },
  specialistImage: {
    width: 50,   
    height: 50, 
    borderRadius: 25,  
    // marginBottom: 8,  
  },
  specialistsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  specialistItem: {
    alignItems: 'center',
    width: '30%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  selectedSpecialistItem: {
    backgroundColor: '#EDE0D7',
  },
  specialistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  specialistName: {
    fontSize: 14,
  },
  specialistRating: {
    fontSize: 14,
    color: '#999',
  },
  scheduleButton: {
    backgroundColor: '#24150E',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 5,
    marginBottom: 80,
  },
  scheduleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ServicesScreen;
