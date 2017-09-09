
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Card.styles';
class Card extends Component {

    static propTypes = {
        name: PropTypes.shape(),
        gender: PropTypes.string.isRequired,
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.name.name}</Text>
            </View>
        );
    }
}

export default Card;
