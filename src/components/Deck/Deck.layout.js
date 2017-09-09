
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeCards from 'react-native-swipe-cards'

import swiperStyles from './Deck.styles'
import Card from '../../components/Card/Card';

class Deck extends Component {

    static propTypes = {
        cards: PropTypes.arrayOf(PropTypes.string).isRequired,
        gender: PropTypes.string.isRequired,
        likeName: PropTypes.func.isRequired,
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.cards !== this.props.cards;
    }

    render() {
        return (
            <SwipeCards
                cards={this.props.cards}
                renderCard={(card) => (
                    <Card name={card} gender={this.props.gender}
                />)}
                handleYup={this.props.likeName}
                handleNope={(card) => console.log(card)}
                handleMaybe={(card) => console.log(card)}
                {...swiperStyles}
            />
        );
    }
}

export default Deck;
