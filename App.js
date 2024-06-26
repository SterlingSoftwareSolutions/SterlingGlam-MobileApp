import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './App/Screens/Welcome';
import Signup from './App/Screens/SignUp';
import Login from './App/Screens/Login';
import Dashboard from './App/Screens/Dashboard';
import CustomerProfile from './App/Screens/customerProfile';
import Setting from './App/Screens/Setting';
import Appoinment from './App/Screens/Appoinment';
import AppoinmentHistory from './App/Screens/AppoinmentHistory';
import SubCategories from './App/Screens/SubCategories';
import { Profiler } from 'react';

 
 
export default function App() {
  return (

    <View style={styles.container}>
     <CustomerProfile/>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     
  },
});
