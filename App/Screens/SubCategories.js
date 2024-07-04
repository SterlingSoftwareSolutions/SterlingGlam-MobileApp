import { Text, View, TextInput, StyleSheet, Image, FlatList,TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { FontFamily, FontSize, Color, Border } from '../Styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const DATA = [


  { id: '1', name: 'Hair Cut', source: require('../Assets/haircut.png') },
  { id: '2', name: 'Hair Style', source: require('../Assets/hairstyle.jpg') },
  { id: '3', name: 'Oil Threatment', source: require('../Assets/oil1.jpg') },
  { id: '4', name: 'Shampo Threatment', source: require('../Assets/hairthreatment1.jpg') },
  { id: '5', name: 'Hair color', source: require('../Assets/color1.jpg') },
];

export default function SubCategories() {
  
  handlePress = (item) => {
     
    // Navigate to the Appointment screen
    this.props.navigation.navigate('Appointment', { item });
  };

  renderItem = ({ item }) => (
      
    <TouchableOpacity onPress={() => this.handlePress(item)}>
      <View style={styles.itemContainer}>
        <Image
          source={item.source}
          style={styles.iconItem}
        />
        <Text style={styles.imageText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
      <View style={styles.container}>
        <Text style={styles.heading}>Hair</Text>
        <View style={styles.searchRow}>
        <Image
          source={require('../Assets/back.png')}
          style={styles.icon}
        />
        <View style={styles.searchBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Search for Service"
          />
          <Image
            source={require('../Assets/search.png')}
            style={styles.searchIcon}
          />
        </View>
      </View>
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  icon: {
    marginTop: 17,
    left: 10,
    width: 45,
    height: 45,
  },
  Text: {
    top: 30,
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '80%',
    marginLeft: '10%',
    borderRadius: 5,
    left: 17,
  },
  icon1: {
    marginTop: -16,
    left: 10,
    width: 46,
    height: 46,
  },
  iconItem: {
    height: 120,
    width: 120,
    borderRadius: 60,
    margin: 10,
  },
  flatListContainer: {
    // alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center'

  },
  imageText:{
 alignContent: 'center',
    alignSelf: 'center'
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  textInput: {
    flex: 1,
    padding: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  
});

 