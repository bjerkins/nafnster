import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Modal } from 'react-native';
import PropTypes from 'prop-types';

import Deck from '../../components/Deck/Deck';
import styles from './Swiping.styles';

const actionIcons = {
    like: require('../../theme/img/icon-like.png'),
    dislike: require('../../theme/img/icon-dislike.png'),
    randomize: require('../../theme/img/icon-randomize.png'),
}

class Swiping extends Component {

    static propTypes = {
        surname: PropTypes.string,
        matchModalVisible: PropTypes.bool.isRequired,
        names: PropTypes.shape().isRequired,
        gender: PropTypes.string.isRequired,
        likeName: PropTypes.func.isRequired,
        dislikeName: PropTypes.func.isRequired,
        randomize: PropTypes.func.isRequired,
    }

    renderActionButton = (type, actionHandler) => {
        return (
            <TouchableOpacity
                style={styles.actionButton}
                onPress={actionHandler}
            >
                <Image source={actionIcons[type]} />
            </TouchableOpacity>
        );
    }

    render() {
        const {
            names: {
                data,
            },
            matchModalVisible,
            gender,
            surname,
            likeName,
            dislikeName,
            randomize,
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

                <View style={styles.actions}>
                    {this.renderActionButton('dislike', dislikeName)}
                    {this.renderActionButton('randomize', randomize)}
                    {this.renderActionButton('like', likeName)}
                </View>

                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={matchModalOpen}
                >
                </Modal>

            </Image>
        );
    }
}

export default Swiping;
