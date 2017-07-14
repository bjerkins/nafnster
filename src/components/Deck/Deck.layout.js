
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-native-deck-swiper';

import swiperStyles from './Deck.styles'
import Card from '../../components/Card/Card';

class Deck extends Component {

    static propTypes = {
        cards: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    render() {
        return (
            <Swiper
                cards={this.props.cards}
                renderCard={(card) => <Card name={card} />}
                onSwiped={(cardIndex) => { console.log(cardIndex) }}
                onSwipedAll={() => { console.log('onSwipedAll') }}
                cardIndex={0}
                {...swiperStyles}
            />
        );
    }
}

export default Deck;
