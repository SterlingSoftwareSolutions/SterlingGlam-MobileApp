import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

// Dummy data for specialists and appointments
const specialists = [
  { name: 'Anderson', color: '#00CC66',bgColor:'#E5FBEB' }, 
  { name: 'Allen', color: '#FFCC00', bgColor:'#FFFBEE' }, 
  { name: 'Clinton', color: '#66B2FF' , bgColor:'#DAE8FF'}, 
];

const appointments = [
  { time: '08:00', services: [{ name: 'Facial', specialist: 'Anderson', color: '#00CC66',bgColor:'#E5FBEB'  }, { name: 'Waxing', specialist: 'Clinton', color: '#66B2FF',bgColor:'#DAE8FF' }] },
  { time: '08:30', services: [{ name: 'Shaving', specialist: 'Allen', color: '#FFCC00' , bgColor:'#FFFBEE'}] },
  { time: '09:00', services: [{ name: 'Hair Coloring', specialist: 'Allen', color: '#FFCC00' , bgColor:'#FFFBEE'}] },
  { time: '09:30', services: [{ name: 'Waxing', specialist: 'Anderson', color: '#00CC66',bgColor:'#E5FBEB'  }] },
  { time: '10:00', services: [{ name: 'Facial', specialist: 'Allen', color: '#FFCC00', bgColor:'#FFFBEE' }] },
  { time: '10:30', services: [{ name: 'Hair Cut', specialist: 'Anderson', color: '#00CC66' ,bgColor:'#E5FBEB' }] },
  { time: '11:00', services: [{ name: 'Haircut, Shaving', specialist: 'Clinton', color: '#66B2FF' , bgColor:'#DAE8FF'}] },
  { time: '11:30', services: [{ name: 'Hair Cut', specialist: 'Allen', color: '#FFCC00' , bgColor:'#FFFBEE' }] },
  { time: '12:00', services: [{ name: 'Shaving', specialist: 'Anderson', color: '#00CC66',bgColor:'#E5FBEB'  }] },
];

const DaySchedule = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.legend}>
        {specialists.map((specialist) => (
          <View key={specialist.name} style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: specialist.color }]} />
            <Text style={styles.legendText}>{specialist.name}</Text>
          </View>
        ))}
      </View>

      <View style={styles.scheduleContainer}>
        {appointments.map((appointment) => (
          <View key={appointment.time} style={styles.timeSlotRow}>
            <Text style={styles.time}>{appointment.time}</Text>
            <FlatList
              horizontal
              data={appointment.services}
              keyExtractor={(item, index) => `${item.name}-${index}`}
              renderItem={({ item }) => (
                <View style={[styles.appointmentCard, { borderColor: item.color, borderWidth:1, backgroundColor:item.bgColor }]}>
                  <Text style={styles.serviceText}>{item.name}</Text>
                </View>
              )}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor:'grey',
    padding:10,
    borderRadius:10
  },
  legend: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 16,
    color: '#333',
  },
  scheduleContainer: {
    marginTop: 10,
  },
  timeSlotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  time: {
    width: 60,
    fontSize: 14,
    color: '#333',
    fontWeight:'bold'
  },
  appointmentCard: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  serviceText: {
    fontSize: 14,
    color: '#333',
  },
});

export default DaySchedule;
