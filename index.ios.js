/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//View = container; Text, Image = able to create some static information

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

var AwesomeProject = React.createClass({
  render: function(){
    var pic = {
      uri: 'https://i.ytimg.com/vi/-szWTcQa8n8/maxresdefault.jpg'
    };

    return (
      <View style={{flex: 1}}>
        
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <Text style={styles.welcome}>
            Welcome Lauren.
          </Text>
        </View>
        <View style={{flex: 3, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, backgroundColor: 'steelblue'}} />
        
       </View> 
      )
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 4,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'Verdana',
    padding: 10,
  },
  picture: {
    flex: 2,
    height: 300, 
    width: 340, 
  },
  box: {
    borderColor: 'blue',
    borderWidth: 4,
  },
});

AppRegistry.registerComponent('awesomeproject', () => AwesomeProject);
