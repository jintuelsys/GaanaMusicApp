/* eslint-disable prettier/prettier */
import React from 'react';

import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Sound from 'react-native-sound';
export default function Home() {
  function playAudio() {
    Sound.setCategory('Playback');
    var test = new Sound(
      'https://cdn.glitch.global/9f5e8ad4-172b-42a4-b444-a6f2ced0e078/ms.mp3?v=1663074537719',
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log(
          'duration in seconds: ' +
            test.getDuration() +
            'number of channels: ' +
            test.getNumberOfChannels(),
        );

        // Play the sound with an onEnd callback
        test.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      },
    );
  }
  function playAudio1() {
    Sound.setCategory('Playback');
    var test = new Sound(
      'https://cdn.glitch.global/9f5e8ad4-172b-42a4-b444-a6f2ced0e078/tamil.mpeg?v=1663077366119',
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log(
          'duration in seconds: ' +
            test.getDuration() +
            'number of channels: ' +
            test.getNumberOfChannels(),
        );

        // Play the sound with an onEnd callback
        test.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
        // test.stop(stop => {
        //   if (stop) {
        //     console.log('successfully finished playing');
        //   } else {
        //     console.log('playback failed due to audio decoding errors');
        //   }
        // });
      },
    );
  }
  function playAudio2() {
    Sound.setCategory('Playback');
    var test = new Sound(
      'https://cdn.glitch.global/9f5e8ad4-172b-42a4-b444-a6f2ced0e078/hindi.mpeg?v=1663077389341',
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log(
          'duration in seconds: ' +
            test.getDuration() +
            'number of channels: ' +
            test.getNumberOfChannels(),
        );

        // Play the sound with an onEnd callback
        test.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      },
    );
  }
  function playAudio3() {
    Sound.setCategory('Playback');
    var test = new Sound(
      'https://cdn.glitch.global/9f5e8ad4-172b-42a4-b444-a6f2ced0e078/english.mpeg?v=1663077171615',
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log(
          'duration in seconds: ' +
            test.getDuration() +
            'number of channels: ' +
            test.getNumberOfChannels(),
        );

        // Play the sound with an onEnd callback
        test.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      },
    );
  }
  const stop = (index, item) => {
    if (index === 0 && playAudio) {
      playAudio.stop(() => {
        console.log('stop');
      });
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Music.jpg')}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={{marginTop: 150}}>
          <Text style={styles.text}>Music App</Text>
          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                playAudio();
              }}
              style={[
                styles.buttonDesign,
                {
                  marginTop: 120,
                },
              ]}>
              <Image
                source={require('../assets/mbutton.png')}
                style={{width: 230, height: 100}}
              />
              <Text style={styles.buttonText}>Malayalam Songs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                playAudio1();
              }}
              style={[styles.buttonDesign]}>
              <Image
                source={require('../assets/mbutton.png')}
                style={{width: 230, height: 100}}
              />
              <Text style={styles.buttonText}>Tamil Songs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                playAudio2();
              }}
              style={[styles.buttonDesign]}>
              <Image
                source={require('../assets/mbutton.png')}
                style={{width: 230, height: 100}}
              />
              <Text style={styles.buttonText}>Hindi Songs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                playAudio3();
              }}
              style={[styles.buttonDesign]}>
              <Image
                source={require('../assets/mbutton.png')}
                style={{width: 230, height: 100}}
              />
              <Text style={styles.buttonText}>English Songs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                playAudio2();
              }}
              style={[styles.buttonDesign]}>
              <Image
                source={require('../assets/mbutton.png')}
                style={{width: 230, height: 100}}
              />
              <Text style={styles.buttonText}>Telugu Songs</Text>
            </TouchableOpacity>
          </ScrollView>

          <View style={{flex: 0.2}}>
            <TouchableOpacity
              style={[styles.buttonDesign, {marginTop: -20}]}
              onPress={() => {
                stop();
              }}>
              <Image
                source={require('../assets/stopbutton.png')}
                style={{width: 100, height: 100}}
              />

              <Text style={styles.buttonText}>Stop</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
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
    marginTop: -70,
  },
});
