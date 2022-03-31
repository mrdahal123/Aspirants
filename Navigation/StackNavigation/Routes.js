import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import store from './../../Redux/Store/Store';
import MainNavigation from './MainNavigation';
import { useSelector } from 'react-redux';
const Routes = () => {
  const token = useSelector(
    state => state.LoginUserDetailReducer.userDetails,
  );
  console.log('token data', token);

  useEffect(() => {
    console.log(store.getState());
    // Spinner();
  }, []);
  return (

      <NavigationContainer>
        {token === null ? <AuthNavigation /> : <MainNavigation />}
      </NavigationContainer>
   
  );
};

export default Routes;
