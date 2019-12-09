import React from 'react';
import { action } from '@storybook/addon-actions';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { withKnobs, boolean as _boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Token from '../Token';
import { UnwrappedSortable } from './index';
var itemsWithoutGroups = [{
  id: 1,
  type: 'item',
  text: 'Item A'
}, {
  id: 2,
  type: 'item',
  text: 'Item B'
}, {
  id: 3,
  type: 'item',
  text: 'Item C'
}, {
  id: 4,
  type: 'item',
  text: 'Item D'
}, {
  id: 5,
  type: 'item',
  text: 'Item E'
}];
var itemsWithGroups = [{
  id: 1,
  type: 'item',
  text: 'Item A'
}, [{
  id: 3,
  type: 'item',
  text: 'Item B'
}, {
  id: 4,
  type: 'item',
  text: 'Item C'
}], {
  id: 5,
  type: 'item',
  text: 'Item E'
}, {
  id: 6,
  type: 'item',
  text: 'Item D'
}];

var renderItem = function renderItem(_ref) {
  var item = _ref.item,
      position = _ref.position,
      connectDragSource = _ref.connectDragSource;
  return connectDragSource(React.createElement("div", null, React.createElement(Token, {
    isDraggable: true,
    name: item.get('text'),
    order: position[0] + 1,
    showWell: false
  })));
};
/**
 * Please note: In order for Storybook's withInfo add-on to parse the Nestable
 * component's prop types, the component cannot be wrapped in its default
 * HTML5Backend context. Therefore, the unwrapped version is imported here and
 * and the DND context is applied to the story preview itself.
 */


var DNDContextContainer = DragDropContext(HTML5Backend)(function (_ref2) {
  var children = _ref2.children;
  return React.createElement("div", null, children);
});
var stories = storiesOf('Sortable', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement(DNDContextContainer, null, React.createElement("div", {
    id: "root-preview"
  }, story()));
});

var changeHandler = function changeHandler(data) {
  return action('onChange')(data.toJS());
};

stories.add('Normal Sorting', function () {
  return React.createElement(UnwrappedSortable, {
    allowGrouping: _boolean('allowGrouping', false),
    defaultValue: itemsWithoutGroups,
    onChange: changeHandler,
    renderItem: renderItem
  });
}).add('Grouped Sorting', function () {
  return React.createElement(UnwrappedSortable, {
    allowGrouping: _boolean('allowGrouping', true),
    defaultValue: itemsWithGroups,
    onChange: changeHandler,
    renderItem: renderItem
  });
});