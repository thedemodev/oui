"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _ButtonRow = _interopRequireDefault(require("../ButtonRow"));

var _index = _interopRequireDefault(require("./index.js"));

var _Link = _interopRequireDefault(require("../Link"));

var _ArrowsInline = _interopRequireDefault(require("../ArrowsInline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Button', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Knobs', function () {
  return _react["default"].createElement(_index["default"], {
    style: (0, _addonKnobs.select)('style', {
      'highlight': 'highlight',
      'danger': 'danger',
      'danger-outline': 'danger-outline',
      'outline': 'outline',
      'outline-reverse': 'outline-reverse',
      'plain': 'plain',
      'toggle': 'toggle',
      'underline': 'underline',
      'unstyled': 'unstyled'
    }, 'highlight'),
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    isActive: (0, _addonKnobs["boolean"])('isActive', false),
    isLoading: (0, _addonKnobs["boolean"])('isLoading', false),
    width: (0, _addonKnobs.select)('width', {
      'default': 'default',
      'full': 'full'
    }, 'default'),
    size: (0, _addonKnobs.select)('size', {
      'tiny': 'tiny',
      'small': 'small',
      'large': 'large',
      'narrow': 'narrow',
      'tight': 'tight'
    }, 'narrow')
  }, (0, _addonKnobs.text)('customize me!', 'customize me!'));
}).add('All buttons', function () {
  return _react["default"].createElement(_ButtonRow["default"], {
    centerGroup: [_react["default"].createElement(_index["default"], {
      key: "1",
      isActive: (0, _addonKnobs["boolean"])('isActive', false),
      width: "default"
    }, "Button"), _react["default"].createElement(_index["default"], {
      key: "2",
      isActive: (0, _addonKnobs["boolean"])('isActive', false),
      style: "highlight",
      width: "default"
    }, "Highlight"), _react["default"].createElement(_index["default"], {
      key: "3",
      isActive: (0, _addonKnobs["boolean"])('isActive', false),
      style: "danger",
      width: "default"
    }, "Danger"), _react["default"].createElement(_index["default"], {
      key: "4",
      isActive: (0, _addonKnobs["boolean"])('isActive', false),
      style: "danger-outline",
      width: "default"
    }, "Danger Outline"), _react["default"].createElement(_index["default"], {
      key: "5",
      isActive: (0, _addonKnobs["boolean"])('isActive', false),
      style: "outline",
      width: "default"
    }, "Outline"), _react["default"].createElement(_index["default"], {
      key: "6",
      isActive: (0, _addonKnobs["boolean"])('isActive', false),
      style: "plain",
      width: "default"
    }, "Plain"), _react["default"].createElement(_index["default"], {
      key: "7",
      isActive: (0, _addonKnobs["boolean"])('isActive', false),
      style: "toggle",
      width: "default"
    }, "Toggle")]
  });
}).add('Disabled', function () {
  return _react["default"].createElement(_ButtonRow["default"], {
    centerGroup: [_react["default"].createElement(_index["default"], {
      key: "1",
      isDisabled: true,
      width: "default"
    }, "Button"), _react["default"].createElement(_index["default"], {
      key: "2",
      isDisabled: true,
      style: "highlight",
      width: "default"
    }, "Highlight"), _react["default"].createElement(_index["default"], {
      key: "3",
      isDisabled: true,
      style: "danger",
      width: "default"
    }, "Danger"), _react["default"].createElement(_index["default"], {
      key: "4",
      isDisabled: true,
      style: "danger-outline",
      width: "default"
    }, "Danger Outline"), _react["default"].createElement(_index["default"], {
      key: "5",
      isDisabled: true,
      style: "outline",
      width: "default"
    }, "Outline"), _react["default"].createElement(_index["default"], {
      key: "6",
      isDisabled: true,
      style: "plain",
      width: "default"
    }, "Plain"), _react["default"].createElement(_index["default"], {
      key: "7",
      isDisabled: true,
      style: "toggle",
      width: "default"
    }, "Toggle")]
  });
}).add('Underline button', function () {
  return _react["default"].createElement(_index["default"], {
    style: "underline",
    width: "default"
  }, "Underline Button", _react["default"].createElement(_ArrowsInline["default"], {
    direction: "down"
  }));
}).add('Sizes variations', function () {
  return _react["default"].createElement(_ButtonRow["default"], {
    centerGroup: [_react["default"].createElement(_index["default"], {
      key: "1",
      width: "default",
      size: "tiny"
    }, "Tiny Button"), _react["default"].createElement(_index["default"], {
      key: "2",
      width: "default",
      size: "small"
    }, "Small Button"), _react["default"].createElement(_index["default"], {
      key: "3",
      width: "default",
      size: "large"
    }, "Large Button"), _react["default"].createElement(_index["default"], {
      key: "4",
      width: "default",
      size: "narrow"
    }, "Narrow Button"), _react["default"].createElement(_index["default"], {
      key: "5",
      width: "default",
      size: "tight"
    }, "Tight Button")]
  });
}).add('Button without an onClick', function () {
  return _react["default"].createElement(_index["default"], {
    isLink: true
  }, "Faux Button");
}).add('Button without an onClick (disabled)', function () {
  return _react["default"].createElement(_index["default"], {
    isLink: true,
    isDisabled: true
  }, "Faux Button");
}).add('Button that looks like a Link', function () {
  return _react["default"].createElement(_index["default"], {
    style: "unstyled",
    onClick: (0, _addonActions.action)('Saying hi!')
  }, _react["default"].createElement(_Link["default"], null, "Say Hi"));
}).add('Button that disables on click', function () {
  return _react["default"].createElement(_index["default"], {
    style: "highlight",
    isLoading: (0, _addonKnobs["boolean"])('isLoading', true),
    onClick: (0, _addonActions.action)('I have been clicked')
  }, "Create Campaign");
}).add('Button that disables on click with custom text', function () {
  return _react["default"].createElement(_index["default"], {
    style: "highlight",
    isLoading: (0, _addonKnobs["boolean"])('isLoading', true),
    loadingText: (0, _addonKnobs.text)('loadingText', 'Creating Campaign'),
    onClick: (0, _addonActions.action)('I have been clicked')
  }, "Create Campaign");
});