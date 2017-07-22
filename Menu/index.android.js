/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Sabrina Le
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/App.js';

export default class Menu extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('Menu', () => Menu);
