import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen} from '../constants/constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: darkGreen,
        paddingHorizontal: 20,
        width: '58%',
        backgroundColor: 'rgb(220,220, 220)',
        marginVertical: 10,
      }}
      placeholderTextColor={darkGreen}></TextInput>
  );
};

export default Field;
