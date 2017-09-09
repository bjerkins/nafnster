/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterView from '../../../storybook/stories/CenterView/index';
import Card from './Card.layout';

const name = {
    name: 'Foo Johnson'
};

storiesOf('Card')
    .add('Default', () =>
        <CenterView>
            <Card name={name} />
        </CenterView>
    )
