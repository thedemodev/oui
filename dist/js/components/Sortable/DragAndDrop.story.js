"use strict";

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = _interopRequireDefault(require("react-dnd-html5-backend"));

var _addonKnobs = require("@storybook/addon-knobs");

var _react2 = require("@storybook/react");

var _Token = _interopRequireDefault(require("../Token"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  return connectDragSource(_react["default"].createElement("div", null, _react["default"].createElement(_Token["default"], {
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


var DNDContextContainer = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend["default"])(function (_ref2) {
  var children = _ref2.children;
  return _react["default"].createElement("div", null, children);
});
var stories = (0, _react2.storiesOf)('Sortable', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement(DNDContextContainer, null, _react["default"].createElement("div", {
    id: "root-preview"
  }, story()));
});

var changeHandler = function changeHandler(data) {
  return (0, _addonActions.action)('onChange')(data.toJS());
};

stories.add('Normal Sorting', function () {
  return _react["default"].createElement(_index.UnwrappedSortable, {
    allowGrouping: (0, _addonKnobs["boolean"])('allowGrouping', false),
    defaultValue: itemsWithoutGroups,
    onChange: changeHandler,
    renderItem: renderItem
  });
}).add('Grouped Sorting', function () {
  return _react["default"].createElement(_index.UnwrappedSortable, {
    allowGrouping: (0, _addonKnobs["boolean"])('allowGrouping', true),
    defaultValue: itemsWithGroups,
    onChange: changeHandler,
    renderItem: renderItem
  });
});