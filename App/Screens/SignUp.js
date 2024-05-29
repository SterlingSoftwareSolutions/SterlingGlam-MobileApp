import React from 'react';
import { View, Text, Image, StyleSheet,Pressable, TextInput } from 'react-native';

import { FontFamily, FontSize, Color, Border } from "../Styles/GlobalStyles";

export default function Signup() {
  return (
    <View style={styles.container}>
       <Image
        style={styles.imageStyle}
        source={require('../Assets/Login.jpg')}
        blurRadius={3}
      />
      
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={[styles.rectangleView, styles.loginChild1ShadowBox]} />
      <Text style={[styles.password, styles.passwordTypo]}>password</Text>
        <Text style={[styles.confirmPassword, styles.passwordFlexBox]}>
          Confirm Password
        </Text>
        <View style={styles.groupItem} />
        <Pressable
          style={styles.signUp}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.signUp1, styles.signLayout]}>Sign-up</Text>
        </Pressable>
        <View style={[styles.groupInner, styles.groupLayout1]} ></View>
        <View style={[styles.rectangleView, styles.groupLayout1]} />
        <View style={[styles.groupChild1, styles.groupLayout1]} />
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={() => navigation.navigate("Login")}
        >
          <View style={[styles.groupChild2, styles.groupLayout]} />
          <Text style={[styles.signUp2, styles.login1Typo]}>Sign-up</Text>
        </Pressable>
        <View style={[styles.loginChild2, styles.loginChildLayout]} />
      <View style={[styles.loginChild3, styles.loginChildLayout]} />
      <View style={[styles.loginChild4, styles.loginChildLayout]} />
        <Text style={[styles.emailAddress, styles.passwordFlexBox]}>
           Email Address
        </Text>
        {/* <Text style={[styles.password, styles.passwordFlexBox]}>Password</Text> */}
      </View>
      <View style={styles.signUpScreenChild1} />
      <Pressable
        style={styles.login}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,  
   
  },
  
  rectangleParent: {
    top: 242,
    height: 463,
    width: 365,
    left: 12,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorGray_800,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 463,
    width: 365,
    top: 0,
    left: 0,
    position: "absolute",
  },
  confirmPassword: {
    top: 282,
    width: 133,
    left: 25,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    // fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
   
  groupItem: {
    top: 386,
    left: 26,
    width: 317,
    height: 53,
    backgroundColor: Color.colorPurple,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  signUp: {
    left: 72,
    top: 395,
    position: "absolute",
  },
  signUp1: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 232,
    alignItems: "center",
    height: 38,
    color: Color.colorWhite,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
  },
  signLayout: {
    height: 38,
    color: Color.colorWhite,
  },
  groupInner: {
    top: 133,
  },
  groupLayout: {
    height: 57,
    width: 141,
    position: "absolute",
  },
  rectangleGroup: {
    top: 17,
    left: 205,
  },
  groupChild1: {
    top: 309,
  },
  rectangleView: {
    top: 221,
  },
  groupLayout: {
    height: 54,
    width: 141,
    position: "absolute",
  },
  groupChild2: {
    backgroundColor: Color.colorPurple,
    height: 57,
    borderRadius: Border.br_xl,
    top: 0,
    left: 0,
  },
  signUp2: {
    top: 10,
    left: 20,
    height: 38,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  login1Typo: {
    width: 102,
    fontSize: FontSize.size_xl,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
  },
  emailAddress: {
    top: 100,
    width: 118,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    left: 17,
  },
  passwordFlexBox: {
    height: 19,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    // fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: "absolute",
  },
  password: {
    top: 194,
    width: 72,
    left: 25,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  signUpScreenChild1: {
    top: 258,
    left: 38,
    width: 141,
    backgroundColor: Color.colorWhite,
    height: 53,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  login: {
    left: 58,
    top: 267,
    position: "absolute",
  },
  login1: {
    color: Color.colorPurple,
    height: 54,
    width: 141,
  },
  login1Typo: {
    width: 100,
    fontSize: FontSize.size_xl,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
  },
  loginChild2: {
    top: 135,
  },
  loginChildLayout: {
    height: 49,
    width: 327,
    borderRadius: Border.br_2xs,
    left: 23,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  loginChild3:{
    top: 225,
  },
  loginChild4:{
    top: 315,
  },
});