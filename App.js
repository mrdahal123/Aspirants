//import liraries
import React, { Component } from 'react';
import AuthNavigation from './Navigation/StackNavigation/AuthNavigation';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

// create a component

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: 'yellow',
  },
};
const MyComponent = () => {
  return (
<NavigationContainer>
  {/* <StoreProvider store={store}> */}
    <PaperProvider theme={theme}>
      <AuthNavigation />
    </PaperProvider>
  {/* </StoreProvider> */}
</NavigationContainer>
  );
};
export default MyComponent;
