import React, { PropTypes, Component } from 'react';
import * as firebase from 'firebase';

import * as auth from '../../auth/auth';
import Login from './Login.layout';

export default class LoginContainer extends Component {

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
            <Login onLogin={this.onLogin} />
        )
    }
};
