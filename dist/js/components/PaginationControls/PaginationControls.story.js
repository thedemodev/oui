"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('PaginationControls', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, _react["default"].createElement("p", {
    className: "push-quad--bottom"
  }, "Use the ", _react["default"].createElement("strong", null, "currentPage"), " knob to see the various states of the PaginationControls."), story());
});
var totalPages = 43;
stories.add('Default', function () {
  return _react["default"].createElement(_index["default"], {
    currentPage: (0, _addonKnobs.number)('currentPage', 1),
    totalPages: (0, _addonKnobs.number)('totalPages', totalPages),
    goToPage: (0, _addonActions.action)('page changed')
  });
}).add('Loading', function () {
  return _react["default"].createElement(_index["default"], {
    currentPage: (0, _addonKnobs.number)('currentPage', 1),
    totalPages: (0, _addonKnobs.number)('totalPages', totalPages),
    goToPage: (0, _addonActions.action)('page changed'),
    isLoading: (0, _addonKnobs["boolean"])('isLoading', true)
  });
}).add('Customize totalSlots', function () {
  return _react["default"].createElement(_index["default"], {
    currentPage: (0, _addonKnobs.number)('currentPage', 20),
    totalSlots: (0, _addonKnobs.number)('totalSlots ( >= 7)', 11),
    totalPages: (0, _addonKnobs.number)('totalPages', totalPages),
    goToPage: (0, _addonActions.action)('page changed')
  });
});