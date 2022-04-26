//import liraries
import React, {Component, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {LoginAction, Subjects} from '../../Redux/Actions/Action';

// create a component
const Subject = () => {
  const SubjectDetails = useSelector(state => {
    return state.SubjectDetailsReducers.state.subjectdata;
    // return state.SubjectDetailsReducers.state.subjectdata
  });
  const userDetails = useSelector(state => {
    return state.LoginUserDetailReducer;
  });
  console.log('user', userDetails);
  console.log('subject', SubjectDetails);
  const dispatch = useDispatch();

  const AVTAR_SIZE = 70;
  useEffect(() => {
    dispatch(Subjects(), LoginAction());
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingVertical: 25,
          alignItems:'center',
          justifyContent:'space-between'
        }}>
        <View
          style={{
            width: AVTAR_SIZE + 15,
            height: AVTAR_SIZE + 15,
            borderWidth: 10,
            borderColor: '#138808',
            borderRadius: AVTAR_SIZE,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: AVTAR_SIZE - 45,
          }}>
          <Image
            source={require('../Assets/images/yoga.gif')}
            style={{
              width: AVTAR_SIZE + 10,
              height: AVTAR_SIZE + 10,
              borderRadius: AVTAR_SIZE + 50,
            }}
          />
        </View>
        <Text style={{color:'#138808',fontSize:20,fontWeight:'bold'}}>HI , 9875AKKAR </Text>
        <Image
            source={require('../Assets/images/yoga.gif')}
            style={{
              width: AVTAR_SIZE + 10,
              height: AVTAR_SIZE + 10,
              borderRadius: AVTAR_SIZE + 50,
            }}
          />
      </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center',width:'90%',height:100,alignSelf:'center'}}>
            <Image
              source={require('../Assets/images/back.jpg')}
              style={{
                width: '100%',          
                height: 200,
                alignSelf:'center',
                resizeMode:'stretch',
                marginTop:AVTAR_SIZE+30,
                borderRadius: AVTAR_SIZE - 40,
              }}
            />  
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopStartRadius: AVTAR_SIZE - 20,
          borderTopEndRadius: AVTAR_SIZE - 20,
        }}>
        {/* <FlatList
          style={{width: '90%', alignSelf: 'center'}}
          showsVerticalScrollIndicator={false}
          data={SubjectDetails}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View>
              <View
                style={{
                  width: '100%',
                  marginHorizontal: 13,
                  marginVertical: 8,
                }}>
                <TouchableOpacity>
                  <Image
                    source={{uri: item.image}}
                    resizeMode="stretch"
                    style={{width: 155, height: 125, borderRadius: 5}}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#000',
                    marginVertical: 5,
                  }}>
                  {item.subject}
                </Text>
              </View>
            </View>
          )}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
});

//make this component available to the app
export default Subject;
