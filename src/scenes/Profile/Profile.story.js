/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Profile from './Profile.layout';

const user = {
    name: 'Helena Helgadóttir'
};

storiesOf('Profile Scene')
    .add('Default', () =>
        <Profile user={user} />
    )
