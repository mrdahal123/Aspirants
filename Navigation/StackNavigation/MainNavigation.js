import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Screens/Home';
import Subject from '../../Screens/Subject';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Subject' component={Subject}/>
      </Stack.Navigator>
  );
}
export default MainNavigation;