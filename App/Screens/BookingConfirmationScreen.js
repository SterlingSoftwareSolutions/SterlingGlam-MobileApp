import React from 'react';
import { View, Text, StyleSheet, Button,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookingConfirmationScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Icon name="check-circle" size={100} color="#000" style={styles.icon} /> */}
      <Image source={require('../resources/tick.png')} style={styles.icon} />

      <Text style={styles.header}>Booking Confirmation</Text>
      <Text style={styles.subHeader}>
        Congratulations! Your booking of face makeup has been confirmed!
      </Text>


      <View style={styles.detailsContainer}>
        <View style={styles.subContainer}>
        <Icon name="file" size={25} color="#000" />
        <Text style={styles.detailHeader}>Services Booked</Text>
        </View>
        <Text style={styles.detailText}>Foundation        Blush</Text>

        <View style={styles.subContainer}>
        <Icon name="clock-o" size={25} color="#000" />
        <Text style={styles.detailHeader}>Date & Time</Text>
        </View>
          <Text style={styles.detailText}>Wednesday 14 August 2024 at 11.00 - 12.00</Text>

        <View style={styles.subContainer}>
        <Icon name="user" size={25} color="#000" />
        <Text style={styles.detailHeader}>Specialist</Text>
        </View>
        <Text style={styles.detailText}>Specialist: Katherine</Text>

        <View style={styles.subContainer}>
        <Icon name="tag" size={25} color="#000" />
        <Text style={styles.detailHeader}>Price</Text>
        </View>
        <Text style={styles.detailText}>Price: Rs. 3,800.00</Text>

       
        
       
        <View style={styles.detailRow}>
          <Text style={styles.boldText}>Charges: </Text>
          <Text style={styles.detailText}>Rs. 3,800.00</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.boldText}>Service Charge: </Text>
          <Text style={styles.detailText}>Rs. 1,250.00</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.boldText}>Grand Total: </Text>
          <Text style={styles.boldText}>Rs. 5,050.00</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Download" color="#4B371C" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    alignItems: 'center',
  },
  icon: {
    marginTop: 50,
    height:100,
    width:100
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  detailsContainer: {
    width: '100%',
    marginVertical: 20,
  },
  detailHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    left:15
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color:'grey',
    fontWeight:'bold',
    borderBottomColor:'grey',
    borderBottomWidth:1,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  subContainer:{
    flexDirection:'row'
  }
});

export default BookingConfirmationScreen;
