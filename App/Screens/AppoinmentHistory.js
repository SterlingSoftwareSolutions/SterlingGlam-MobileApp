import { Text, View,StyleSheet,Image } from 'react-native'
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
        <Text style={styles.heading}>Appoinment history</Text>
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
        marginTop:75,
      },
      menu:{
        marginLeft: 15,
        height:25,
        width:25,
        resizeMode:'contain'
      },
      banner: {
        marginTop:30,
        left:135,
        width: 120,
        height: 120,
        },
      layer:{
        marginTop:40,
        left:6,
        borderRadius: Border.br_xl,
      },
      hairDry:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        top:-240,
        right:140,
      },
    });
export default AppoinmentHistory;