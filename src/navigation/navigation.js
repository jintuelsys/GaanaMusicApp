/* eslint-disable prettier/prettier */
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNav from './drawer';
import Home from '../screens/home';
import Music from '../screens/music-player';
// import Login from '../screens/Login';
// import SignUp from '../screens/SignUp';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNav">
        <Stack.Screen
          name="DrawerNav"
          component={DrawerNav}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Music" component={Music} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
