import React from 'react'
import { StyleSheet, View, Text,Image } from "react-native";
// import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../Styles/GlobalStyles";

const GroupComponent1 = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupLayout]} />
      <Image
        style={[styles.iconStar, styles.iconLayout]}
        contentFit="cover"
        source={require('../Assets/logo.png')}
      />
      <Image
        style={[styles.iconStar1, styles.iconLayout]}
        contentFit="cover"
        source={require('../Assets/logo.png')}
      />
      <Image
        style={[styles.iconStar2, styles.iconLayout]}
        contentFit="cover"
        source={require('../Assets/logo.png')}
      />
      <Image
        style={[styles.iconStar, styles.iconLayout]}
        contentFit="cover"
        source={require('../Assets/logo.png')}
      />
      <Image
        style={[styles.iconStar1, styles.iconLayout]}
        contentFit="cover"
        source={require('../Assets/logo.png')}
      />
      <Image
        style={[styles.iconStar2, styles.iconLayout]}
        contentFit="cover"
        source={require('../Assets/logo.png')}
      />
      <Image
        style={[styles.groupItem, styles.groupLayout]}
        contentFit="cover"
        source={require('../Assets/logo.png')}
      />
      <Text style={styles.text}>+94 3457561</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 163,
    width: 137,
  },
  groupLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "8.77%",
    top: "84.97%",
    width: "7.3%",
    height: "6.26%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_1100,
    borderStyle: "solid",
    borderColor: Color.colorGray_1000,
    borderWidth: 1,
    height: 163,
    width: 137,
  },
  iconStar: {
    right: "28.18%",
    left: "64.53%",
  },
  iconStar1: {
    right: "19.42%",
    left: "73.28%",
  },
  iconStar2: {
    right: "10.66%",
    left: "82.04%",
  },
  groupItem: {
    top: 8,
    left: 9,
    width: 96,
    height: 84,
  },
  text: {
    top: 122,
    left: 27,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 73,
    height: 14,
    position: "absolute",
  },
  rectangleParent: {
    top: -23,
    left: 150,
    position: "absolute",
  },
});

export default GroupComponent1;
