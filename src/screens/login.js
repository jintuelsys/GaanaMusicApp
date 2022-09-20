import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from '../components/background';
import Btn from '../components/btn';
import {darkGreen} from '../constants/constants';
import Field from '../components/field';
import {useNavigation} from '@react-navigation/native';
const Login = props => {
  const nav = useNavigation();
  function onPress() {
    console.log('hlo');
    nav.navigate('Home');
  }
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            height: 600,
            width: 460,
            paddingRight: 70,
            borderTopLeftRadius: 130,
            paddingTop: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25, color: darkGreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 100,
            }}>
            {/* <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text> */}
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() => {
              props.navigation.navigate('Home');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingBottom: 10,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Don't have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
