import { Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import { FontFamily, FontSize, Color, Border } from "../Styles/GlobalStyles";
export class Appoinment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Appoinment</Text>
        <Text style={styles.account}>Date</Text>
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
        
        <Text style={styles.day}>Morning</Text>
        <View style={styles.timeStyle}>
          <View style={styles.morning1}>
            <Text style={styles.timeTextStyle} >9.00</Text>
          </View>
          <View style={styles.morning1}>
            <Text>10.00</Text>
          </View>
          <View style={styles.morning1}>
            <Text>11.00</Text>
          </View>
        </View>
        <Text style={styles.day}>Afternoon</Text>
        <View style={styles.timeStyle}>
        <View style={styles.Afternoon1}>
          <Text>1.00</Text>
        </View>
        <View style={styles.Afternoon1}>
          <Text>2.00</Text>
        </View>
        <View style={styles.Afternoon1}>
          <Text>3.00</Text>
        </View>
        </View>
        <View style={styles.timeStyle}>
        <View style={styles.Afternoon1}>
          <Text>4.00</Text>
        </View>
        <View style={styles.Afternoon1}>
          <Text>5.00</Text>
        </View>
        <View style={styles.Afternoon1}>
          <Text>6.00</Text>
        </View>
        </View>
        <Text style={styles.treatment}>hair treatment</Text>
        <Text style={styles.treatment}>shampo</Text>

        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.BookAppoinment}>Book Appoinment</Text>
      </View>
    )
  }
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 75,
    // paddingHorizontal:20,
  },
  icon: {
    marginTop: 33,
    left: 310,
    width: 35,
    height: 35,
  },
  icon2: {
    marginTop: -29,
    left: 315,
    width: 23,
    height: 23,
  },
  account: {
    fontSize: 20,
    textAlign: "center",
    top: 60,
    right: 115,
  },
  line: {
    marginTop: 30,
    left: 40,
    width: 330,
    top: 20,
  },
  day: {
    fontSize: 18,
    // textAlign: "center",
    top: 10,
    right: -60,
    marginTop: 30
  },
  treatment: {
    fontSize: 14,
    top: 10,
    right: -60,
    marginTop: 5,
  },
  groupChildLayout: {
    height: 54,
    width: 330,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorPurple,
    left: 33,
    top: 550,
  },
  BookAppoinment: {
    top: 558,
    left: 80,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "center",
    width: 240,
    height: 50,
    position: "absolute",
  },
  timeStyle:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:30,
  },
  
});
export default Appoinment;