//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { Card,Button } from 'react-native-paper';

// create a component
const Subject = () => {
    return (
        <LinearGradient
            colors={['#FF9933', '#FFFFFF', '#138808']} style={styles.container}>
           <Image source={{uri:"http://eskipaper.com/images/history-wallpaper-9.jpg"}} style={{width:100,height:100}}/>
        </LinearGradient>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Subject;

