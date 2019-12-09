import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, object, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import ListGroup from '../ListGroup';
import Input from '../Input';
/**
 * This is a clone of the contents of README.md,
 * temporarily inlined due to Storybook Issue #3458 (see below)
 *
 * TODO(https://github.com/storybooks/storybook/issues/3458) Remove and use imported README.md #3458 is released and we've updated
 * TODO(https://github.com/storybooks/storybook/issues/4499) Find a way to improve markdown formatting in the "Show Info" section
 */

/* eslint-disable max-len */

var infoAddonConfig = {
  header: false,
  text: "\n# ListGroup Component\n.\n## ABOUT:\nThis simple layout component is used on various settings pages throughout the app to display a media-block style two column layout. The title and optional subtitle are the first column, the second column made up of a series of vertically stacked <ListGroup.Item>s which get a border between each item.\n.\nUse one <ListGroup.Item> per single setting or a logical grouping of a few related settings.\n"
};
/* eslint-enable max-len */

var stories = storiesOf('ListGroup', module);
stories.addDecorator(withKnobs).addDecorator(withInfo(infoAddonConfig)).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  var theTitle = text('The Main Title', 'Hello World!');
  var itemDensity = select('item.density', {
    'loose': 'loose',
    'tight': 'tight'
  }, 'loose');
  var theSubtitle = text('The Subtitle', 'What if it runs really long and could break into several lines...');
  var demoArray = object('demoArray (example knob, not a prop)', [{
    name: 'ListGroup.Item Text 1',
    value: 'Value 1'
  }, {
    name: 'ListGroup.Item Text 2',
    value: 'Value 2'
  }, {
    name: 'ListGroup.Item Text 3 (density=tight)',
    value: 'Value 3',
    density: 'tight'
  }, {
    name: 'ListGroup.Item Text 4',
    value: 'Value 4'
  }, {
    name: 'ListGroup.Item Text 5',
    value: 'Value 5'
  }, {
    name: 'ListGroup.Item Text 6',
    value: 'Value 6'
  }]);
  return React.createElement(ListGroup, {
    title: theTitle,
    subtitle: theSubtitle
  }, demoArray.map(function (item) {
    return React.createElement(ListGroup.Item, {
      key: item.value,
      density: item.density || itemDensity
    }, item.name, React.createElement("br", null), React.createElement("span", {
      className: "muted"
    }, item.value));
  }));
}).add('ListGroup density tight', function () {
  return React.createElement(ListGroup, {
    title: "ListGroup Title",
    subtitle: "ListGroup Subtitle"
  }, React.createElement(ListGroup.Item, null, React.createElement(Input, {
    placeholder: "Plain Input inside <ListGroup>",
    type: "text"
  })), React.createElement(ListGroup.Item, null, React.createElement(Input, {
    placeholder: "Plain Input inside <ListGroup>",
    type: "text"
  })), React.createElement(ListGroup.Item, null, React.createElement(Input, {
    placeholder: "Plain Input inside <ListGroup>",
    type: "text"
  })), React.createElement(ListGroup.Item, {
    density: select('Density (4th item)', {
      'loose': 'loose',
      'tight': 'tight'
    }, 'tight')
  }, React.createElement(Input, {
    placeholder: "Plain Input inside <ListGroup density=tight> (try the density knob!)",
    type: "text"
  })), React.createElement(ListGroup.Item, null, React.createElement(Input, {
    placeholder: "Plain Input inside <ListGroup>",
    type: "text"
  })), React.createElement(ListGroup.Item, null, React.createElement(Input, {
    placeholder: "Plain Input inside <ListGroup>",
    type: "text"
  })));
});