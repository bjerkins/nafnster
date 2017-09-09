/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import CenterView from '../../../storybook/stories/CenterView/index';
import Deck from './Deck.layout';

const cards = [
    { name: 'Does' },
    { name: 'This' },
    { name: 'Work?' },
];

storiesOf('Deck')
    .add('Default', () =>
        <CenterView>
            <View>
                <Deck cards={cards} />
            </View>
        </CenterView>
    )
