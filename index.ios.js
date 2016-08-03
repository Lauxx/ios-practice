
//View = container; Text, Image = able to create some static information

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Navigator, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';


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
          <Text> Welcome to my IOS App </Text>
          <TextInput style={styles.textEdit} placeholder="Email"/>
          <TextInput style={styles.textEdit} placeholder="Username"/>
          <TextInput style={styles.textEdit} placeholder="Password" secureTextEntry={true}/>
          <TouchableOpacity onPress = {this.onButtonPress.bind(this)}>
            <Text style={ styles.button } > Login </Text>
          </TouchableOpacity>
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
        <TouchableOpacity onPress = {this.onButtonPress.bind(this)}>
            <Text style={ styles.button }> This is our second page. </Text>
          </TouchableOpacity> 
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
    borderRadius: 20,
    padding: 13,
    marginTop: 45,
    paddingLeft: 20
  },
  textEdit: {
    height: 35, 
    borderColor: "white",
    borderRadius: 18,
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    marginTop: 15,
    color: 'black'
  }
  
});

AppRegistry.registerComponent('awesomeproject', () => NavAllDay);



