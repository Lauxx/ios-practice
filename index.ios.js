
//View = container; Text, Image = able to create some static information

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Navigator, TouchableHighlight } from 'react-native';


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
            <Text> Welcome to my IOS App </Text>
          </TouchableHighlight> 
          <Text  style = { styles.welcome }> 
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.

            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.</Text>
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
            <Text> This is our second page. </Text>
          </TouchableHighlight> 
          <Text style = { styles.welcome }> 
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.

            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.</Text>
      </View>
      )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  welcome: {
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 50,
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

AppRegistry.registerComponent('awesomeproject', () => NavAllDay);



