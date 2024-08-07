import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-elements';



const {width} = Dimensions.get('window');
const localProfilePicture = require('../Assets/avatar.png');


const services = [
  { name: 'Face', image: require('../resources/facemakeup.png') },
  { name: 'Eye', image: require('../resources/facemakeup.png') },
  { name: 'Hair', image: require('../resources/facemakeup.png') },
  { name: 'Bridal', image: require('../resources/facemakeup.png') },
];

const categories = [
  { name: 'Cleaners', image: require('../resources/cleaners.png') },
  { name: 'Creams', image: require('../resources/cleaners.png') },
  { name: 'Revitalizers', image: require('../resources/cleaners.png') },
  { name: 'Cleaners', image: require('../resources/cleaners.png') },
  { name: 'Creams', image: require('../resources/cleaners.png') },
  { name: 'Revitalizers', image: require('../resources/cleaners.png') },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
      <Image source={require('../resources/headerImage.png')} style={styles.headerImage} />
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>STERLING GLAM</Text>
          <Text style={styles.headerSubText}>Experts at cutting and coloring hair of all type</Text>
          <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
          />
          <Icon name="search" size={18} color='white' style={styles.searchIcon} />
        </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Glam Services</Text>
        <View style={styles.serviceSection}>
        {services.map((service, index) => (
          <TouchableOpacity key={index} style={styles.serviceItem}>
            <View style={styles.imageContainer}>
              <Image source={service.image} style={styles.serviceImage} />
            </View>
            <Text style={styles.serviceText}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  headerContainer: {
    position: 'relative',
    width: '100%',
    height:300,

  },
  headerImage: {
    position:'absolute',
    width: "100%",
    height: 300,
    borderBottomRightRadius: width / 2,
    borderBottomLeftRadius: width / 2,
    transform:[{scaleX: 1.5}]

  },
  headerContent: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop:100
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color:'white',
    letterSpacing: 1
  },
  headerSubText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
    color:'white',

  },
  searchBarContainer: {
    marginTop: 40,
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    padding: 10,
    paddingRight: 40, 
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color:'white',
  },
  
  searchIcon: {
    position: 'absolute',
    right: 15,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceSection:{
    flexDirection:'row',
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
  scrollViewContent:{
    flexDirection: 'row',
  },
  serviceItem: {
    alignItems: 'center',
    justifyContent:'space-between'
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
  serviceText:{
    fontSize:13,
    marginTop:3,
  }
});
