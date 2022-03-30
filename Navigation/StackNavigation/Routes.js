import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
// import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './../store/store';
import MainNavigation from './StackNavigation';
const Routes = () => {
  const token = useSelector(
    state => state.LoginUserDetailReducer.loginUserDetail,
  );
  console.log('token data', token);

  useEffect(() => {
    console.log(store.getState());
    // Spinner();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {token === null ? <AuthNavigation /> : <MainNavigation />}
      </NavigationContainer>
    </Provider>
  );
};

export default Routes;
