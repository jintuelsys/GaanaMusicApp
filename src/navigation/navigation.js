import * as React from 'react';
import Music from '../screens/music-player';
import Home from '../screens/home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Malayalam from '../screens/malayalam-song';
import Tamil from '../screens/tamil-song';
// import MusicPlayer from '../screens/open-music';
import Login from '../screens/login';
import Signup from '../screens/sign-up';
import Search from '../screens/search-music';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// import Navigation from './src/navigation/navigation';

// export default function App() {
//   return <Navigation />;
// }
function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Music" component={Music} />
      <Drawer.Screen name="Malayalam" component={Malayalam} />

      <Drawer.Screen name="Tamil" component={Tamil} />
      <Drawer.Screen name="Search" component={Search} />

      <Drawer.Screen name="Logout" component={Login} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
