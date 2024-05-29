import { Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import { FontFamily, FontSize, Color, Border } from "../Styles/GlobalStyles";

export class AppoinmentHistory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../Assets/drag.png')}
          style={styles.menu}
        />
        <Text style={styles.heading}>Appoinment History</Text>
        <Image
          source={require('../Assets/13.png')}
          style={styles.banner}
        />
        
        <Image
          source={require('../Assets/Rectangle60.png')}
          style={styles.layer}
        />
        <Image
          source={require('../Assets/Rectangle60.png')}
          style={styles.layer}
        />
        <Text style={styles.hairDry}>Hair dry</Text>
        <Text style={styles.Hairstylish}> Hair stylish : Hansi</Text>

        <Text style={styles.makeup1}>Makeup </Text>
        <Text style={styles.makeup}> Beautician : shashi</Text>

        <Text style={styles.date}>18april2024</Text>
        <Text style={styles.datetime}>Tue, Afternoon at 2:00pm</Text>
        <Text style={styles.complete}>Completed</Text>


        <Text style={styles.date1}>19april2024</Text>
        <Text style={styles.datetime1}>Tue, Afternoon at 2:00pm</Text>
        <Text style={styles.complete1}>Completed</Text>
        <Image
          source={require('../Assets/review.png')}
          style={styles.layer1}
        />
         <Image
          source={require('../Assets/review.png')}
          style={styles.layer2}
        />
        <Image
          source={require('../Assets/review.png')}
          style={styles.layer3}
        />
        <Image
          source={require('../Assets/sstar.png')}
          style={styles.layer4}
        />
         <Image
          source={require('../Assets/review.png')}
          style={styles.layer5}
        />
         <Image
          source={require('../Assets/review.png')}
          style={styles.layer6}
        />
        <Image
          source={require('../Assets/review.png')}
          style={styles.layer7}
        />
        <Image
          source={require('../Assets/sstar.png')}
          style={styles.layer8}
        />
         
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
    marginTop: 75,
  },
  menu: {
    marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: 'contain'
  },
  banner: {
    marginTop: 30,
    left: 135,
    width: 120,
    height: 120,
  },
  layer: {
    marginTop: 40,
    left: 6,
    borderRadius: Border.br_xl,
  },
  hairDry: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    top: -240,
    right: 140,
  },
  Hairstylish: {
    fontSize: 15,
    textAlign: "center",
    top: -240,
    right: 115,
  },
  makeup: {
    fontSize: 15,
    textAlign: "center",
    top: -140,
    right: 115,
  },
  makeup1: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    top: -145,
    right: 140,
  },
  date: {
    fontSize: 13,
    textAlign: "center",
    top: -330,
    left: 140,

  },
  datetime: {
    fontSize: 12,
    textAlign: "center",
    top: -320,
    left: 110,
  },
  complete: {
    fontSize: 14,
    textAlign: "center",
    top: -310,
    left: 76,
    color: Color.colorForestgreen,
  },
  date1: {
    fontSize: 13,
    textAlign: "center",
    top: -250,
    left: 140,

  },
  datetime1: {
    fontSize: 12,
    textAlign: "center",
    top: -231,
    left: 110,
  },
  complete1: {
    fontSize: 14,
    textAlign: "center",
    top: -220,
    left: 76,
    color: Color.colorForestgreen,
  },
  layer1:{
    marginTop: -240,
    right:-315,
    width: 17,
    height: 17,
  },
  layer2:{
    marginTop: -17,
    right:-332,
    width: 17,
    height: 17,
  },
  layer3:{
    marginTop: -17,
    right:-347,
    width: 17,
    height: 17,
  },
  layer4:{
    marginTop: -17,
    right:-364,
    width: 17,
    height: 17,
  },
  layer5:{
    marginTop: -159,
    right:-315,
    width: 17,
    height: 17,
  },
  layer6:{
    marginTop: -17,
    right:-332,
    width: 17,
    height: 17,
  },
  layer7:{
    marginTop: -17,
    right:-347,
    width: 17,
    height: 17,
  },
  layer8:{
    marginTop: -17,
    right:-364,
    width: 17,
    height: 17,
  },
});
export default AppoinmentHistory;