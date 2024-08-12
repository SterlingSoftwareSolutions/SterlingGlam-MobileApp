import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');


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

const products = [
  { id: '1', name: 'Gold Facial ', size: '120ml', oldPrice: 'Rs.2000.00', newPrice: 'Rs.1500.00', image:  require('../resources/productDummy.jpg') },
  { id: '2', name: 'Facial Scrub', size: '100g', oldPrice: 'Rs.700.00', newPrice: 'Rs.500.00', image:  require('../resources/productDummy.jpg') },
  { id: '3', name: 'Hair Oil', size: '250ml', oldPrice: 'Rs.2000.00', newPrice: 'Rs.1500.00', image:  require('../resources/productDummy.jpg') },
  { id: '4', name: 'Facial Cream', size: '250g', oldPrice: 'Rs.2000.00', newPrice: 'Rs.1100.00', image:  require('../resources/productDummy.jpg') },
  { id: '5', name: 'Body Spray', size: '120ml', oldPrice: 'Rs.2000.00', newPrice: 'Rs.1400.00', image:  require('../resources/productDummy.jpg') },
  { id: '6', name: 'Recovery Cream', size: '100ml', oldPrice: 'Rs.2000.00', newPrice: 'Rs.1100.00', image:  require('../resources/productDummy.jpg') },
  // { id: '7', name: 'Facial Cleaner', size: '380ml', oldPrice: 'Rs.2200.00', newPrice: 'Rs.1500.00', image:  require('../resources/productDummy.jpg') },
  // { id: '8', name: 'Vintage Facial', size: '200ml', oldPrice: 'Rs.4500.00', newPrice: 'Rs.3700.00', image:  require('../resources/productDummy.jpg') },
  // { id: '9', name: 'Recovery Cream', size: '100ml', oldPrice: 'Rs.2500.00', newPrice: 'Rs.1600.00', image:  require('../resources/productDummy.jpg') },

];


export default function HomeScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => <ProductCard product={item} />;

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
      <View style={styles.sectionBottom}>
        <Text style={styles.sectionTitle}>Product Offers</Text>

        <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
      />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    position: 'relative',
    width: '100%',
    height: 300,

  },
  headerImage: {
    position: 'absolute',
    width: "100%",
    height: 300,
    borderBottomRightRadius: width / 2,
    borderBottomLeftRadius: width / 2,
    transform: [{ scaleX: 1.5 }]

  },
  headerContent: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 100
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
    letterSpacing: 1
  },
  headerSubText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
    color: 'white',

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
    color: 'white',
  },

  searchIcon: {
    position: 'absolute',
    right: 15,
  },
  section: {
    padding: 20,
  },
  sectionBottom:{
    padding: 20,
    marginBottom:50
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
