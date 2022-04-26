import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../src/Screens/Home';
import Subject from  '../../src/Screens/Subject';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name='Subject'component={Subject} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  );
}
export default MainNavigation;