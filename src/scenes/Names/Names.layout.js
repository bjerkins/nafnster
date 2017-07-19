
import React, { Component } from 'react';
import { View, Switch } from 'react-native';
import PropTypes from 'prop-types';

import Deck from '../../components/Deck/Deck';
import styles from './Names.styles';

class Names extends Component {

    static propTypes = {
        names: PropTypes.shape().isRequired,
        changeNameType: PropTypes.func.isRequired,
    }

    render() {
        const {
            names: {
                data,
                type,
            },
            changeNameType,
        } = this.props;

        return (
            <View style={styles.container}>
                <Switch
                    onValueChange={changeNameType}
                    value={type.value}
                />

                <View style={styles.deckContainer}>
                    <Deck cards={data} />
                </View>
            </View>
        );
    }
}

export default Names;
