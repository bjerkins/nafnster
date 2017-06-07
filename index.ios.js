import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    NavigatorIOS,
    Modal,
} from 'react-native';

import * as auth from './src/auth/auth';
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

    state = {
        loginModalOpen: false,
    };

    componentWillMount() {
        this.checkLogin();
    }

    checkLogin = async () => {
        const user = await auth.getUser();
        if (user === null) {
            this.setState({ loginModalOpen: true })
        }
    }

    onLoginSuccess = () => {
        this.setState({ loginModalOpen: false });
    }

    onLogOutSuccess = async () => {
        await auth.removeUser();
        this.setState({ loginModalOpen: true });
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigatorIOS
                    initialRoute={{
                        component: Home,
                        title: 'Home',
                        passProps: { onLogOutSuccess: this.onLogOutSuccess },
                    }}
                    itemWrapperStyle={styles.itemStyles}
                    style={{ flex: 1 }}
                />
                {this.state.loginModalOpen &&
                    <Modal
                        animationType={"slide"}
                        transparent={false}
                        visible={true}
                    >
                        <Login onLoginSuccess={this.onLoginSuccess} />
                    </Modal>
                }
            </View>
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
        // backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('Nafnster', () => Nafnster);
