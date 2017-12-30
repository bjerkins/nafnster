import React, { Component } from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';

import Deck from '../../components/Deck/Deck';
import styles from './Swiping.styles';

class Swiping extends Component {

    static propTypes = {
        surname: PropTypes.string,
        names: PropTypes.shape().isRequired,
        gender: PropTypes.string.isRequired,
        likeName: PropTypes.func.isRequired,
    }

    render() {
        const {
            names: {
                data,
            },
            gender,
            surname,
            likeName,
        } = this.props;

        return (
            <Image
                style={styles.container}
                source={require('../../theme/img/bg.png')}
                resizeMode="cover"
            >
                <Deck
                    cards={data}
                    gender={gender}
                    surname={surname}
                    likeName={likeName}
                />
            </Image>
        );
    }
}

export default Swiping;
