"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonInfo = require("@storybook/addon-info");

var _ListGroup = _interopRequireDefault(require("../ListGroup"));

var _Input = _interopRequireDefault(require("../Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var stories = (0, _react2.storiesOf)('ListGroup', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator((0, _addonInfo.withInfo)(infoAddonConfig)).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  var theTitle = (0, _addonKnobs.text)('The Main Title', 'Hello World!');
  var itemDensity = (0, _addonKnobs.select)('item.density', {
    'loose': 'loose',
    'tight': 'tight'
  }, 'loose');
  var theSubtitle = (0, _addonKnobs.text)('The Subtitle', 'What if it runs really long and could break into several lines...');
  var demoArray = (0, _addonKnobs.object)('demoArray (example knob, not a prop)', [{
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
  return _react["default"].createElement(_ListGroup["default"], {
    title: theTitle,
    subtitle: theSubtitle
  }, demoArray.map(function (item) {
    return _react["default"].createElement(_ListGroup["default"].Item, {
      key: item.value,
      density: item.density || itemDensity
    }, item.name, _react["default"].createElement("br", null), _react["default"].createElement("span", {
      className: "muted"
    }, item.value));
  }));
}).add('ListGroup density tight', function () {
  return _react["default"].createElement(_ListGroup["default"], {
    title: "ListGroup Title",
    subtitle: "ListGroup Subtitle"
  }, _react["default"].createElement(_ListGroup["default"].Item, null, _react["default"].createElement(_Input["default"], {
    placeholder: "Plain Input inside <ListGroup>",
    type: "text"
  })), _react["default"].createElement(_ListGroup["default"].Item, null, _react["default"].createElement(_Input["default"], {
    placeholder: "Plain Input inside <ListGroup>",
    type: "text"
  })), _react["default"].createElement(_ListGroup["default"].Item, null, _react["default"].createElement(_Input["default"], {
    placeholder: "Plain Input inside <ListGroup>",
    type: "text"
  })), _react["default"].createElement(_ListGroup["default"].Item, {
    density: (0, _addonKnobs.select)('Density (4th item)', {
      'loose': 'loose',
      'tight': 'tight'
    }, 'tight')
  }, _react["default"].createElement(_Input["default"], {
    placeholder: "Plain Input inside <ListGroup density=tight> (try the density knob!)",
    type: "text"
  })), _react["default"].createElement(_ListGroup["default"].Item, null, _react["default"].createElement(_Input["default"], {
    placeholder: "Plain Input inside <ListGroup>",
    type: "text"
  })), _react["default"].createElement(_ListGroup["default"].Item, null, _react["default"].createElement(_Input["default"], {
    placeholder: "Plain Input inside <ListGroup>",
    type: "text"
  })));
});