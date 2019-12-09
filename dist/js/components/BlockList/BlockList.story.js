"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

var _Button = _interopRequireDefault(require("../Button"));

var _Token = _interopRequireDefault(require("../Token"));

var _OverlayWrapper = _interopRequireDefault(require("../OverlayWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('BlockList', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Blocklist with knobs', function () {
  var guttersValue = (0, _addonKnobs.select)('gutters', ['loose', 'tight'], 'loose');
  var hrefValue = (0, _addonKnobs.text)('href', 'https://www.optimizely.com');
  var hrefTargetValue = (0, _addonKnobs.select)('hrefTarget', ['_self', '_blank'], '_blank');
  var hrefTitleValue = (0, _addonKnobs.text)('hrefTitle', 'Optimizely');
  var isDisabledValue = (0, _addonKnobs["boolean"])('isDisabled', false);
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    hasBorder: true
  }, _react["default"].createElement(_index["default"].Category, {
    header: "Recent Pages"
  }, _react["default"].createElement(_index["default"].Item, {
    gutters: guttersValue,
    href: hrefValue,
    hrefTarget: hrefTargetValue,
    hrefTitle: hrefTitleValue,
    isDisabled: isDisabledValue
  }, "Home"), _react["default"].createElement(_index["default"].Item, {
    gutters: guttersValue,
    href: hrefValue,
    hrefTarget: hrefTargetValue,
    hrefTitle: hrefTitleValue,
    isDisabled: isDisabledValue
  }, "Shopping Cart"), _react["default"].createElement(_index["default"].Item, {
    gutters: guttersValue,
    href: hrefValue,
    hrefTarget: hrefTargetValue,
    hrefTitle: hrefTitleValue,
    isDisabled: isDisabledValue
  }, "Order Confirmation"))));
}).add('Blocklist with border', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    hasBorder: true
  }, _react["default"].createElement(_index["default"].Category, {
    header: "Recent Pages"
  }, _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('click blocklist item home')
  }, "Home"), _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('click blocklist item shopping cart')
  }, "Shopping Cart"), _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('click blocklist item order confirmation')
  }, "Order Confirmation"))));
}).add('Blocklist with target link', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    hasBorder: true
  }, _react["default"].createElement(_index["default"].Category, {
    header: _react["default"].createElement("div", {
      className: "flex"
    }, _react["default"].createElement("div", {
      className: "flex--1"
    }, "Attic & Button"), _react["default"].createElement("div", null, _react["default"].createElement("a", {
      href: "https://www.example.com/"
    }, "https://www.example.com/")))
  }, _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('clicked ')
  }, "Home"), _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('clicked ')
  }, "Shopping Cart"), _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('clicked ')
  }, "Order Confirmation"))));
}).add('Blocklist with inner button', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    hasBorder: true
  }, _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('click on example')
  }, " onClick Example")), _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, {
    href: "https://www.optimizely.com/",
    hrefTarget: "_blank"
  }, "href Example")), _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('click on complex item')
  }, _react["default"].createElement("div", {
    className: "flex flex-align--center"
  }, _react["default"].createElement("div", {
    className: "flex--1"
  }, _react["default"].createElement("div", null, "Complex Item"), _react["default"].createElement("div", {
    className: "muted micro"
  }, "This is the item description.")), _react["default"].createElement(_Button["default"], {
    size: "small",
    style: "outline",
    width: "default"
  }, "Inner Button")))), _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, null, "Plain Text Example"))));
}).add('Results with border', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    hasBorder: true
  }, _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('clicked Archive link')
  }, "Archive"), _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('clicked Pause link')
  }, "Pause")), _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('clicked on results')
  }, "View Results")));
}).add('Results with no border', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    hasBorder: false
  }, _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('clicked on Archive')
  }, "Archive"), _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('clicked on Pause')
  }, "Pause")), _react["default"].createElement(_index["default"].Item, {
    onClick: (0, _addonActions.action)('clicked on Results')
  }, "View Results")));
}).add('Three dots', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_OverlayWrapper["default"], {
    behavior: "click",
    horizontalAttachment: "left",
    horizontalTargetAttachment: "left",
    overlay: _react["default"].createElement(_index["default"], {
      hasBorder: true
    }, _react["default"].createElement(_index["default"].Item, null, "Archive"), _react["default"].createElement(_index["default"].Item, null, "Pause"), _react["default"].createElement(_index["default"].Item, null, "View Results")),
    shouldHideOnClick: true,
    verticalAttachment: "top",
    verticalTargetAttachment: "bottom"
  }, _react["default"].createElement(_Button["default"], {
    style: "unstyled",
    width: "default"
  }, "...")));
}).add('With text', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    hasBorder: true
  }, _react["default"].createElement(_index["default"].Category, {
    header: "Recent Pages"
  }, _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus nulla, placerat at semper in, bibendum in lorem. Aenean rhoncus ac lectus et rutrum. Sed et arcu sit amet leo maximus facilisis quis non augue. Nullam enim sem, hendrerit id sapien ac, rhoncus hendrerit tortor. Proin id elit elementum, iaculis est vitae, ullamcorper neque. Proin efficitur porttitor nunc quis suscipit. Maecenas odio elit, varius et aliquam ac."), _react["default"].createElement(_index["default"].Item, null, "https://wwww.example.com/path1/path2/path3/path4/path5/superlongvaluethatdoesntfitintheblocklistwhenitgetsveryveryveryveryveryveryveryveryverylong"))));
}).add('With scroll', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    hasBorder: true,
    maxHeight: "150px"
  }, _react["default"].createElement(_index["default"].Category, {
    header: "BlockList with Scroll"
  }, _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, null, "Lorem ipsum dolor sit amet."))));
}).add('Blocklist with no side padding on items', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    hasBorder: false
  }, _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, {
    gutters: "tight"
  }, _react["default"].createElement(_Token["default"], {
    name: "Global shoppers"
  }))), _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, {
    gutters: "tight"
  }, _react["default"].createElement(_Token["default"], {
    name: "Cold weather"
  }))), _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, {
    gutters: "tight"
  }, _react["default"].createElement(_Token["default"], {
    name: "Puppies"
  })))));
});