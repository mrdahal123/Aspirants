//import liraries
import React, { Component } from 'react';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './Navigation/StackNavigation/Routes';
import store from './Redux/Store/Store';
import {Provider, useDispatch, useSelector} from 'react-redux';
// create a component

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#083603',
    accent: 'yellow',
  },
};
const MyComponent = () => {
  return (

  <Provider store={store}>
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  </Provider> 

  );
};
export default MyComponent;
