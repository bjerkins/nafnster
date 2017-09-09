import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';

import styles from './Login.styles';

export default class Login extends Component {

    static propTypes = {
        onLogin: PropTypes.func.isRequired,
    };

    render() {
        return (
            <Image
                source={require('../../theme/img/bg.png')}
                style={styles.container}
                resizeMode="cover"
            >

                <Image
                    source={require('../../theme/img/signup-bear.png')}
                />

                <Text style={styles.headerText}>
                    Finndu nafnið á barnið þitt.
                </Text>

                {/* <FBLogin
                    loginBehavior={FBLoginManager.LoginBehaviors.Native}
                    onLogin={this.props.onLogin}
                /> */}
            </Image>
        )
    }
}
