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
import SearchBar from '../components/searchbar';
// import Act from '../components/activityplay';
import Sound from 'react-native-sound';
const Music = () => {
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
      title: 'Hindi Songs',
      url: 'https://cdn.glitch.global/9f5e8ad4-172b-42a4-b444-a6f2ced0e078/hindi.mpeg?v=1663077389341',
    },

    {
      title: 'English Song ',
      url: 'https://cdn.glitch.global/9f5e8ad4-172b-42a4-b444-a6f2ced0e078/english.mpeg?v=1663077171615',
    },

    {
      title: 'Malayalam Songs',
      url: 'https://cdn.glitch.global/9f5e8ad4-172b-42a4-b444-a6f2ced0e078/ms.mp3?v=1663074537719',
    },
    {
      title: 'Telugu Songs',
      url: 'https://cdn.glitch.global/9f5e8ad4-172b-42a4-b444-a6f2ced0e078/hindi.mpeg?v=1663077389341',
    },

    {
      title: 'Marathi Songs ',
      url: 'https://cdn.glitch.global/9f5e8ad4-172b-42a4-b444-a6f2ced0e078/english.mpeg?v=1663077171615',
    },

    {
      title: 'Play mp3 sound from Local',
    },
    {
      title: 'Play mp3 sound from Local1',
    },
    {
      title: 'Play mp3 sound from Local2',
    },
    {
      title: 'Play mp3 sound from Local3',
    },
    {
      title: 'Play mp3 sound from Local4',
    },
  ];

  const playSound = (item, index) => {
    if (index == 0) {
      sound1 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });

        console.log('play');
      });
    } else if (index == 1) {
      sound2 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound2.play(() => {
          sound2.release();
        });
      });
    } else if (index == 2) {
      sound3 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound3.play(() => {
          sound3.release();
        });
      });
    } else if (index == 3) {
      sound4 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound4.play(() => {
          sound4.release();
        });
      });
    } else if (index == 4) {
      sound5 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound5.play(() => {
          sound5.release();
        });
      });
    } else if (index == 5) {
      sound6 = new Sound('ms.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        sound6.play(() => {
          sound6.release();
        });
      });
    } else if (index == 6) {
      sound7 = new Sound('ms.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        sound7.play(() => {
          sound7.release();
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
    } else if (index == 8) {
      sound9 = new Sound('ms.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        sound9.play(() => {
          sound9.release();
        });
      });
    } else if (index == 9) {
      sound10 = new Sound('ms.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        sound10.play(() => {
          sound10.release();
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
    } else if (index == 5 && sound6) {
      sound6.stop(() => {
        console.log('Stop');
      });
    } else if (index == 6 && sound7) {
      sound7.stop(() => {
        console.log('Stop');
      });
    } else if (index == 7 && sound8) {
      sound8.stop(() => {
        console.log('Stop');
      });
    } else if (index == 8 && sound9) {
      sound9.stop(() => {
        console.log('Stop');
      });
    } else if (index == 9 && sound10) {
      sound10.stop(() => {
        console.log('Stop');
      });
    }
  };

  const ItemView = (item, index) => {
    return (
      <View style={styles.feature} key={index}>
        <Text style={styles.textStyle}>{item.title}</Text>
        <TouchableOpacity onPress={() => playSound(item, index)}>
          <Text style={styles.buttonPlay}>play</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => stopSound(item, index)}>
          <Text style={styles.buttonStop}>Stop</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Play List..</Text>
        <ScrollView style={{flex: 1}}>{audioList.map(ItemView)}</ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Music;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    color: 'black',
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
