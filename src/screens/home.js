/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';

import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Home() {
  const nav = useNavigation();
  function onPress() {
    console.log('hlo');
    nav.navigate('Music');
  }

  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor={'#326bbf'} />
      </SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/Music.jpg')}
          resizeMode="cover"
          style={{flex: 1}}>
          <View style={{marginTop: 400}}>
            <TouchableOpacity>
              <Text style={styles.text}>Gaana</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onPress} style={[styles.buttonDesign]}>
            <Image
              source={require('../assets/mbutton.png')}
              style={{width: 250, height: 50}}
            />
            <Text style={styles.buttonText}>Start Music -> </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'white',
    backgroundColor: '#81d8d0',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 30,
    fontSize: 35,
    overflow: 'hidden',
    textAlign: 'center',
    width: '75%',
    height: 60,
    marginTop: -120,
    alignSelf: 'center',

    fontFamily: 'Papyrus',
  },
  buttonDesign: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Papyrus',
    marginTop: -50,
  },
});
