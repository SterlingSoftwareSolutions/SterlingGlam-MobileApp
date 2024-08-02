import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const { width } = Dimensions.get('window');

const localProfilePicture = require('../Assets/avatar.png');


const HomeScreen = () => {
  const categories = [
    { name: 'Hair', icon: 'scissors' },
    { name: 'Skin', icon: 'spa' },
    { name: 'Nail', icon: 'nail-care' },
    { name: 'Body', icon: 'fitness-center' },
    { name: 'Dressing', icon: 'wardrobe' },
    { name: 'Product', icon: 'store' }
  ];

  const specialists = [
    { name: 'John Doe', image: localProfilePicture },
    { name: 'Jane Smith', image: localProfilePicture },
    { name: 'John Doe', image: localProfilePicture },
    { name: 'Jane Smith', image: localProfilePicture },
    { name: 'John Doe', image: localProfilePicture },
    { name: 'Jane Smith', image: localProfilePicture },
    { name: 'John Doe', image: localProfilePicture },
    { name: 'Jane Smith', image: localProfilePicture },



    // Add more specialists here
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Banner Section */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Welcome to Our Salon</Text>
      </View>

      {/* Categories Section */}
      <View style={styles.categories}>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryTile}>
            <Icon name={category.icon} type='material-community' size={40} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </View>
        ))}
      </View>

      {/* Specialists Section */}
      <Text style={styles.sectionTitle}>Our Specialists</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.specialists}>
        {specialists.map((specialist, index) => (
          <Card key={index} containerStyle={styles.specialistCard}>
            <Image source={specialist.image} style={styles.specialistImage} />
            <Text style={styles.specialistName}>{specialist.name}</Text>
          </Card>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  banner: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7E0681',
  },
  bannerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  categoryTile: {
    width: width / 3 - 20,
    height: width / 3 - 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 5,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  specialists: {
    paddingVertical: 20,
  },
  specialistCard: {
    width: 150,
    padding: 0,
    marginHorizontal: 10,
  },
  specialistImage: {
    width: '100%',
    height: 100,
  },
  specialistName: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
