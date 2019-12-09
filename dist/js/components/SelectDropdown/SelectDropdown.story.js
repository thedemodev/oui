"use strict";

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var stories = (0, _react2.storiesOf)('SelectDropdown', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
var items = [{
  label: 'Cat',
  description: 'A small feline.',
  value: 'cat'
}, {
  label: 'Dog',
  value: 'dog'
}, {
  label: 'Dog with a really long name',
  value: 'dog-long'
}, {
  label: 'Bear',
  description: 'Likes honey',
  value: 'bear'
}, {
  label: 'Squirrel',
  description: 'Smarter than it looks',
  value: 'squirrel'
}];
stories.add('Default', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    items: items,
    value: 'dog',
    onChange: (0, _addonActions.action)('SelectDropdown value changed')
  }));
}).add('Initial placeholder', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    items: items,
    initialPlaceholder: "Select a value...",
    onChange: (0, _addonActions.action)('SelectDropdown value changed')
  }));
}).add('Width of activator', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    items: items,
    value: 'dog',
    onChange: (0, _addonActions.action)('SelectDropdown value changed'),
    width: '400px '
  }));
}).add('Full Width Activator', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement("div", {
    style: {
      'width': '400px',
      'border': '1px solid',
      'height': '100px'
    }
  }, _react["default"].createElement(_index["default"], {
    items: items,
    value: 'dog',
    onChange: (0, _addonActions.action)('SelectDropdown value changed'),
    fullWidth: true
  })));
}).add('Specify max width of activator', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("p", {
    className: "push--bottom"
  }, "Specifying the ", _react["default"].createElement("code", null, "maxWidth"), " property allows you to truncate longer dropdowns while keeping shorter ones short."), _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    items: items,
    value: 'dog-long',
    onChange: (0, _addonActions.action)('SelectDropdown value changed'),
    maxWidth: '120px '
  }), _react["default"].createElement("div", {
    className: "push--left"
  }), _react["default"].createElement(_index["default"], {
    items: items,
    value: 'dog',
    onChange: (0, _addonActions.action)('SelectDropdown value changed'),
    maxWidth: '120px '
  })));
}).add('Display Error', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    items: items,
    displayError: true,
    value: 'bear',
    onChange: (0, _addonActions.action)('SelectDropdown value changed')
  }));
}).add('Width of dropdown', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    items: items,
    value: 'dog',
    onChange: (0, _addonActions.action)('SelectDropdown value changed'),
    minDropdownWidth: '400px '
  }));
}).add('Disabled', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    items: items,
    value: 'dog',
    minDropdownWidth: '400px ',
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', true),
    onChange: (0, _addonActions.action)('SelectDropdown value changed')
  }));
}).add('ActivatorLabel', function () {
  var itemsWithActivatorLabel = [{
    activatorLabel: 'Production',
    label: 'Production (50%)',
    value: 'Production'
  }, {
    activatorLabel: 'Staging',
    label: 'Staging (100%)',
    value: 'Staging'
  }];
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    items: itemsWithActivatorLabel,
    value: "Production",
    onChange: (0, _addonActions.action)('SelectDropdown value changed')
  }));
});

var Container = _styledComponents["default"].div(_templateObject());