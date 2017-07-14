/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Login from './Login.layout';

storiesOf('Login Scene')
    .add('Default', () =>
        <Login onLogin={action('login clicked')} />
    )
