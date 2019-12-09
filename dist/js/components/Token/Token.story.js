"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

var _preview = require("@storybook/addon-actions/dist/preview");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styleOptions = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Error: 'error'
};
var stories = (0, _react2.storiesOf)('Token', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('default', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    isDismissible: true,
    name: "Hello",
    style: (0, _addonKnobs.select)('style', styleOptions, 'primary'),
    hasSnugWrap: (0, _addonKnobs["boolean"])('hasSnugWrap', false)
  }), _react["default"].createElement(_index["default"], {
    name: "World",
    style: "secondary",
    hasSnugWrap: (0, _addonKnobs["boolean"])('hasSnugWrap', false)
  }));
}).add('no well', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    name: "Hello",
    style: "primary",
    showWell: false,
    hasSnugWrap: (0, _addonKnobs["boolean"])('hasSnugWrap', false)
  }), _react["default"].createElement(_index["default"], {
    name: "World",
    style: "secondary",
    showWell: false,
    hasSnugWrap: (0, _addonKnobs["boolean"])('hasSnugWrap', false)
  }));
}).add('draggable', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "push--bottom"
  }, _react["default"].createElement(_index["default"], {
    description: "The big kids.",
    isDismissible: true,
    isDraggable: true,
    name: "Students: Grades 6-12",
    onDismiss: (0, _preview.action)('token dismissed'),
    order: 1,
    style: "primary"
  })), _react["default"].createElement("div", {
    className: "push--bottom"
  }, _react["default"].createElement(_index["default"], {
    description: "The little kids.",
    isDismissible: true,
    isDraggable: true,
    name: "Students: Grades K-5",
    onDismiss: (0, _preview.action)('token dismissed'),
    order: 1,
    style: "secondary"
  })), _react["default"].createElement("div", {
    className: "push--bottom"
  }, _react["default"].createElement(_index["default"], {
    description: "The little little kids.",
    isDismissible: true,
    isDraggable: true,
    name: "Students: TK",
    onDismiss: (0, _preview.action)('token dismissed'),
    order: 1,
    style: "secondary"
  })));
}).add('dismissible', function () {
  return _react["default"].createElement(_index["default"], {
    isDismissible: true,
    name: "Delete me!",
    style: "primary",
    onDismiss: (0, _preview.action)('token dismissed'),
    hasSnugWrap: (0, _addonKnobs["boolean"])('hasSnugWrap', false)
  });
}).add('full width', function () {
  return _react["default"].createElement(_index["default"], {
    hasSnugWrap: (0, _addonKnobs["boolean"])('hasSnugWrap', false),
    isDismissible: (0, _addonKnobs["boolean"])('isDismissible', true),
    isFullWidth: (0, _addonKnobs["boolean"])('isFullWidth', true),
    name: "I'm full width!",
    onDismiss: (0, _preview.action)('token dismissed'),
    showWell: (0, _addonKnobs["boolean"])('showWell', false),
    style: "primary"
  });
});