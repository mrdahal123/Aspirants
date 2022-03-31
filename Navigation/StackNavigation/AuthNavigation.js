import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}
export default AuthNavigation;