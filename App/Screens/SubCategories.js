import { Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import { FontFamily, FontSize, Color, Border } from "../Styles/GlobalStyles";

export class SubCategories extends Component {
  render() {
    return (
        <View style={styles.container}>
       <Text style={styles.heading}>Hair</Text>
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
});

export default SubCategories;