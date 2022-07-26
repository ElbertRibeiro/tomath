import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../pages/Login/index";
import { Home } from '../pages/Home';

const Stack = createStackNavigator();

export function Router(){
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="home"component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}