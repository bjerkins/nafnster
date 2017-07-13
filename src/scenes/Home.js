import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const { FBLogin } = require('react-native-facebook-login');

export default class Home extends Component {

    static propTypes = {
        navigator: PropTypes.object.isRequired,
        onLogOutSuccess: PropTypes.func.isRequired,
    }

    render() {
        return (
            <View>
                <FBLogin onLogout={this.props.onLogOutSuccess} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    homeText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
