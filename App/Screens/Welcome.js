import { View, Text, StyleSheet, Image, Pressable, Button, ImageBackground } from 'react-native'
import React from 'react'
import { FontFamily, FontSize, Color, Border } from "../Styles/GlobalStyles";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.tinyLogo}
        source={require('../Assets/67.jpg')}
        // blurRadius={2}
      >
 
        <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.letsStart}>Let’s Start</Text>
      </Pressable>
      </ImageBackground>
      <View>
      
      </View>
    
      <View>
      

      </View>
      
      <View style={styles.welocomeItem} />
      <Image
        style={styles.logoitem}
        contentFit="cover"
        source={require('../Assets/logo.png')}
      />
    </View>


  )
}
const styles = StyleSheet.create({
  // container: {

  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   paddingTop: 50,

  // },
  imageStyle: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,

  },

  rectangleParent: {
    top: 700,
    left: 24,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  groupChildLayout: {
    height: 54,
    width: 343,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorPurple,
    left: 0,
    top: 0,
  },
  letsStart: {
    top: 9,
    left: 49,
    fontSize: FontSize.size_xl,
    // fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 246,
    height: 50,
    position: "absolute",
  },
  welocomeItem: {
    marginLeft: -85.5,
    top: 842,
    left: "50%",
    borderStyle: "solid",
    borderColor: Color.colorGray_900,
    borderTopWidth: 5,
    width: 172,
    height: 5,
    position: "absolute",
  },
  logoitem: {
    top: 128,
    left: -36,
    width: 430,
    height: 430,
    position: "absolute",
  },
});