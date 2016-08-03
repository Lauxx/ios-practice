
//View = container; Text, Image = able to create some static information

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Navigator, TouchableHighlight } from 'react-native';
import { TabsRoute } from 'react-router-native';

export default class NavAllDay extends Component {
  

  render() {
    return (
      <Navigator
        initialRoute = {{ id: 'Welcome'}}
        renderScene = { this.navigatorRenderScene }
        configureScene = {(route, routeStack) => 
          Navigator.SceneConfigs.FloatFromRight}
        
      />
    );
  }

  navigatorRenderScene(route, navigator){
    _navigator = navigator;
    switch(route.id){
      case 'Welcome':
        return (<Welcome navigator={ navigator } title="Welcome" />);
      case 'Second':
        return (<Second navigator={ navigator } title="Second" /> );  
    }
  }

};

class Welcome extends Component {
  onButtonPress(){
    this.props.navigator.push({
      id: 'Second'
    });
  }

  render(){
    return (
        <View style = { styles.container } >
          <TouchableHighlight onPress = {this.onButtonPress.bind(this)}>
            <Text style={ styles.button } > Welcome to my IOS App </Text>
          </TouchableHighlight> 
        </View>
      )
  }
};

class Second extends Component {
  onButtonPress(){
    this.props.navigator.push({
      id: 'Welcome'
    });
  }

  render(){
    return (
      <View style = { styles.container }> 
        <TouchableHighlight onPress = {this.onButtonPress.bind(this)}>
            <Text style={ styles.button }> This is our second page. </Text>
          </TouchableHighlight> 
      </View>
      )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'turquoise',
  },
  button: {
    borderWidth: 2,
    borderColor: "white",
    padding: 10
  }
  
});

AppRegistry.registerComponent('awesomeproject', () => NavAllDay);



