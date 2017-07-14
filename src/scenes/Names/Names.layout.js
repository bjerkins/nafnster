
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Names.styles';

class Names extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Names will bere here!</Text>
            </View>
        );
    }
}

export default Names;
