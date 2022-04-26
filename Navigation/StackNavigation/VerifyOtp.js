import React, {Component, useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {LoginAction} from '../../Redux/Actions/Action';
// create a component
const VerifyOtp = ({navigation, route}) => {

  const [otp, setOtp] = useState('');
  const confirmOtp = route.params.data;
  const user = route.params.userDetails;

  async function confirmCode() {
    try {
      var data = await confirmOtp.confirm(otp);
      if (data) {
        console.log('works');
        handleLogin(user);
      } else {
        console.log('not works');
      }
    } catch (error) {
      console.log(error);
      alert("please enter a valid OTP")
    }
  }
  const dispatch = useDispatch();

  const handleLogin = (item) => {
    dispatch(LoginAction(item));
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF9933', '#FFFFFF', '#138808']}
        style={{flex: 1}}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={styles.headerText}>Welcome ! Aspirants</Text>
          <Image
            source={require('../../src/Assets/images/login3.png')}
            style={{
              width: '100%',
              height: '55%',
              alignSelf: 'center',
              resizeMode: 'center',
            }}
          />
          <View>
            <TextInput
              mode="outlined"
              label="Enter Otp"
              placeholder="Otp Please"
              onChangeText={value => setOtp(value)}
              value={otp}
              keyboardType="numeric"
              style={{marginVertical: 5}}
              //   right={<TextInput.Affix text="/100" />}
              left={<TextInput.Icon name="account" />}
            />
          </View>
          <Button
            mode="contained"
            disabled={otp.length == 6 ? false : true}
            onPress={() => {
              confirmCode();
            }}
            style={{marginVertical: 10}}>
            Login
          </Button>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 14,
  },
});

//make this component available to the app
export default VerifyOtp;
