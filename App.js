import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from './App/navigation/RootNavigator';
import AuthContext from "./App/auth/context";
import AdminNavigation from "./App/navigation/AdminNavigation";
import TabNavigator from './App/navigation/TabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState();

  const renderNavigator = () => {
    if (!user) { //if no user is logged in
      console.log('Not logged in', user);
      return <RootNavigator />;
    }

    if (user.role === 'admin') {
      console.log('Admin logged in', user);
      return <AdminNavigation />;
    } else {
      console.log('User logged in', user);
      return <TabNavigator />;
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      {renderNavigator()}
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

