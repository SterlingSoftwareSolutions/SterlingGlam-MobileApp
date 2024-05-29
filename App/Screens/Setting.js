 import { Text, View,StyleSheet,Image } from 'react-native'
 import React, { Component } from 'react'
 import { FontFamily, FontSize, Color, Border } from "../Styles/GlobalStyles";
 export class Setting extends Component {
   render() {
     return (
       <View>
        <Text style={styles.heading}>Settings</Text>
        
        <Image
          source={require('../Assets/13.png')}
          style={styles.banner}
        />
        <Text style={styles.account}>Account info</Text>
        <Image
          source={require('../Assets/4.png')}
          style={styles.icon}
        />
        <Image
          source={require('../Assets/icon2.png')}
          style={styles.icon2}
        />
          <Image
          source={require('../Assets/line1.png')}
          style={styles.line}
           />
           <Text style={styles.darkmode}>Dark mode</Text>
        
        <Image
          source={require('../Assets/line1.png')}
          style={styles.line}
        />
         <Text style={styles.type}>Help Center</Text>
         <Text style={styles.type}>Privacy Policy</Text>
         <Text style={styles.type}>Recommendations</Text>

         <Text style={styles.sing}>Sing-out</Text>
       </View>
     )
   }
 };
 const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: "center",
    top:110,
    right:110
 },
 banner: {
  marginTop:60,
  left:285,
  width: 60,
  height: 60,
 },
 account:{
  fontSize: 20,  
  textAlign: "center",
  top:60,    
  right:85,

 },
 icon:{
  marginTop:33,
  left:310,
  width: 35,
  height: 35,
 },
 icon2:{
  marginTop:-29,
  left:315,
  width: 23,
  height: 23,
 },
 line:{
  marginTop:30,
  left:50,
  width: 300,
  top:20,
 },
 darkmode:{
  fontSize: 20,  
  textAlign: "center",
  right:93,
  top:35,
 },
 type:{
  fontSize: 15,  
  top:25,
  marginTop:20,
  right:-60,
 },
 sing:{
  fontSize: 22,  
  top:50,
  marginTop:20,
  right:-60,
  color: Color.colorPurple,
  fontWeight: 'bold',
 },
 
});
 
 export default Setting;