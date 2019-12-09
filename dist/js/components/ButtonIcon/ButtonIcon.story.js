"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _index = _interopRequireDefault(require("./index.js"));

var _Container = _interopRequireDefault(require("../Layout/Container"));

var _Row = _interopRequireDefault(require("../Layout/Row"));

var _Col = _interopRequireDefault(require("../Layout/Col"));

var _index2 = require("../../tokens/forimport/index.es");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('ButtonIcon', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, _react["default"].createElement(_Container["default"], {
    paddedContent: "around"
  }, story()));
});
stories.add('Default', function () {
  return _react["default"].createElement(_Row["default"], {
    style: {
      background: "".concat(_index2.smokeLight)
    },
    displayVertical: true
  }, _react["default"].createElement(_Col["default"], {
    small: "auto"
  }, _react["default"].createElement(_index["default"], {
    iconName: "arrow-left",
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    onClick: (0, _addonActions.action)('I have been clicked'),
    title: "Previous",
    size: (0, _addonKnobs.select)('size', {
      'small': 'small',
      'medium': 'medium',
      'large': 'large'
    }, 'small')
  }), _react["default"].createElement("span", {
    className: "push--left"
  }, "Default (no style prop applied)")), _react["default"].createElement(_Col["default"], {
    small: "auto"
  }, _react["default"].createElement(_index["default"], {
    iconName: "arrow-right",
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    onClick: (0, _addonActions.action)('I have been clicked'),
    size: (0, _addonKnobs.select)('size', {
      'small': 'small',
      'medium': 'medium',
      'large': 'large'
    }, 'small'),
    style: "highlight",
    title: "Next"
  }), _react["default"].createElement("span", {
    className: "push--left"
  }, "Highlight")), _react["default"].createElement(_Col["default"], {
    small: "auto"
  }, _react["default"].createElement(_index["default"], {
    iconName: "close",
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    onClick: (0, _addonActions.action)('I have been clicked'),
    size: (0, _addonKnobs.select)('size', {
      'small': 'small',
      'medium': 'medium',
      'large': 'large'
    }, 'small'),
    style: "outline",
    title: "Close Dialog"
  }), _react["default"].createElement("span", {
    className: "push--left"
  }, "Outline")), _react["default"].createElement(_Col["default"], {
    small: "auto"
  }, _react["default"].createElement(_index["default"], {
    iconName: "add",
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    onClick: (0, _addonActions.action)('I have been clicked'),
    size: (0, _addonKnobs.select)('size', {
      'small': 'small',
      'medium': 'medium',
      'large': 'large'
    }, 'small'),
    style: "danger",
    title: "Add row"
  }), _react["default"].createElement("span", {
    className: "push--left"
  }, "Danger")), _react["default"].createElement(_Col["default"], {
    small: "auto"
  }, _react["default"].createElement(_index["default"], {
    iconName: "minus",
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    onClick: (0, _addonActions.action)('I have been clicked'),
    size: (0, _addonKnobs.select)('size', {
      'small': 'small',
      'medium': 'medium',
      'large': 'large'
    }, 'small'),
    style: "danger-outline",
    title: "delete row"
  }), _react["default"].createElement("span", {
    className: "push--left"
  }, "Danger-outline")), _react["default"].createElement(_Col["default"], {
    small: "auto"
  }, _react["default"].createElement(_index["default"], {
    iconName: "ellipsis",
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    onClick: (0, _addonActions.action)('I have been clicked'),
    size: (0, _addonKnobs.select)('size', {
      'small': 'small',
      'medium': 'medium',
      'large': 'large'
    }, 'small'),
    style: "plain",
    title: "More options"
  }), _react["default"].createElement("span", {
    className: "push--left"
  }, "Plain")));
});