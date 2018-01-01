/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions, global-require */

import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories');
  require('../src/scenes/Login/Login.story');
  require('../src/scenes/Swiping/Swiping.story');
  require('../src/scenes/Profile/Profile.story');
  require('../src/components/Card/Card.story');
  require('../src/components/Deck/Deck.story');
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: '192.168.0.17' });
AppRegistry.registerComponent('Nafnster', () => StorybookUI);
export default StorybookUI;
