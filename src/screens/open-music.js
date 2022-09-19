import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
// import songs from '../components/data';
import Slider from '@react-native-community/slider';
import Iconicons from 'react-native-vector-icons/Ionicons';
import {stopSound} from '../screens/music-player';
import Music from '../screens/music-player';
import Sound from 'react-native-sound';
Sound;
const {width, height} = Dimensions.get('window');

const MusicPlayer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
        {/* <FlatList
          renderItem={renderSongs}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        /> */}
        <View style={styles.artworkwrapper}>
          <Image
            source={require('../assets/musicp.jpg')}
            style={styles.artworking}
          />
        </View>
        <View>
          <Text style={styles.title}>Song Title</Text>
        </View>
        <View>
          <Slider
            style={styles.progresscontainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumTintColor="#FFD369"
            maximumTrackTintColor="#FFF"
            onSlidingComplete={() => {}}></Slider>

          <View style={styles.progressLabelContainer}>
            <Text style={styles.progressLabelText}>0.00</Text>
            <Text style={styles.progressLabelText}>3.55</Text>
          </View>
        </View>
        <View style={styles.musicControlls}>
          <TouchableOpacity onPress={() => {}}>
            <Iconicons
              name="play-skip-back-outline"
              size={35}
              color="#FFD369"
              style={{marginTop: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              stopSound(item, index);
            }}>
            <Iconicons name="ios-pause-circle" size={75} color="#FFD369" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Iconicons
              name="play-skip-forward-outline"
              size={35}
              color="#FFD369"
              style={{marginTop: 25}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonControls}>
          <TouchableOpacity onPress={() => {}}>
            <Iconicons name="heart-outline" size={30} color="#87777777" />
          </TouchableOpacity>
          <Iconicons name="repeat" size={30} color="#87777777" />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default MusicPlayer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222832',
  },
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  musicControlls: {
    flexDirection: 'row',
    width: '60%',

    justifyContent: 'space-between',
    marginTop: 15,
  },
  artworkwrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
  },
  artworking: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  buttonContainer: {
    borderTopColor: '#39E46',
    borderTopWidth: 1,
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
  },
  buttonControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#EEEEEE',
  },
  progresscontainer: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: '#fff',
  },
});
