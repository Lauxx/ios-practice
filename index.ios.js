
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
  goToEntry(){
    this.props.navigator.push({
      title: 'Entry',
      component: Entry,
      passProps: { anElement: 'Your value here.'}
    });
  }

  goToAnother(){
    this.props.navigator.push({
      title: "Another",
      component: Another,
      passProps: { betterProp: 'Hey Girl!' }
    })
  }

  render(){
    return (
        <View style = { styles.welcomeContainer } >
        <View >
          <TouchableOpacity
            style={ styles.button } 
            onPress = {() => this.goToEntry() }
            underlayColor={'#bbbbbb'}>
            <Text > 
                Entry 
            </Text>
          </TouchableOpacity>
         </View>
         <View  > 
          <TouchableOpacity
            style={ styles.button } 
            onPress = {() => this.goToAnother() }
            underlayColor={'#bbbbbb'}>
            <Text > 
                Another
            </Text>
          </TouchableOpacity>
        </View>  
        </View>
      )
  }
};

          



class Entry extends Component {

  render(){
    return (
      <View style={ styles.entryContainer }> 
            <Text> I am the entry page. </Text>
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
    paddingTop: 150,
    flexDirection: 'column',
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
    width: 90,
    margin: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: 'center'
  }
  
});

AppRegistry.registerComponent('awesomeproject', () => NavAllDay);



