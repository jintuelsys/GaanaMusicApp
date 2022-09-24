/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Sound from 'react-native-sound';
import Button from '../components/button';

const Malayalam = props => {
  // const [randomColor, setRandomColor] = useState('blue');
  // const selectHandler = item => {
  //   let color = 'red';
  //   setRandomColor(color);
  // };
  // const onPress = () => {
  //   props.onButtonPress;
  // };
  useState;
  let sound1,
    sound2,
    sound3,
    sound4,
    sound5,
    sound6,
    sound7,
    sound8,
    sound9,
    sound10;
  useEffect(() => {
    Sound.setCategory('Playback', true);
    return () => {
      if (sound1) sound1.release();
      if (sound2) sound2.release();
      if (sound3) sound3.release();
      if (sound4) sound4.release();
      if (sound5) sound5.release();
      if (sound6) sound6.release();
      if (sound7) sound7.release();
      if (sound8) sound8.release();
      if (sound9) sound9.release();
      if (sound10) sound10.release();
    };
  }, []);

  const audioList = [
    {
      id: '1',
      title: 'Play mp3 sound from Local',
      selected: false,
    },
    {
      title: 'Play mp3 sound from Local1',
      id: '2',
      selected: false,
    },
    {
      title: 'Play mp3 sound from Local2',
      id: '3',
      selected: false,
    },
    {
      title: 'Play mp3 sound from Local3',
      id: '4',
      selected: false,
    },
    {
      title: 'Play mp3 sound from Local4',
      id: '5',
      selected: false,
    },
  ];
  const [select, setSelect] = useState(audioList);
  const HandleOnPress = item => {
    const newItem = select.map(val => {
      if (val.id === item.id) {
        return {...val, selected: !val.selected};
      } else {
        return val;
      }
    });
    setSelect(newItem);
  };
  const playSound = (item, index) => {
    if (index == 0) {
      sound1 = new Sound('ms.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 1) {
      sound2 = new Sound('ms.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        sound2.play(() => {
          sound2.release();
        });
      });
    } else if (index == 7) {
      sound8 = new Sound('ms.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        sound8.play(() => {
          sound8.release();
        });
      });
    } else if (index == 2) {
      sound3 = new Sound('ms.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        sound3.play(() => {
          sound3.release();
        });
      });
    } else if (index == 3) {
      sound10 = new Sound('ms.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        sound4.play(() => {
          sound4.release();
        });
      });
    }
  };

  const stopSound = (_item, index) => {
    if (index == 0 && sound1) {
      sound1.stop(() => {
        console.log('Stop');
      });
    } else if (index == 1 && sound2) {
      sound2.stop(() => {
        console.log('Stop');
      });
    } else if (index == 2 && sound3) {
      sound3.stop(() => {
        console.log('Stop');
      });
    } else if (index == 3 && sound4) {
      sound4.stop(() => {
        console.log('Stop');
      });
    } else if (index == 4 && sound5) {
      sound5.stop(() => {
        console.log('Stop');
      });
    }
  };

  const ItemView = (item, index) => {
    return (
      <View style={styles.container}>
        <View style={styles.feature} key={index}>
          <Text
            style={{
              flex: 1,
              padding: 5,
              fontFamily: 'Roboto',
              fontSize: 20,
              color: item.selected ? 'green' : 'white',
            }}>
            {item.title}
          </Text>

          <TouchableOpacity onPress={() => playSound(item, index)}>
            <Button ButtonName="Play" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => stopSound(item, index)}>
            <Text style={styles.buttonStop}>Stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/Music.jpg')}
          resizeMode="cover"
          style={{flex: 1}}>
          <Text style={styles.titleText}>Play List..</Text>
          <ScrollView style={{flex: 1}}>{audioList.map(ItemView)}</ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
export default Malayalam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    flex: 1,
    padding: 5,
    fontFamily: 'Roboto',
    color: 'randomColor',
  },
  buttonPlay: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(00,80,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  buttonStop: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(80,00,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  feature: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 7,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
  },
});
