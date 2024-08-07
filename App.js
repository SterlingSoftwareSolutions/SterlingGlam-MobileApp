import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from './App/navigation/MainNavigator';
import TabNavigator from './App/navigation/TabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <TabNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
