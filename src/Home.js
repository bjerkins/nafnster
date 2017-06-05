import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default class Home extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.homeText}>
            Welcome to React Native!
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  homeText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
