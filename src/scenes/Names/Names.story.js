/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf, action } from '@storybook/react-native';

import Scene from '../../../storybook/stories/Scene';
import Names from './Names.layout';

const names = {
    data: [
        'Foo',
        'Bar',
        'Zar',
    ],
}

storiesOf('Names Scene')
    .add('Default', () =>
        <Scene>
            <Names
                names={names}
                namesType='male'
                handleNamesTypeChange={action('changing name type')}
            />
        </Scene>
    )
