
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeCards from 'react-native-swipe-cards'

import swiperStyles from './Deck.styles'
import Card from '../../components/Card/Card';

class Deck extends Component {

    static propTypes = {
        cards: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.cards !== this.props.cards;
    }

    render() {
        console.log(this.props.cards);
        return (
            <SwipeCards
                cards={this.props.cards}
                renderCard={(card) => <Card name={card} />}
                handleYup={(card) => console.log(card)}
                handleNope={(card) => console.log(card)}
                handleMaybe={(card) => console.log(card)}
                {...swiperStyles}
            />
        );
    }
}

export default Deck;
