import { StatusBar } from 'expo-status-bar';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './App/Screens/Welcome';
import Signup from './App/Screens/SignUp';
import Login from './App/Screens/Login';
import Dashboard from './App/Screens/Dashboard';
import Setting from './App/Screens/Setting';
import Appoinment from './App/Screens/Appoinment';
import AppoinmentHistory from './App/Screens/AppoinmentHistory';
import SubCategories from './App/Screens/SubCategories';
import { Profiler } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './App/navigation/AppNavigator';
import AuthNavigator from './App/navigation/AuthNavigator';
import HomeScreen from './App/Screens/Home';

 const Stack = createNativeStackNavigator();
 
export default function App() {
  return (

    <HomeScreen></HomeScreen>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     
  },
});
