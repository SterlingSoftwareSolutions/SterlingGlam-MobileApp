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

const services = [
  { id: 1, name: 'Foundation', description: 'Provides an even base and covers imperfections. It comes in various forms, including liquid, cream, powder, and stick.', price: 'Rs. 2500.00' },
  { id: 2, name: 'Primer', description: 'Applied before foundation to create a smooth base, help makeup last longer, and control oil or shine.', price: 'Rs. 1500.00' },
  { id: 3, name: 'Setting Powder', description: 'Used to set foundation and concealer, helping to reduce shine and keep makeup in place.', price: 'Rs. 2300.00' },
  { id: 4, name: 'Setting Spray', description: 'Applied before foundation to create a smooth base, help makeup last longer, and control oil or shine.', price: 'Rs. 1400.00' },
  { id: 5, name: 'Blush', description: 'Adds color to the cheeks and comes in powder, cream, gel, or liquid forms.', price: 'Rs. 1300.00' },
  { id: 6, name: 'Bronzer', description: 'Gives a sun-kissed glow and can be used to contour the face. Available in powder, cream, or liquid.', price: 'Rs. 1300.00' },
  { id: 7, name: 'Highlighter', description: 'Used to accentuate cheekbones, brow bones, and the bridge of the nose, available in powder, cream, or liquid.', price: 'Rs. 2800.00' },
  { id: 8, name: 'Contour', description: 'A makeup product used to create shadows and define facial features. Often comes in cream or powder.', price: 'Rs. 1600.00' },
];

const specialists = [
  { id: 1, name: 'Selena', rating: '4.3', image: require('../resources/specialist1.jpeg') },
  { id: 2, name: 'Rachelle', rating: '4.1', image: require('../resources/specialist2.jpeg') },
  { id: 3, name: 'Katherine', rating: '4.2', image: require('../resources/specialist3.jpeg') },
];


const ServicesScreen = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);

  const selectService = (service) => {
    setSelectedService(service);
  };

  const selectSpecialist = (specialist) => {
    setSelectedSpecialist(specialist);
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../resources/facemakeup.png')}
        style={styles.headerBackground}
      >
        <Text style={styles.headerText}>FACE MAKEUP</Text>
        <Text style={styles.subHeaderText}>
          Facial makeup is a collection of cosmetic products designed to enhance
          and perfect the appearance of the skin
        </Text>
      </ImageBackground>
{/* Services */}
      <View style={styles.servicesContainer}>
        <Text style={styles.sectionTitle}>Services (8)</Text>
        {services.map((service) => (
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
      {/* Specialists */}
      <View style={styles.specialistsContainer}>
        <Text style={styles.sectionTitle}>Specialists</Text>
        <View style={styles.specialistsList}>
          {specialists.map((specialist) => (
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


      <TouchableOpacity style={styles.scheduleButton}>
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
