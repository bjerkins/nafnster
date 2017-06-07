import React, { PropTypes, Component } from 'react';
const { FBLogin, FBLoginManager } = require('react-native-facebook-login');
import { StyleSheet, Text, View, } from 'react-native';
import * as firebase from 'firebase';

import * as auth from '../auth/auth';

export default class Login extends Component {

    static propTypes = {
        onLoginSuccess: PropTypes.func.isRequired,
    };

    onLogin = (data) => {
        const token = data.credentials.token;
        const userId = data.credentials.userId;
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        firebase
            .auth()
            .signInWithCredential(credential)
            .then(() => {
                auth.setUser({ userId, token });
                this.props.onLoginSuccess();
            })
            .catch(error => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                const credential = error.credential;
                console.error(errorCode, errorMessage, email, credential);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Please login
                </Text>
                <FBLogin
                    loginBehavior={FBLoginManager.LoginBehaviors.Native}
                    onLogin={this.onLogin}
                />
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
