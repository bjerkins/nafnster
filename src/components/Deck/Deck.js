import React, { Component } from 'react';

import Deck from './Deck.layout';

class DeckContainer extends Component {
    render() {
        return (
            <Deck {...this.props} />
        );
    }
}

export default DeckContainer;
