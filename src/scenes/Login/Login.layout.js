import React, { PropTypes, Component } from 'react';
import { View, Text } from 'react-native';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';

import styles from './Login.styles';

export default class Login extends Component {

    static propTypes = {
        onLogin: PropTypes.func.isRequired,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Please loginz
                </Text>
                <FBLogin
                    loginBehavior={FBLoginManager.LoginBehaviors.Native}
                    onLogin={this.props.onLogin}
                />
            </View>
        )
    }
};
