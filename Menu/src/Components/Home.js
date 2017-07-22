import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  // create direct title for page or create in Router
  // static navigationOptions = {
  //     title: 'Home Page'
  // }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        <TouchableOpacity
        style={{ backgroundColor: 'pink' }}
          onPress={() => {
        this.props.navigation.navigate('Screen_Detail', { para: 'Hello Sabrina' })
                          }
                  }
        >
        <TouchableOpacity
        style={{ backgroundColor: 'red' }}
          onPress={() => {this.props.navigation.navigate('DrawerOpen');  }}
        >
            <Text>GO TO MENU</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
