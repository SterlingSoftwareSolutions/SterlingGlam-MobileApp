import { Text, View,TextInput, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import { FontFamily, FontSize, Color, Border } from "../Styles/GlobalStyles";

export class SubCategories extends Component {
  render() {
    return (
        <View style={styles.container}>
       <Text style={styles.heading}>Hair</Text>
       <Image
          source={require('../Assets/back.png')}
          style={styles.icon}
        />
        <TextInput
          style={[styles.Text, styles.Text2]}
          placeholder= "Search for Service"
        />
        <Image
          source={require('../Assets/search.png')}
          style={styles.icon1}
        />
          <Image
          source={require('../Assets/haircut.png')}
          style={styles.icon3}
        />
        
        <Image
          source={require('../Assets/hairstyle.jpg')}
          style={styles.icon4}
        />
        <Image
          source={require('../Assets/oil1.jpg')}
          style={styles.icon5}
        />
        <Image
          source={require('../Assets/hairthreatment1.jpg')}
          style={styles.icon6}
        />
        <Image
          source={require('../Assets/color1.jpg')}
          style={styles.icon7}
        
         />
        {/* <Image
          source={require('../Assets/12.png')}
          style={styles.icon8}
        />
         */}
      </View>
      
    )
  }
};
const styles = StyleSheet.create({
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: "center",
      top:50,
    },
    icon: {
      marginTop: 17,
      left: 10,
      width: 45,
      height:45,
    },
     
  Text: {
    top:30,
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '80%',
    marginLeft: '10%',
    borderRadius: 5,
    left:17,
  },
  icon1:{
    marginTop: -16,
      left: 10,
      width: 46,
      height:46,
    },
    icon2:{
      height: 120,
      width: 120,
      borderRadius: 60,
      left: 40,
      top:40,
  },
  icon3:{
    height: 120,
    width: 120,
    borderRadius: 60,
    left: 40,
    top:40,
},
icon4:{
  height: 120,
  width: 120,
  borderRadius: 60,
  left: 40,
  top:80,
},
icon5:{
  height: 120,
  width: 120,
  borderRadius: 60,
  left: 40,
  top:120,
},
icon6:{
  height: 120,
  width: 120,
  borderRadius: 60,
  left: 230,
  top:-320,
  alignItems:'center',
},
icon7:{
  height: 120,
  width: 120,
  borderRadius: 60,
  left: 230,
  top:-280,
},
 
});

export default SubCategories;