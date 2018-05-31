import * as storybook from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

require(`../dist/styles.js`);

require(`../src/oui/oui.scss`);

storybook.setAddon(infoAddon);

setOptions({
  name: 'OUI Storybook',
  url: 'https://github.com/optimizely/oui',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: true,
});

const req = require.context('../src/', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(req)
}

storybook.configure(loadStories, module);
