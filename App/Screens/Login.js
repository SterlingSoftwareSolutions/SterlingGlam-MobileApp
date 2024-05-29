import React from 'react';
import { View, Text, Image, StyleSheet,Pressable } from 'react-native';
import { FontFamily, FontSize, Color, Border } from "../Styles/GlobalStyles";

export default function Login() {
  return (
    <View style={styles.container}>
       <Image
        style={styles.imageStyle}
        source={require('../Assets/Login.jpg')}
        blurRadius={3}
      />
      <View style={[styles.loginInner, styles.loginLayout]} />
      <View style={[styles.rectangleView, styles.loginChild1ShadowBox]} />
      <Text style={[styles.password, styles.passwordTypo]}>password</Text>
      
      <Pressable
        style={[styles.rectanglePressable, styles.childLayout]}
        onPress={() => navigation.navigate("Home")}
      />
      <View style={[styles.loginChild1, styles.childLayout]} />
      <Text style={styles.login1}>login</Text>
      <Pressable
        style={[styles.rectangleParent, styles.childLayout]}
        onPress={() => navigation.navigate("singin")}
      >
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.signUp, styles.signUpTypo]}>Sign-up</Text>
      </Pressable>
      <View style={[styles.loginChild2, styles.loginChildLayout]} />
      <View style={[styles.loginChild3, styles.loginChildLayout]} />
      <Text style={[styles.forgetPassword, styles.rememberMeTypo]}>
        Forget Password?
      </Text>
      <Text style={[styles.login2, styles.signUpTypo]}>Login</Text>
      <Text style={[styles.emailAddress, styles.passwordTypo]}>Email Address</Text>
      <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
        Remember Me ?
      </Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Image
          style={[styles.iconCheck, styles.iconLayout]}
          contentFit="cover"
          source={require('../Assets/icon.png')}
        />
      </View>
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
  loginInner: {
    marginLeft: -81.5,
    top: 842,
    borderColor: "rgba(0, 0, 0, 0.76)",
  },
  loginLayout: {
    height: 5,
    width: 172,
    borderTopWidth: 5,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  rectangleView: {
    top: 264,
    left: 13,
    backgroundColor: Color.colorGray_800,
    width: 360,
    height: 399,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  loginChild1ShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
      
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  password: {
    top: 434,
    left: 38,
  },
  passwordTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: "absolute",
  },
  rectanglePressable: {
    width: 141,
    height: 53,
    backgroundColor: Color.colorPurple,
    left: 41,
    borderRadius: Border.br_xl,
    top: 282,
  },
  childLayout: {
    height: 53,
    position: "absolute",
  },
  loginChild1: {
    top: 560,
    width: 317,
    backgroundColor: Color.colorPurple,
    left: 41,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  
  groupChild: {
    height: 53,
    position: "absolute",
    width: 141,
    borderRadius: Border.br_xl,
  },
  groupPosition: {
    backgroundColor: Color.colorWhite,
    left: 15,
    top: -95,
  },
   
  signUp: {
    top: -86,
    left: 35,
    color: Color.colorPurple,
  },
  signUpTypo: {
    width: 102,
    fontSize: FontSize.size_xl,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  loginChild2: {
    top: 373,
  },
  loginChildLayout: {
    height: 49,
    width: 327,
    borderRadius: Border.br_2xs,
    left: 31,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  loginChild3: {
    top: 464,
  },
  forgetPassword: {
    top: 525,
    left: 111,
    color: "rgba(0, 0, 0, 0.44)",
    width: 164,
  },
  rememberMeTypo: {
    height: 22,
    alignItems: "flex-end",
    textDecoration: "underline",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  login2: {
    top: 289,
    left: 60,
    color: Color.colorWhite,
    width: 102,
    fontSize: FontSize.size_xl,
  },
  
  emailAddress: {
    top: 343,
    left: 38,
  },
  passwordTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: "absolute",
  },
  rememberMe: {
    top: 630,
    left: 200,
    width: 206,
    color: Color.colorBlack,
  },
  rememberMeTypo: {
    height: 22,
    alignItems: "flex-end",
    textDecoration: "underline",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleGroup: {
    top: 682,
    left: 203,
    width: 20,
  },
  groupItem: {
    width: 16,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: -50,
  },
  groupLayout: {
    height: 17,
    position: "absolute",
  },
  iconCheck: {
    height: "50.29%",
    width: "79.8%",
    top: "-260.72%",
    bottom: "36.99%",
    left: "19.2%",
    right: "0%",
    maxWidth: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  login1: {
    top: 570,
    left: 85,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 229,
    height: 35, 
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },

});