"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _OverlayWrapper = _interopRequireDefault(require("../OverlayWrapper"));

var _Popover = _interopRequireDefault(require("../Popover"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var alignOpts = {
  'center': 'center',
  'left': 'left',
  'right': 'right'
};
var verticalAlignOpts = {
  'middle': 'middle',
  'top': 'top',
  'bottom': 'bottom'
};

var ClosePopoverButton = function ClosePopoverButton(props, context) {
  return _react["default"].createElement(_Button["default"], {
    onClick: context.hideOverlay
  }, "Close Popopver");
};

var stories = (0, _react2.storiesOf)('OverlayWrapper', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, _react["default"].createElement("div", {
    className: "flexboxCenter"
  }, story()));
});
stories.add('Default popover', function () {
  return _react["default"].createElement(_OverlayWrapper["default"], {
    behavior: "click",
    horizontalAttachment: (0, _addonKnobs.select)('horizontalAttachment', alignOpts, 'center'),
    overlay: _react["default"].createElement(_Popover["default"], {
      title: "Lorem ipsum dolor sit amet"
    }, _react["default"].createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!")),
    shouldHideOnClick: (0, _addonKnobs["boolean"])('shouldHideOnClick', true),
    verticalAttachment: (0, _addonKnobs.select)('verticalAttachment', verticalAlignOpts, 'top')
  }, _react["default"].createElement(_Button["default"], {
    width: "default"
  }, "Open Popover"));
}).add('Pinned popover', function () {
  return _react["default"].createElement(_OverlayWrapper["default"], {
    behavior: "click",
    horizontalAttachment: "left",
    horizontalTargetAttachment: "right",
    isConstrainedToScreen: true,
    overlay: _react["default"].createElement(_Popover["default"], {
      title: "Lorem ipsum dolor sit amet"
    }, _react["default"].createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"), _react["default"].createElement(ClosePopoverButton, null)),
    shouldHideOnClick: true,
    verticalAttachment: "middle",
    verticalTargetAttachment: "middle"
  }, _react["default"].createElement(_Button["default"], {
    width: "default"
  }, "Open Pinned Popover"));
}).add('Open on hover', function () {
  return _react["default"].createElement(_OverlayWrapper["default"], {
    behavior: "hover",
    horizontalAttachment: (0, _addonKnobs.select)('horizontalAttachment', alignOpts, 'center'),
    overlay: _react["default"].createElement(_Popover["default"], {
      title: "Lorem ipsum dolor sit amet"
    }, _react["default"].createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!")),
    verticalAttachment: (0, _addonKnobs.select)('verticalAttachment', verticalAlignOpts, 'top')
  }, _react["default"].createElement(_Button["default"], {
    width: "default"
  }, "Open Popover"));
}).add('Trying diff components', function () {
  return _react["default"].createElement(_OverlayWrapper["default"], {
    behavior: "hover",
    horizontalAttachment: (0, _addonKnobs.select)('horizontalAttachment', alignOpts, 'center'),
    overlay: _react["default"].createElement("div", null, "this is a box to try"),
    verticalAttachment: (0, _addonKnobs.select)('verticalAttachment', verticalAlignOpts, 'top')
  }, _react["default"].createElement(_Button["default"], {
    width: "default"
  }, "Open Popover"));
});