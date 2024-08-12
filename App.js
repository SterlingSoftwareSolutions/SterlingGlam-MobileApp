import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from './App/navigation/RootNavigator';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <RootNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
