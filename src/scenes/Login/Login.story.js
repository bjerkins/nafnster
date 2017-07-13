/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Login from './Login.layout';

storiesOf('Login Scene', module)
  .add('default', () =>
    <Login onLogin={action('login clicked')}/>
  )
