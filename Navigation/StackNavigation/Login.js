//import liraries
import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {LoginAction} from '../../Redux/Actions/Action';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as yup from 'yup';
// create a component
const Login = ({navigation}) => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  const dispatch = useDispatch();
  const handleLogin = (data) =>{
   dispatch (LoginAction(data))
  }
  const [text, setText] = React.useState('');
  const [showPassword, setShowPassword] = useState(true);

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
              height: '52%',
              alignSelf: 'center',
              resizeMode: 'center',
            }}
          />
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
              handleLogin(values)
              // values.email && values.password !== ''
              //   ? navigation.navigate('Home')
              //   : null;
                console.log(values)
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <View>
                <TextInput
                  mode="outlined"
                  label="Outlined input"
                  placeholder="Type something"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  style={{marginVertical: 5}}
                  //   right={<TextInput.Affix text="/100" />}
                  left={<TextInput.Icon name="account" />}
                />
                {errors.email && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.email}
                  </Text>
                )}
                <TextInput
                  label="Password"
                  mode="outlined"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={showPassword}
                  left={<TextInput.Icon name="lock" />}
                  right={
                    <TextInput.Icon
                      name={showPassword == true ? 'eye-off' : 'eye'}
                      onPress={() => {
                        if (showPassword == true) {
                          setShowPassword(false);
                        } else {
                          setShowPassword(true);
                        }
                      }}
                    />
                  }
                />
                {errors.password && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.password}
                  </Text>
                )}
                <Button
                  mode="contained"
                  onPress={handleSubmit}
                  style={{marginVertical: 10}}>
                  Login
                </Button>
                <TouchableOpacity>
                  <Text style={{color: '#fff', textAlign: 'right'}}>
                    Create an account
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </LinearGradient>
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
export default Login;
