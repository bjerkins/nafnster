import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Profile.styles';

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Profile will bere here!</Text>
            </View>
        );
    }
}

export default Profile;
