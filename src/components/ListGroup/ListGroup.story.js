import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, object, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import ListGroup from '../ListGroup';

/**
 * This is a clone of the contents of README.md,
 * temporarily inlined due to Storybook Issue #3458 (see below)
 *
 * TODO(https://github.com/storybooks/storybook/issues/3458) Remove and use imported README.md #3458 is released and we've updated
 * TODO(https://github.com/storybooks/storybook/issues/4499) Find a way to improve markdown formatting in the "Show Info" section
 */
/* eslint-disable max-len */
const infoAddonConfig = {
  header: false,
  text: `
# ListGroup Component
.
## ABOUT:
This simple layout component is used on various settings pages throughout the app to display a media-block style two column layout. The title and optional subtitle are the first column, the second column made up of a series of vertically stacked <ListGroup.Item>s which get a border between each item.
.
Use one <ListGroup.Item> per single setting or a logical grouping of a few related settings.
`,
};
/* eslint-enable max-len */

const stories = storiesOf('ListGroup', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('ListGroup default', withInfo(infoAddonConfig)(() => {

    const theTitle = text('The Main Title', 'Hello World!');
    const theSubtitle = text('The Subtitle', 'What if it runs really long and could break into several lines...');
    const demoArray = object('demoArray (example knob, not a prop)', [
      { name: 'ListGroup.Item Text 1', value: 'Value 1' },
      { name: 'ListGroup.Item Text 2', value: 'Value 2' },
      { name: 'ListGroup.Item Text 3', value: 'Value 3' },
      { name: 'ListGroup.Item Text 4', value: 'Value 4' },
      { name: 'ListGroup.Item Text 5', value: 'Value 5' },
      { name: 'ListGroup.Item Text 6', value: 'Value 6' },
    ]);

    return (
      <ListGroup
        title={ theTitle }
        subtitle={ theSubtitle }>
        { demoArray.map(item => (
          <ListGroup.Item key={ item.value }>
            { item.name }
            <p className="muted">{ item.value }</p>
          </ListGroup.Item>
        )) }
      </ListGroup>
    );
  }));