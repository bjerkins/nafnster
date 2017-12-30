
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Card.styles';
class Card extends Component {

    static propTypes = {
        surname: PropTypes.string,
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
    }

    render() {
        const showSurname = !!this.props.surname;
        return (
            <View style={styles.container}>

                <Image
                    style={styles.orgnament}
                    source={require('../../theme/img/orgnament.png')}
                />

                <Text style={styles.name}>{this.props.name}</Text>

                <View className="wot" style={styles.dashedLine} />

                {showSurname &&
                    <Text style={styles.surname}>{this.props.surname}</Text>
                }


            </View>
        );
    }
}

export default Card;
