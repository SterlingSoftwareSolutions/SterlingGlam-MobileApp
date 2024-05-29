import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

export class Dashboard extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <MenuIcon /> */}
        <Image
          source={require('../Assets/drag.png')}
          style={styles.menu}
        />
        {/* Banner Image */}
        <Image
          source={require('../Assets/bannerImg.png')}
          style={styles.banner}
        />
        {/* Categories Section */}
        <Text style={styles.heading}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <View style={styles.tile}>
               <Image
                 source={item.image}
                style={styles.tileImage}
              />
              <Text style={styles.tileText}>{item.name}</Text>
            </View>
          )}
          numColumns={3}
          keyExtractor={(item) => item.id.toString()}
        />
        {/* Hair Specialist Section */}
        <Text style={styles.heading}>Hair Specialist</Text>
        <View style={styles.hairSpecialistContainer}>
          {/* Hair Specialist Card */}
          <View style={styles.hairSpecialistCard}>
            <Image
              source={require('../Assets/13.png')}
              style={styles.hairSpecialistImage}
            />
            <Text>Lukshi</Text>
            <Text>0784358292</Text>
            <Text>Rating: 3 stars</Text>
          </View>
          {/* Hair Specialist Card */}
          <View style={styles.hairSpecialistCard}>
            <Image
               source={require('../Assets/12.png')}
              style={styles.hairSpecialistImage}
            />
             
            <Text>lalila</Text>
            <Text>0704549342</Text>
            <Text>Rating: 4 stars</Text>
          </View>
          <View style={styles.hairSpecialistCard}>
            <Image
              source={require('../Assets/14.png')}
              style={styles.hairSpecialistImage}
            />
            
            <Text>Dushi</Text>
            <Text>0784358292</Text>
            <Text>Rating: 3 stars</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

// Sample data for categories
const categories = [
  { id: 1, name: 'Category 1', image: require('../Assets/shampo.png') },
  { id: 2, name: 'Category 2', image: require('../Assets/photo2.png') },
  { id: 3, name: 'Category 3', image: require('../Assets/photo3.png') },
  { id: 4, name: 'Category 4', image: require('../Assets/photo4.png') },
  { id: 5, name: 'Category 5', image: require('../Assets/photo5.png') },
  { id: 6, name: 'Category 6', image: require('../Assets/shampo.png') },
];

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menu:{
    marginTop:35,
    marginBottom:10,
    marginLeft: 15,
    height:25,
    width:25,
    resizeMode:'contain'
  },
  banner: {
    width: '100%',
    height: 200,
    marginBottom:-50
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  tile: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  tileImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  tileText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 8,
    textAlign: 'center',
  },
  hairSpecialistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 14,
    marginBottom:20
  },
  hairSpecialistCard: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 8,
  },
  hairSpecialistImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 8,
  },
});

export default Dashboard;
