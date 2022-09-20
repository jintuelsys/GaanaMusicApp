/* eslint-disable prettier/prettier */
import * as React from 'react';
import Music from '../screens/music-player';
import Home from '../screens/home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Malayalam from '../screens/Malayalam-song';
import Tamil from '../screens/tamil-song';
import MusicPlayer from '../screens/open-music';
import Login from '../screens/login';
import Signup from '../screens/SignUp';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
// import Login from '../screens/Login';
const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      useLegacyImplementation
      screenOptions={{
        drawerPosition: 'left',
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Music" component={Music} />
      <Drawer.Screen name="Malayalam" component={Malayalam} />
      <Drawer.Screen name="Tamil" component={Tamil} />
      <Drawer.Screen name="PlayMusic" component={MusicPlayer} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="Logout" component={Login} />
    </Drawer.Navigator>
  );
}
