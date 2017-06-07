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

import Home from './src/scenes/Home';
import Login from './src/scenes/Login';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDtmGJqBJrmwN5_LNJR2WVuGsh1fE5GHQI',
  authDomain: 'nafnster.firebaseapp.com',
  databaseURL: 'https://nafnster.firebaseio.com',
  projectId: 'nafnster',
  storageBucket: 'nafnster.appspot.com',
  messagingSenderId: '123888301709'
};
firebase.initializeApp(firebaseConfig);

export default class Nafnster extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Login,
          title: 'Login',
          passProps: { title: 'Login' },
        }}
        style={styles.container}
        itemWrapperStyle={styles.itemStyles}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Nafnster', () => Nafnster);
