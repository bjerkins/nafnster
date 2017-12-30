/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { store } from '../../../index.ios';
import Swiping from './Swiping.layout';

const names = {
    data: [
        { key: '1', name: 'Foozar' },
        { key: '2', name: 'Bulbasur' },
        { key: '3', name: 'Zoyotanonvich' }
    ]
};

storiesOf('Swiping Scene')
    .addDecorator(getStory => (
        <Provider store={store}>
            { getStory() }
        </Provider>
    )).add('Male', () => (
        <Swiping
            names={names}
            likeName={action('name liked')}
            randomize={action('randomizing')}
            dislikeName={action('name disliked')}
            gender="male"
        />
    )).add('Male with surname', () => (
        <Swiping
            names={names}
            likeName={action('name liked')}
            randomize={action('randomizing')}
            dislikeName={action('name disliked')}
            gender="male"
            surname="Bjarkason"
        />
    )).add('Female', () => (
        <Swiping
            names={names}
            likeName={action('name liked')}
            randomize={action('randomizing')}
            dislikeName={action('name disliked')}
            gender="female"
        />
    )).add('Female with surname', () => (
        <Swiping
            names={names}
            likeName={action('name liked')}
            randomize={action('randomizing')}
            dislikeName={action('name disliked')}
            gender="female"
            surname="Bjarkadóttir"
        />
    ))
