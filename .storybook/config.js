import * as storybook from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
// import infoAddon from '@storybook/addon-info';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { addDecorator } from '@storybook/react';
import { initScreenshot } from 'storybook-chrome-screenshot';

require(`../dist/styles.js`);

require(`../src/oui/oui.scss`);

setOptions({
  name: 'OUI Storybook',
  url: 'https://github.com/optimizely/oui',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});

// addon-info
setDefaults({
  inline: true,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 150
});

// const req = require.context('../src/', true, /story\.js$/);
//
// function loadStories() {
//   req.keys().forEach(req)
// }

storybook.setAddon(infoAddon);

addDecorator(initScreenshot());


function loadStories() {
  require('../src/components/Attention/Attention.story.js');
  require('../src/components/Button/Button.story.js');
}

storybook.configure(loadStories, module);
