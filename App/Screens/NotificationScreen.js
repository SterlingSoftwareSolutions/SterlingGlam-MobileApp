import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const NotificationScreen = () => {
  const notifications = [
    {
      title: 'New Appointment',
      date: 'Monday',
      description: 'Booked on your appointment on Tuesday, 17 August 2024 at 11.00',
      buttonLabel: 'Get Details',
      titleColor: '#84170B', // dark red
    },
    {
      title: 'To Remind',
      date: 'Today',
      description: 'Your today’s appointment is 15:00 at Sterling Glam.',
      buttonLabel: '15.30 mins left',
      titleColor: '#F2B01F', // yellow
    },
    {
      title: 'Booking Completed',
      date: 'Yesterday',
      description: 'Your service #SG16868, has been completed. Please share your experience.',
      buttonLabel: 'Give Review',
      titleColor: '#157839', // green
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        {/* <View style={styles.toggleContainer}>
          <Text style={styles.allNotificationText}>All Notification</Text>
          <View style={styles.toggleSwitch} />
        </View> */}
      </View>
      {notifications.map((notification, index) => (
        <View key={index} style={styles.notificationCard}>
          <View style={styles.notificationHeader}>
            <Text style={[styles.notificationTitle, { color: notification.titleColor }]}>
              {notification.title}
            </Text>
            <Text style={styles.notificationDate}>{notification.date}</Text>
          </View>
          <Text style={styles.notificationDescription}>{notification.description}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{notification.buttonLabel}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#24150E',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  allNotificationText: {
    color: '#24150E',
    marginRight: 10,
    fontSize: 16,
  },
  toggleSwitch: {
    width: 40,
    height: 20,
    backgroundColor: '#24150E',
    borderRadius: 10,
  },
  notificationCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationDate: {
    color: '#AAAAAA',
  },
  notificationDescription: {
    fontSize: 15,
    color: '#24150E',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#754A32',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop:12
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default NotificationScreen;
