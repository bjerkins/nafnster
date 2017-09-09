/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Provider } from 'react-redux';
// import { action } from '@storybook/addon-actions';

import { store } from '../../../index.ios';
import Swiping from './Swiping.layout';

const names = {
    data: [
        'Foo',
        'Bar',
        'Zar',
    ],
}

storiesOf('Swiping Scene')
    .addDecorator(getStory => (
        <Provider store={store}>
            { getStory() }
        </Provider>))
    .add('Male', () => <Swiping names={names} gender="male" />)
    .add('Female', () => <Swiping names={names} gender="female"/>)
