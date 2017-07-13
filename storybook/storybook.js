/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions, global-require */

import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories');
  require('../src/scenes/Login/Login.story');
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' });
AppRegistry.registerComponent('Nafnster', () => StorybookUI);
export default StorybookUI;
