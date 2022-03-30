import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Home from '../../Screens/Home';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
      <Stack.Navigator  >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
  );
}
export default AuthNavigation;