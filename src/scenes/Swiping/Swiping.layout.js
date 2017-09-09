
import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Deck from '../../components/Deck/Deck';
import styles from './Swiping.styles';

class Swiping extends Component {

    static propTypes = {
        names: PropTypes.shape().isRequired,
        gender: PropTypes.string.isRequired,
    }

    render() {
        const {
            names: {
                data,
            },
            gender,
        } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.deckContainer}>
                    <Deck cards={data} gender={gender} />
                </View>
            </View>
        );
    }
}

export default Swiping;
