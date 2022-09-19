import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

export default function Act() {
  const [isLoading, setIsLoading] = useState(false);

  // This function will be triggered when the button is pressed
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleLoading}>
        <View
          style={{
            ...styles.button,
            backgroundColor: isLoading ? '#4caf50' : '#8bc34a',
          }}>
          {isLoading && <ActivityIndicator size="large" color="yellow" />}
          <Text style={styles.buttonText}>
            {isLoading ? 'Stop Loading' : 'Start Loading'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

// Kindacode.com
// Just some styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(80,00,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
