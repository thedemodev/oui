import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import DragAndDrop from './index';
import Token from '../Token';

let itemsWithoutGroups = [
  { id: 1, type: 'item', text: 'Item A' },
  { id: 2, type: 'item', text: 'Item B' },
  { id: 3, type: 'item', text: 'Item C' },
  { id: 4, type: 'item', text: 'Item D' },
  { id: 5, type: 'item', text: 'Item E' },
];

// eslint-disable-next-line react/prop-types
const renderItem = ({ item, index, snapshot }) => (
  <div>
    <Token
      isDraggable={ true }
      name={ item['text'] + '- isDragging? ' + snapshot.isDragging }
      order={ index + 1 }
      showWell={ false }
    />
  </div>
);
const stories = storiesOf('DragAndDrop', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => <div id="root-preview">{story()}</div>);

stories.add('Reordering flat list', () => {
  return (
    <DragAndDrop
      items={ itemsWithoutGroups }
      renderItem={ renderItem }
      idForDroppableRegion={ 'droppable-story-demo' }
      onBeforeCapture={ action('do something before dragging') }
      onDragEnd={ action('get updated list when drag ends') }
    />
  );
});
