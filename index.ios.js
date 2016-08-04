
//View = container; Text, Image = able to create some static information

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, TextInput, NavigatorIOS } from 'react-native';



export default class NavAllDay extends Component {
  render(){
      return(
        <NavigatorIOS style={styles.navContainer}
          initialRoute={{
            title: "My IOS",
            component: Welcome
          }} />
    )
  }
};







class Welcome extends Component {
  doSomething(){
    this.props.navigator.push({
      title: 'Entry',
      component: Entry,
      passProps: { anElement: 'Your value here.'}
    });
  }

  render(){
    return (
        <View style = { styles.welcomeContainer } >
          <TouchableOpacity
            style={ styles.button } 
            onPress = {() => this.doSomething() }
            underlayColor={'#bbbbbb'}>
            <Text > 
                Login 
            </Text>
          </TouchableOpacity>
        </View>
      )
  }
};

          





class Entry extends Component {
  doSomething(){
    this.props.navigator.push({
      title: 'Another',
      component: Another,
      passProps: { betterProp: 'Hey Girl!', element: this.props.anElement }
    });
  }

  render(){
    return (
      <View style={ styles.entryContainer }> 
        <TouchableOpacity 
            style={ styles.button } 
            onPress = {() => this.doSomething() }
            underlayColor={'#bbbbbb'}>
            <Text> Next </Text>
          </TouchableOpacity>
      </View>
      )
  }
};



class Another extends Component{
  render(){
    return (
      <View style={ styles.anotherContainer }>
        <Text> Some words are happening. {this.props.element} {this.props.betterProp} </Text>
      </View>
      )
  }
};




const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
  },
  welcomeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'teal',
    padding: 10
  },
  entryContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'turquoise',
    padding: 10,
    justifyContent:'center'

  },
  anotherContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 10,
    justifyContent:'center'

  },
  button: {
    flex: 1, 
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    padding: 13,
    justifyContent: 'center'
  },
  textEdit: {
    height: 35, 
    borderColor: "white",
    borderRadius: 18,
    borderWidth: 2,
    textAlign: 'center',
    marginTop: 15,
    color: 'black'
  }
  
});

AppRegistry.registerComponent('awesomeproject', () => NavAllDay);



