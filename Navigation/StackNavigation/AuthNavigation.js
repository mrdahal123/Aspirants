import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import VerifyOtp from './VerifyOtp';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='VerifyOtp' component={VerifyOtp} options={{headerShown:true}}/>
      </Stack.Navigator>
  );
}
export default AuthNavigation;