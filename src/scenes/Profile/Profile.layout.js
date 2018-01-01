import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';

import styles from './Profile.styles';

class Profile extends Component {

    static propTypes = {
        user: PropTypes.shape().isRequired,
    };

    render() {
        const { user } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('../../theme/img/profile-bg.png')}
                        style={styles.headerBackground}
                        resizeMode="cover"
                    />

                    <View style={styles.headerOval}>
                    </View>

                    <Text style={styles.headerName}>{user.name}</Text>
                </View>
            </View>
        );
    }
}

export default Profile;
