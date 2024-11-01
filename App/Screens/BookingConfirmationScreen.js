import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

export default function BookingConfirmationScreen() {
  const navigation = useNavigation();

  const handlePay = () => {
    navigation.navigate("Payment");
  };

  const handlePayVenue = () => {
    Alert.alert('Success', 'Your Booking has been confirmed');
    navigation.navigate("AppointmentOverview");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Review Bookingg</Text>

      {/* Services Booked */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="work" size={24} color="#24150E" />
          <Text style={styles.sectionTitle}>Services Booked</Text>
        </View>
        <View style={styles.servicesContainer}>
          <Text style={styles.serviceItem}>Foundation</Text>
          <Text style={styles.serviceItem}>Blush</Text>
        </View>
      </View>

      {/* Date & Time */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Ionicons name="calendar" size={24} color="#24150E" />
          <Text style={styles.sectionTitle}>Date & Time</Text>
        </View>
        <Text style={styles.sectionContent}>Wednesday 14 August 2024 at 11:00 - 12:00</Text>
      </View>

      {/* Specialist */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <FontAwesome name="user" size={24} color="#24150E" />
          <Text style={styles.sectionTitle}>Specialist</Text>
        </View>
        <Text style={styles.sectionContent}>Katherine</Text>
      </View>

      {/* Price */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Ionicons name="pricetag" size={24} color="#24150E" />
          <Text style={styles.sectionTitle}>Price</Text>
        </View>
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

      {/* Payment Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.paymentButton} onPress={handlePayVenue}>
          <Text style={styles.paymentButtonText}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>

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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#24150E',
    marginBottom: 20,
  },
  sectionContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    paddingBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#24150E',
    marginLeft: 10,
  },
  sectionContent: {
    color: '#888888',
    fontSize: 16,
  },
  servicesContainer: {
    flexDirection: 'row',
  },
  serviceItem: {
    marginRight: 10,
    color: '#888888',
    fontSize: 16,
  },
  chargesContainer: {
    marginTop: 20,
    paddingVertical: 10,
  },
  chargeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  chargeTitle: {
    color: '#888888',
    fontSize: 16,
  },
  chargeAmount: {
    color: '#888888',
    fontSize: 16,
  },
  grandTotalTitle: {
    fontWeight: 'bold',
    color: '#24150E',
    fontSize: 18,
  },
  grandTotalAmount: {
    fontWeight: 'bold',
    color: '#24150E',
    fontSize: 18,
  },
  paymentButton: {
    backgroundColor: '#24150E',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  paymentButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
});

