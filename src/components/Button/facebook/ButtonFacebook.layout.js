import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity } from 'react-native';

import styles from './ButtonFacebook.styles';

class Button extends Component {

    static defaultProps = {
        buttonStyle: {},
    };

    static propTypes = {
        buttonStyle: PropTypes.shape(),
        onLogin: PropTypes.func.isRequired,
    };

    render() {
        return (
            <TouchableOpacity
                style={{
                    ...styles.buttonContainer,
                    ...this.props.buttonStyle
                }}
                onPress={this.props.onLogin}
            >
                <Image
                    source={require('../../../theme/img/icon-facebook.png')}
                    style={styles.icon}
                />
                <Text style={styles.text}>Facebook</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;
