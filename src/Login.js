import React, { PropTypes, Component } from 'react';
const { FBLogin, FBLoginManager } = require('react-native-facebook-login');
import { StyleSheet, Text, View, } from 'react-native';

export default class Login extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.loginText}>
          Welcome to React Native!
        </Text>
        <FBLogin />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  loginText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
