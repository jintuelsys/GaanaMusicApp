/* eslint-disable prettier/prettier */
import * as React from 'react';
import Music from '../screens/music-player';
import Home from '../screens/home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Malayalam from '../screens/Malayalam-song';
import Tamil from '../screens/tamil-song';
import MusicPlayer from '../screens/open-music';
// import Login from '../screens/Login';
const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      useLegacyImplementation
      screenOptions={{
        drawerPosition: 'left',
        headerShown: true,
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Music" component={Music} />
      <Drawer.Screen name="Malayalam" component={Malayalam} />
      <Drawer.Screen name="Tamil" component={Tamil} />
      <Drawer.Screen name="PlayMusic" component={MusicPlayer} />
    </Drawer.Navigator>
  );
}
