// //import liraries
// import {useRoute} from '@react-navigation/native';
// import React, {useState} from 'react';
// import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import {Button, Text} from 'react-native-paper';
// import {TextInput} from 'react-native-paper';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {useDispatch} from 'react-redux';
// import {LoginAction} from '../../Redux/Actions/Action';
// import LinearGradient from 'react-native-linear-gradient';
// import {Formik} from 'formik';
// import * as yup from 'yup';
// import auth from '@react-native-firebase/auth';
// // create a component
// const Login = ({navigation}) => {
//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');
//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//     // navigation.navigate('VerifyOtp');
//     console.log('numver', confirmation);
//   }

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//       setCode(code)
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//     if(code!=''){
//       navigation.navigate('Otp')
//     }else{
//       null
//     }
//   }

//   const loginValidationSchema = yup.object().shape({
//     phoneNumber: yup.string()
//     .required('Mobile Number  is Required')
//     .matches(
//       /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
//       "Phone number is not valid"
//     )
//   });
//   // const dispatch = useDispatch();
//   // const handleLogin = data => {
//   //   dispatch(LoginAction(data));
//   // };
//   // const [text, setText] = React.useState('');
//   // const [showPassword, setShowPassword] = useState(true);

//   return (
//     <View style={styles.container}>
//       <LinearGradient
//         colors={['#FF9933', '#FFFFFF', '#138808']}
//         style={{flex: 1}}>
//         <View style={{width: '90%', alignSelf: 'center'}}>
//           <Text style={styles.headerText}>Welcome ! Aspirants</Text>
//           <Image
//             source={require('../../src/Assets/images/login3.png')}
//             style={{
//               width: '100%',
//               height: '55%',
//               alignSelf: 'center',
//               resizeMode: 'center',
//             }}
//           />
//           {/* {confirm != true ? (
//             <Button
//               style={{backgroundColor: 'blue'}}
//               title="Phone Number Sign In"
//               onPress={() => signInWithPhoneNumber('+91 9775109524')}
//             />
//           ) : null}
//           <TextInput value={code} onChangeText={text => setCode(text)} />
//           <Button
//             title="Confirm Code"
//             onPress={() => confirmCode()}
//             style={{backgroundColor: 'red'}}
//           /> */}
//           <Formik
//             validationSchema={loginValidationSchema}
//             initialValues={{phoneNumber: '',}}
//             onSubmit={values => {
//               // handleLogin(values)
//               signInWithPhoneNumber()
//            values.phoneNumber!== ''
//                 ? navigation.navigate('VerifyOtp')
//                 : null;
//                 console.log("number",values)
//             }}>
//             {({
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               values,
//               errors,
//               isValid,
//             }) => (
//               <View>
//                 <TextInput
//                   mode="outlined"
//                   label="Outlined input"
//                   placeholder="Type something"
//                   onChangeText={handleChange('phoneNumber')}
//                   onBlur={handleBlur('phoneNumber')}
//                   value={values.phoneNumber}
//                   keyboardType="numeric"
//                   style={{marginVertical: 5}}
//                   //   right={<TextInput.Affix text="/100" />}
//                   left={<TextInput.Icon name="account" />}
//                 />
//                 {errors.phoneNumber && (
//                   <Text style={{fontSize: 10, color: 'red'}}>
//                     {errors.phoneNumber}
//                   </Text>
//                 )}
//                 {/* <TextInput
//                   label="Password"
//                   mode="outlined"
//                   onChangeText={handleChange('password')}
//                   onBlur={handleBlur('password')}
//                   value={values.password}
//                   secureTextEntry={showPassword}
//                   left={<TextInput.Icon name="lock" />}
//                   right={
//                     <TextInput.Icon
//                       name={showPassword == true ? 'eye-off' : 'eye'}
//                       onPress={() => {
//                         if (showPassword == true) {
//                           setShowPassword(false);
//                         } else {
//                           setShowPassword(true);
//                         }
//                       }}
//                     />
//                   }
//                 />
//                 {errors.password && (
//                   <Text style={{fontSize: 10, color: 'red'}}>
//                     {errors.password}
//                   </Text>
//                 )} */}
//                 <Button
//                   mode="contained"
//                   // disabled={}
//                   onPress={handleSubmit}
//                   style={{marginVertical: 10}}>
//                   Login
//                 </Button>
//                 <TouchableOpacity>
//                   <Text style={{color: '#fff', textAlign: 'right'}}>
//                     Create an account
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </Formik>
//         </View>
//       </LinearGradient>
//     </View>
//   );
// };
// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   },
//   headerText: {
//     textAlign: 'center',
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginTop: 14,
//   },
// });

// //make this component available to the app
// export default Login;

//import liraries
import React, {Component, useState} from 'react';
import {View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import { LoginAction } from '../../Redux/Actions/Action';
import GifImage from '@lowkey/react-native-gif';
// create a component
const Login = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  
  async function mobile() {
    setLoading(true);
    let mobileNumber = '+91' + number;
    try {
      const confirmation = await auth().signInWithPhoneNumber(mobileNumber);
      setLoading(false);
      // userData(number)
      navigation.navigate('VerifyOtp', {
        data: confirmation,
        userDetails: number,
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  // const dispatch = useDispatch();
  // const userData = (data) => {
  //   dispatch(LoginAction(data));
  // }
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
              label="Enter number"
              placeholder="Number Please"
              onChangeText={value => setNumber(value)}
              value={number}
              keyboardType="numeric"
              style={{marginVertical: 5}}
              //   right={<TextInput.Affix text="/100" />}
              left={<TextInput.Icon name="account" />}
            />
          </View>
          {!loading ? (
            <Button
              mode="contained"
              disabled={number.length == 10 ? false : true}
              onPress={() => mobile()}
              style={{marginVertical: 10}}>
              Request Otp
            </Button>
          ) : (<View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
            <GifImage
       
       source={require('../../src/Assets/images/loder.gif')}
     
    style={[StyleSheet.absoluteFillObject,{alignSelf:'center',}]}
     resizeMode={'cover'}
   />
          </View>

            // <LinearGradient
            //   colors={['#FF9933', '#FFFFFF', '#138808']}
            //   style={{flex: 1}}>
            //   <ActivityIndicator size={20} color={'red'} />
            // </LinearGradient>
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

// define your styles
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
export default Login;
