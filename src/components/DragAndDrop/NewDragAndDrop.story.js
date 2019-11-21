import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import DragAndDrop from './index';
import Token from '../Token';

const itemsWithoutGroups = [
  { id: 1, type: 'item', text: 'Item A' },
  { id: 2, type: 'item', text: 'Item B' },
  { id: 3, type: 'item', text: 'Item C' },
  { id: 4, type: 'item', text: 'Item D' },
  { id: 5, type: 'item', text: 'Item E' },
];
const itemsWithGroups = [
  { id: 1, type: 'item', text: 'Item A' },
  [
    { id: 3, type: 'item', text: 'Item B' },
    { id: 4, type: 'item', text: 'Item C' },
  ],
  { id: 5, type: 'item', text: 'Item E' },
  { id: 6, type: 'item', text: 'Item D' },
];

const renderItem = ({
  item,
  index,
}) =>
  (<div>
    <Token
      isDraggable={ true }
      name={ item['text'] }
      order={ index + 1 }
      showWell={ false }
    />
  </div>)
;

const stories = storiesOf('NewDragAndDrop', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => <div id="root-preview">{story()}</div>);

stories.add('Reordering flat list', () => {
  return <DragAndDrop items={ itemsWithoutGroups } renderItem={ renderItem }/>;
});

stories.add('Reordering with grouping', () => {
  return <DragAndDrop hasGrouping={ true } items={ itemsWithGroups } renderItem={ renderItem }/>;
});
