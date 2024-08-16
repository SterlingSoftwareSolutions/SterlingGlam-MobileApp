import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');


const localProfilePicture = require('../resources/specialist1.jpeg');

const services = [
  { name: 'Face', image: require('../resources/EyeMakeup.jpg'), type: 'face' },
  { name: 'Nail', image: require('../resources/nail.png'), type: 'nail' },
  { name: 'Hair', image: require('../resources/hair2.jpg'), type: 'hair' },
  { name: 'Bridal', image: require('../resources/bridalMakeup.jpg'), type: 'bridal' },
];

const categories = [
  { name: 'Cleaners', image: require('../resources/cleaners.png') },
  { name: 'Creams', image: require('../resources/cleaners.png') },
  { name: 'Revitalizers', image: require('../resources/cleaners.png') },
  { name: 'Cleaners', image: require('../resources/cleaners.png') },
  { name: 'Creams', image: require('../resources/cleaners.png') },
  { name: 'Revitalizers', image: require('../resources/cleaners.png') },
];

const DummyHome = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>Hi Jenifer!</Text>
          <Text style={styles.tagline}>“Unleash Your Inner Glam”</Text>
        </View>
        <Image source={localProfilePicture} style={styles.profileImage} />
      </View>

      {/* Search Section */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="magnify" size={24} color="#24150E" />
          <TextInput style={styles.searchInput} placeholder="Search" />
          <Icon name="tune" size={24} color="#24150E" />
        </View>
      </View>

   {/* Glam Services Section */}
   <View style={styles.section}>
        <Text style={styles.sectionTitle}>Glam Services</Text>
        <View style={styles.serviceSection}>
          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={styles.serviceItem}
              onPress={() => navigation.navigate('Services', { serviceType: service.type })}
            >
              <View style={styles.imageContainer}>
                <Image source={service.image} style={styles.serviceImage} />
              </View>
              <Text style={styles.serviceText}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Offers Section */}
      <View style={styles.offers}>
        <Text style={styles.sectionTitle}>Offers for You</Text>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.offerImage} />
      </View>

      {/* Categories Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem}>
              <View style={styles.categoryImageContainer}>
                <Image source={category.image} style={styles.categoryImage} />
              </View>
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>


      
    </ScrollView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#624332',
  },
  tagline: {
    fontSize: 16,
    color: '#6F4E37',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 24,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
  },
  recentAppointment: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  appointmentCard: {
    backgroundColor: '#F5E8E4',
    padding: 16,
    borderRadius: 8,
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  appointmentDate: {
    marginLeft: 8,
    color: '#6F4E37',
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6F4E37',
  },
  appointmentSubtitle: {
    color: '#6F4E37',
  },
  appointmentService: {
    color: '#6F4E37',
    marginVertical: 8,
  },
  appointmentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#DCDCDC',
    paddingTop: 8,
  },
  appointmentStatus: {
    color: '#6F4E37',
  },
  appointmentPrice: {
    fontWeight: 'bold',
    color: '#24150E',
  },
  overview: {
    padding: 16,
  },
  overviewBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  overviewBox: {
    backgroundColor: '#EDEDED',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '48%',
  },
  overviewLabel: {
    color: 'black',
    fontWeight:'bold',
  },
  overviewCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#24150E',
  },
  offers: {
    padding: 16,
    // marginBottom:80
  },
  offerImage: {
    height: 150,
    borderRadius: 8,
  },
  section: {
    padding: 20,
  },
  sectionBottom: {
    padding: 20,
    marginBottom: 50
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '30%',
    marginBottom: 20,
    alignItems: 'center',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  serviceItem: {
    alignItems: 'center',
    justifyContent: 'space-between'
    // marginRight: 10, 
  },
  imageContainer: {
    width: 74,
    height: 74,
    borderRadius: 37,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  serviceImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  categoryImageContainer: {
    width: 140,
    height: 85,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryText: {
    marginTop: 6,
    textAlign: 'center',
  },
  serviceText: {
    fontSize: 13,
    marginTop: 3,
  },
});

export default DummyHome;