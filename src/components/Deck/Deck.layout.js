
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import SwipeCards from 'react-native-swipe-cards'

import styles from './Deck.styles';
import Card from '../../components/Card/Card';

class Deck extends Component {

    static propTypes = {
        surname: PropTypes.string,
        cards: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        gender: PropTypes.string.isRequired,
        likeName: PropTypes.func.isRequired,
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.cards !== this.props.cards;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{...styles.deckBackground, ...styles.deckBack}} />
                <View style={{...styles.deckBackground, ...styles.deckMiddle}} />

                <SwipeCards
                    cards={this.props.cards}
                    renderCard={(card) => (
                        <Card
                            key={card.key}
                            name={card.name}
                            gender={this.props.gender}
                            surname={this.props.surname}
                        />)
                    }
                    handleYup={this.props.likeName}
                    handleNope={(card) => console.log('NOPE', card)}
                    showYup={false}
                    showNope={false}
                    style={styles.swipeCards}
                />
            </View>
        );
    }
}

export default Deck;
