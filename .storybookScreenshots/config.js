import * as storybook from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';
import { addDecorator } from '@storybook/react';
import { initScreenshot, withScreenshot } from 'storybook-chrome-screenshot';

require(`../dist/styles.js`);
require(`../src/oui/oui.scss`);

setOptions({
  name: 'OUI Storybook',
  url: 'https://github.com/optimizely/oui',
  goFullScreen: true,
  showLeftPanel: false,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

storybook.setAddon(infoAddon);
addDecorator(withScreenshot({
  delay: 0,
  viewport: [
    {
      width: 1280,
      height: 800,
      deviceScaleFactor: 2,
    },
  ],
}));

function loadStories() {
  require('../src/components/Attention/Attention.story.js');
  require('../src/components/Badge/Badge.story.js');
  require('../src/components/Button/Button.story.js');
  require('../src/components/Dropdown/Dropdown.story.js');
  require('../src/components/TextField/TextField.story.js');
  require('../src/components/Token/Token.story.js');
}

storybook.configure(loadStories, module);
