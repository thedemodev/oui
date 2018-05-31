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
  showStoriesPanel: false,
  showAddonPanel: false,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: true,
});

storybook.setAddon(infoAddon);
addDecorator(withScreenshot({
  delay: 0,
  viewport: [
    // {
    //   width: 100,
    //   height: 100,
    // },
    {
      width: 400,
      height: 300,
      deviceScaleFactor: 2,
    },
    // {
    //   width: 1280,
    //   height: 800,
    //   deviceScaleFactor: 2,
    // },
  ],
}));

function loadStories() {
  require('../src/components/ArrowsInline/ArrowInline.story.js');
  require('../src/components/Attention/Attention.story.js');
  require('../src/components/Badge/Badge.story.js');
  require('../src/components/BlockList/BlockList.story.js');
  require('../src/components/Button/Button.story.js');
  require('../src/components/ButtonRow/ButtonRow.story.js');
  require('../src/components/Card/Card.story.js');
  require('../src/components/Checkbox/Checkbox.story.js');
  require('../src/components/Code/Code.story.js');
  require('../src/components/CopyButton/CopyButton.story.js');
  require('../src/components/Disclose/Disclose.story.js');
  require('../src/components/Dropdown/Dropdown.story.js');
  require('../src/components/EmptyDashboard/EmptyDashboard.story.js');
  // require('../src/components/Help/Help.story.js');
  require('../src/components/Input/Input.story.js');
  require('../src/components/Label/Label.story.js');
  require('../src/components/Link/Link.story.js');
  require('../src/components/OverlayWrapper/OverlayWrapper.story.js');
  require('../src/components/Popover/Popover.story.js');
  require('../src/components/Poptip/Poptip.story.js');
  require('../src/components/ProgressBar/ProgressBar.story.js');
  require('../src/components/ProgressDots/ProgressDots.story.js');
  require('../src/components/Radio/Radio.story.js');
  require('../src/components/RangeSlider/Rangeslider.story.js');
  require('../src/components/Select/Select.story.js');
  require('../src/components/Spinner/Spinner.story.js');
  require('../src/components/Switch/Switch.story.js');
  require('../src/components/Table/Table.story.js');
  require('../src/components/TabNav/TabNav.story.js');
  require('../src/components/Textarea/Textarea.story.js');
  require('../src/components/TextField/TextField.story.js');
  require('../src/components/Token/Token.story.js');
}

storybook.configure(loadStories, module);
