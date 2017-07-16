import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Modal } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { Provider } from 'react-redux';

// utils
import { firebaseUtils } from './src/utils/firebase';
import * as localStorage from './src/utils/localStorage';

// reducers
import { names } from './src/stores/names/reducers';

// scenes
import App from './src/scenes/App';
import Login from './src/scenes/Login/Login';

firebaseUtils.initializeApp();

const rootReducer = combineReducers({
    names,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleWare),
);

export default class Nafnster extends Component {

    state = {
        loginModalOpen: false,
    };

    componentWillMount() {
        this.checkLogin();
    }

    checkLogin = async () => {
        const user = await localStorage.getUser();
        if (user === null) {
            this.setState({ loginModalOpen: true })
        }
    }

    onLoginSuccess = () => {
        this.setState({ loginModalOpen: false });
    }

    onLogOutSuccess = async () => {
        await localStorage.removeUser();
        this.setState({ loginModalOpen: true });
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {this.state.loginModalOpen &&
                        <Modal
                            animationType={"slide"}
                            transparent={false}
                            visible={true}
                        >
                            <Login onLoginSuccess={this.onLoginSuccess} />
                        </Modal>
                    }
                    {!this.state.loginModalOpen &&
                        <App onLogOutSuccess={this.onLogOutSuccess} />
                    }
                </View>
            </Provider>
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
    }
});

AppRegistry.registerComponent('Nafnster', () => Nafnster);
