import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const localProfilePicture = require('../resources/specialist1.jpeg');
const banner1 = require('../resources/slider1.png');

const categories = [
  { id: '1', title: 'Haircut and Styling', image: require('../resources/service1.png'), type: 'haircutStyling' },
  { id: '2', title: 'Hair Coloring', image: require('../resources/service2.png'), type: 'hairColoring' },
  { id: '3', title: 'Hair Treatments', image: require('../resources/service3.png'), type: 'hairTreatments' },
  { id: '4', title: 'Manicure and Pedicure', image: require('../resources/service4.png'), type: 'manicurePedicure' },
  { id: '5', title: 'Eyebrow Threading', image: require('../resources/service5.png'), type: 'eyebrowThreading' },
  { id: '6', title: 'Waxing Services', image: require('../resources/service6.png'), type: 'waxingServices' },
  { id: '7', title: 'Facial Treatments', image: require('../resources/service7.png'), type: 'facialTreatments' },
  { id: '8', title: 'Bridal Services', image: require('../resources/service8.png'), type: 'bridalServices' },
  { id: '9', title: 'Hair Extensions', image: require('../resources/service9.png'), type: 'hairExtensions' },
  { id: '10', title: 'Fillers', image: require('../resources/service10.png'), type: 'fillers' },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (type) => {
    navigation.navigate('Services', { serviceType: type });
  };

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

      {/* Offers Section */}
      <View style={styles.offers}>
        <Image source={banner1} style={styles.offerImage} />
      </View>

      <View style={styles.genderToggle}>
        <TouchableOpacity style={styles.genderButton}><Text style={styles.genderText}>Male</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.genderButton, styles.genderButtonActive]}><Text style={styles.genderTextActive}>Female</Text></TouchableOpacity>
      </View>

      {/* Categories Section */}
      <View style={styles.categoriesContainer}>
      {categories.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.categoryContainer}
          onPress={() => handleCategoryPress(item.type)}
        >
          <ImageBackground source={item.image} style={styles.image} imageStyle={styles.imageStyle}>
            <View style={styles.overlay}>
              <Text style={styles.categoryText}>{item.title}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      ))}
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
  offers: {
    padding: 16,
    marginTop: 10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  offerImage: {
    height: 150,
    width: '100%',
    borderRadius: 8,
  },
  genderToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  genderButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#A3A3A3',
    marginHorizontal: 8,
  },
  genderButtonActive: {
    backgroundColor: '#24150E',
  },
  genderText: {
    fontSize: 16,
    color: '#A3A3A3',
  },
  genderTextActive: {
    fontSize: 16,
    color: '#FFF',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom:70
  },
  categoryContainer: {
    width: (width / 2) - 20,
    marginBottom: 20,
    height: 100,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  categoryText: {
    color: 'white',
    fontSize: 15,
  },
});

export default HomeScreen;
