
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Deck from '../../components/Deck/Deck';
import styles from './Names.styles';

class Names extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Start swiping some names!</Text>

                <View style={styles.deckContainer}>
                     <Deck cards={['Awyeah', 'This', 'IS', 'AWESOME']} />
                </View>
            </View>
        );
    }
}

export default Names;
