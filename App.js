import { StatusBar } from 'expo-status-bar';
import {NavigationContainer, StackActions} from '@react-navigation/native';
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 const Stack = createNativeStackNavigator();
 
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='welcome' component={Welcome}/>
        <Stack.Screen name='Login' component={Login}/>

      </Stack.Navigator>

    </NavigationContainer>
 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     
  },
});
