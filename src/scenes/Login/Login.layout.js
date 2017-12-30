import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text } from 'react-native';

import styles from './Login.styles';

import ButtonFacebook from '../../components/Button/facebook/ButtonFacebook';

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

                <Image source={require('../../theme/img/signup-bear.png')} />

                <Text style={styles.headerText}>
                    Finndu drauma nafnið á barnið þitt
                </Text>

                <ButtonFacebook
                    buttonStyle={styles.buttonFacebook}
                    onLogin={this.props.onLogin}
                />

                <Text style={styles.smallPrint}>
                    Með því að skrá þig þá samþykkir þú skilmálana. Þú getur lesið meira um þá hér
                </Text>

            </Image>
        )
    }
}
