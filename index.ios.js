import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  NavigatorIOS
} from 'react-native';

import Home from './src/Home';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDtmGJqBJrmwN5_LNJR2WVuGsh1fE5GHQI',
  authDomain: 'nafnster.firebaseapp.com',
  databaseURL: 'https://nafnster.firebaseio.com',
  projectId: 'nafnster',
  storageBucket: 'nafnster.appspot.com',
  messagingSenderId: '123888301709'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const authProvider = new firebase.auth.FacebookAuthProvider();

export default class Nafnster extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Home,
          title: 'Home',
        }}
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('Nafnster', () => Nafnster);
