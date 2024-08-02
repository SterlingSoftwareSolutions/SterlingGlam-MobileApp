import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
const {width} = Dimensions.get('window');


export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
      <Image source={require('../resources/headerImage.png')} style={styles.headerImage} />

        {/* <View style={styles.header}>
          <Image source={require('../resources/headerImage.png')} style={styles.headerImage} />
        </View> */}
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>STERLING GLAM</Text>
          <Text style={styles.headerSubText}>Experts at cutting and coloring hair of all type</Text>
          <TextInput style={styles.searchBar} placeholder="Search" />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Glam Services</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.serviceItem}>
            <Image source={require('../resources/facemakeup.png')} style={styles.serviceImage} />
            <Text>Face Makeup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Image source={require('../resources/facemakeup.png')} style={styles.serviceImage} />
            <Text>Eye Makeup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Image source={require('../resources/facemakeup.png')} style={styles.serviceImage} />
            <Text>Hair Makeup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Image source={require('../resources/facemakeup.png')} style={styles.serviceImage} />
            <Text>Bridal Makeup</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={require('../resources/cleaners.png')} style={styles.categoryImage} />
            <Text>Cleaners</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={require('../resources/cleaners.png')} style={styles.categoryImage} />
            <Text>Creams</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={require('../resources/cleaners.png')} style={styles.categoryImage} />
            <Text>Revitalizers</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'relative',
    width: '100%',
    height:300,

  },
  // header: {
  //   width: '100%',
  //   height: 200,
  //   // overflow: 'hidden',
  // },
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
    // backgroundColor: 'transparent',
  },
  headerText: {
    fontSize: 24,
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
  searchBar: {
    marginTop: 50,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    width: '75%',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    width: '45%',
    marginBottom: 20,
    alignItems: 'center',
  },
  serviceImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
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
});
