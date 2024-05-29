import { View, Text,TextInput, Image, FlatList,TouchableOpacity,Pressable, StyleSheet, ScrollView } from 'react-native';
 import React, { Component } from 'react'
 import { FontFamily, FontSize, Color, Border } from "../Styles/GlobalStyles";
 
 export class customerProfile extends Component {
   render() {
     return (
      <View style={styles.container}>
      {/* <MenuIcon /> */}
      <Image
        source={require('../Assets/drag.png')}
        style={styles.menu}
      />
      <Text style={styles.heading}>Customer Profile</Text>
      <Image
          source={require('../Assets/13.png')}
          style={styles.banner}
        />
         <Image
        source={require('../Assets/23.png')}
        style={styles.click}
      />
        <Image
        source={require('../Assets/came.png')}
        style={styles.came}
      />
      {/* <Text style={styles.Label}>Email Address</Text> */}
      <TextInput
          style={[styles.Text, styles.Text2]}
          placeholder="Email address"
        />
       
      {/* <Text style={styles.Label}>Name</Text> */}
      <TextInput
          style={[styles.Text, styles.Text2]}
          placeholder="Name"
        />
      {/* <Text style={styles.Label}>Contact Information</Text> */}
      <TextInput
          style={[styles.Text, styles.Text2]}
          placeholder="Contact information"
        />
       {/* <Text style={styles.Label}>Address</Text> */}
       <TextInput
          style={[styles.Text, styles.Text2]}
          placeholder="Address"
        />
      {/* <Text style={styles.Label}>Preferences </Text> */}
      <TextInput
          style={[styles.Text, styles.Text2]}
          placeholder="Preferences"
        />
      {/* <Text style={styles.Label}>Transaction History </Text> */}
      <TextInput
          style={[styles.Text ]}
          placeholder="Transaction history"
        />
    <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.letsStart}>Save</Text>
      </Pressable>

    </View>
    
     )
   }
 };
 const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:55,
  },
  menu:{
    marginLeft: 15,
    height:25,
    width:25,
    resizeMode:'contain'
  },
  banner: {
    marginTop:30,
    left:125,
    width: 150,
    height: 150,
     
  },
  click:{
    marginLeft: 220,
    height:55,
    width:55,
    resizeMode:'contain',
    marginTop:-40,
  },
  came:{
    marginLeft: 233,
    height:28,
    width:28,
    resizeMode:'contain',
    marginTop:-45,
  },
  
  Text: {
    top:40,
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '70%',
    marginLeft: '10%',
    borderRadius: 5,
    left:25,
  },
  letsStart: {
    top: 576,
    left: 80,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 246,
    height: 50,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorPurple,
    left: 65,
    top: 570,
  },
  groupChildLayout: {
    height: 40,
    width: 280,
    position: "absolute",
  }, 
});

export default customerProfile;
