
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Deck from '../../components/Deck/Deck';
import styles from './Names.styles';

class Names extends Component {

    static propTypes = {
        names: PropTypes.shape().isRequired,
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Start swiping some names!</Text>

                <View style={styles.deckContainer}>
                     <Deck cards={this.props.names.data} />
                </View>
            </View>
        );
    }
}

export default Names;
