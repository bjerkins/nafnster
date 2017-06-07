import React, { PropTypes, Component } from 'react';
const { FBLogin, FBLoginManager } = require('react-native-facebook-login');
import { StyleSheet, Text, View, } from 'react-native';
import * as firebase from 'firebase';

export default class Login extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  onLogin(data) {
    const token = data.credentials.token;
    // Build Firebase credential with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Google user.
    firebase.auth().signInWithCredential(credential).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.loginText}>
          Please login!
        </Text>
        <FBLogin onLogin={this.onLogin} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  homeText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
