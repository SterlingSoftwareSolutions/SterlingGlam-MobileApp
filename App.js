import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import RootNavigator from './App/navigation/RootNavigator';
import AdminNavigation from "./App/navigation/AdminNavigation";
import TabNavigator from './App/navigation/TabNavigator';
import authService from "./App/auth/authService";
import AuthContext from './App/auth/context';
import AdminTabNavigator from './App/navigation/AdminTabNavigator';

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await authService.getUser();
      setUser(storedUser);
    };
    loadUser();
  }, []);

  const renderNavigator = () => {
    if (!user) {
      console.log('Not logged in', user);
      return <RootNavigator />;
    }

    if (user.role === 'admin') {
      console.log('Admin logged in', user);
      return <AdminTabNavigator />;
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
