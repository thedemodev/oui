"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('ButtonRow', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Button row skip step', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    leftGroup: [_react["default"].createElement(_Button["default"], {
      key: "1",
      style: "plain",
      width: "default"
    }, "Skip this step")],
    rightGroup: [_react["default"].createElement(_Button["default"], {
      key: "1",
      style: "plain",
      width: "default"
    }, "Plain Button"), _react["default"].createElement(_Button["default"], {
      key: "2",
      style: "highlight",
      width: "default"
    }, "Highlight Button")]
  }));
}).add('Buttons centered', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    centerGroup: [_react["default"].createElement(_Button["default"], {
      key: "1",
      style: "outline",
      width: "default"
    }, "Center Button"), _react["default"].createElement(_Button["default"], {
      key: "2",
      style: "highlight",
      width: "default"
    }, "Center Button")]
  }));
}).add('Buttons fullwidth', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    centerGroup: [_react["default"].createElement(_Button["default"], {
      key: "1",
      style: "outline",
      width: "full"
    }, "Full Width"), _react["default"].createElement(_Button["default"], {
      key: "2",
      style: "outline",
      width: "full"
    }, "Full Width"), _react["default"].createElement(_Button["default"], {
      key: "3",
      style: "highlight",
      width: "full"
    }, "Full Width")]
  }));
});