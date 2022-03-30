//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon, Button} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../../Redux/Actions/Action';
// create a component
const Login = ({navigation}) => {
  const [text, setText] = React.useState('');
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={styles.container}>
      <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
        <TextInput
          mode="outlined"
          label="Outlined input"
          placeholder="Type something"
        //   right={<TextInput.Affix text="/100" />}
        left={<TextInput.Icon name="person-circle" />}
        />
        <TextInput label="Password" 
         mode="outlined"
         secureTextEntry={showPassword}
         right={<TextInput.Icon name={showPassword==true?"eye-off":'person-circle'} onPress={()=> { if (showPassword == true) {
            setShowPassword(false);
          } else {
            setShowPassword(true);
          }}} />} />
        <Button mode="contained" onPress={() => navigation.navigate('Home')}>
          Press me
        </Button>
      </View>
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Login;
