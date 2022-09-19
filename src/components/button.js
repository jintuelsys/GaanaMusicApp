import {useState} from 'react';
import {
  Touchable,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default function Button(props) {
  const {buttonName} = props;
  const [pressed, setPressed] = useState(false);
  const onSelectPress = () => {
    setPressed(prevPressed => !prevPressed);
  };
  return (
    <TouchableOpacity onPress={onSelectPress}>
      <View style={{backgroundColor: pressed ? 'red' : 'blue'}}>
        <Text style={styles.buttonPlay}>{props.ButtonName}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonPlay: {
    fontSize: 16,
    color: 'white',

    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
});
