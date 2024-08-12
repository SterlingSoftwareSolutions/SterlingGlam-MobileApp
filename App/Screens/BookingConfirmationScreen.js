import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import tickImage from '../resources/blackTick.png'; 

export default function BookingConfirmationScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Booking Confirmation</Text>
      
      {/* Checkmark Icon */}
      <View style={styles.checkmarkContainer}>
        <Image 
          source={tickImage} 
          style={styles.checkmark} 
        />
      </View>

      {/* Confirmation Message */}
      <Text style={styles.confirmationText}>
        Congratulations! Your booking of face makeup has been confirmed!
      </Text>

      {/* Services Booked */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Services Booked</Text>
        <View style={styles.servicesContainer}>
          <Text style={styles.serviceItem}>Foundation</Text>
          <Text style={styles.serviceItem}>Blush</Text>
        </View>
      </View>

      {/* Date & Time */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Date & Time</Text>
        <Text style={styles.sectionContent}>Wednesday 14 August 2024 at 11.00 - 12.00</Text>
      </View>

      {/* Specialist */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Specialist</Text>
        <Text style={styles.sectionContent}>Katherine</Text>
      </View>

      {/* Price */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Price</Text>
        <Text style={styles.sectionContent}>Rs. 3,800.00</Text>
      </View>

      {/* Charges */}
      <View style={styles.chargesContainer}>
        <View style={styles.chargeRow}>
          <Text style={styles.chargeTitle}>Charges</Text>
          <Text style={styles.chargeAmount}>Rs. 3,800.00</Text>
        </View>
        <View style={styles.chargeRow}>
          <Text style={styles.chargeTitle}>Service Charge</Text>
          <Text style={styles.chargeAmount}>Rs. 1,250.00</Text>
        </View>
        <View style={styles.chargeRow}>
          <Text style={styles.grandTotalTitle}>Grand Total</Text>
          <Text style={styles.grandTotalAmount}>Rs. 5,050.00</Text>
        </View>
      </View>

      {/* Download Button */}
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Download</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#24150E',
  },
  checkmarkContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  checkmark: {
    width: 120,
    height: 120,
  },
  confirmationText: {
    textAlign: 'center',
    color: '#544D4D',
    fontSize: 16,
    marginBottom: 20,
  },
  sectionContainer: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#24150E',
    marginBottom: 5,
  },
  sectionContent: {
    color: '#888888',
    borderBottomWidth:1,
    borderColor: '#EEEEEE',
    paddingBottom:10
  },
  servicesContainer: {
    flexDirection: 'row',
    borderBottomWidth:1,
    borderColor: '#EEEEEE',
    paddingBottom:10
  },
  serviceItem: {
    marginRight: 10,
    color: '#888888',
  },
  chargesContainer: {
    marginTop: 10,
    // borderTopWidth: 1,
    // borderColor: '#EEEEEE',
    // paddingTop: 10,
  },
  chargeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  chargeTitle: {
    color: '#888888',
  },
  chargeAmount: {
    color: '#888888',
  },
  grandTotalTitle: {
    fontWeight: 'bold',
    color: '#24150E',
  },
  grandTotalAmount: {
    fontWeight: 'bold',
    color: '#24150E',
  },
  downloadButton: {
    backgroundColor: '#24150E',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 100
  },
  downloadButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
