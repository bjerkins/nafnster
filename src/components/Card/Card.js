import React, { Component } from 'react';

import Card from './Card.layout';

class CardContainer extends Component {
    render() {
        return (
            <Card {...this.props} />
        );
    }
}

export default CardContainer;
