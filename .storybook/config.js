import * as storybook from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';
import { addDecorator } from '@storybook/react';
import { initScreenshot } from 'storybook-chrome-screenshot';

require(`../dist/styles.js`);

require(`../src/oui/oui.scss`);

storybook.setAddon(infoAddon);

addDecorator(initScreenshot());

setOptions({
  name: 'OUI Storybook',
  url: 'https://github.com/optimizely/oui',
  goFullScreen: false,
  showLeftPanel: false,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

const req = require.context('../src/', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(req)
}

storybook.configure(loadStories, module);
