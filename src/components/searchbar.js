import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
const SearchBar = ({onChangeText, search}) => {
  return (
    <View>
      <Text style={styles.title}>Search Songs</Text>
      <TextInput
        style={styles.search}
        value={search}
        placeholder={'Search here..'}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 10,
  },
  search: {
    backgroundColor: 'silver',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default SearchBar;
