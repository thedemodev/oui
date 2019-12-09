"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _index2 = _interopRequireDefault(require("../../OverlayWrapper/index"));

var _Button = _interopRequireDefault(require("../../Button"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-key */
var mockFunction = function mockFunction() {};

var _default = [{
  examples: [_react["default"].createElement(_index["default"], null, _react["default"].createElement(_index["default"].Category, {
    header: "Recent Pages"
  }, _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Home"), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Shopping Cart"), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Order Confirmation")))]
}, {
  examples: [_react["default"].createElement(_index["default"], null, _react["default"].createElement(_index["default"].Category, {
    header: _react["default"].createElement("div", {
      className: "flex"
    }, _react["default"].createElement("div", {
      className: "flex--1"
    }, "Attic & Button"), _react["default"].createElement("div", null, _react["default"].createElement("a", {
      href: "https://www.example.com/"
    }, "https://www.example.com/")))
  }, _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Home"), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Shopping Cart"), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Order Confirmation")))]
}, {
  examples: [_react["default"].createElement(_index["default"], null, _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "onClick Example")), _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, {
    href: "https://www.optimizely.com/",
    hrefTarget: "_blank"
  }, "href Example")), _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, _react["default"].createElement("div", {
    className: "flex flex-align--center"
  }, _react["default"].createElement("div", {
    className: "flex--1"
  }, _react["default"].createElement("div", null, "Complex Item"), _react["default"].createElement("div", {
    className: "muted micro"
  }, "This is the item description.")), _react["default"].createElement(_Button["default"], {
    size: "small",
    style: "outline"
  }, "Inner Button")))), _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, null, "Plain Text Example")))]
}, {
  examples: [_react["default"].createElement(_index["default"], null, _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Archive"), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Pause")), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "View Results"))]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    hasBorder: false
  }, _react["default"].createElement(_index["default"].Category, null, _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Archive"), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Pause")), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "View Results"))]
}, {
  examples: [_react["default"].createElement(_index2["default"], {
    overlay: _react["default"].createElement(_index["default"], null, _react["default"].createElement(_index["default"].Item, {
      onClick: mockFunction
    }, "Archive"), _react["default"].createElement(_index["default"].Item, {
      onClick: mockFunction
    }, "Pause"), _react["default"].createElement(_index["default"].Item, {
      onClick: mockFunction
    }, "View Results")),
    horizontalAttachment: "left",
    horizontalTargetAttachment: "left",
    verticalAttachment: "top",
    verticalTargetAttachment: "bottom"
  }, _react["default"].createElement(_Button["default"], {
    style: "unstyled"
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: "ellipsis"
  })))]
}, {
  examples: [_react["default"].createElement(_index["default"], null, _react["default"].createElement(_index["default"].Category, {
    header: "Recent Pages"
  }, _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus nulla, placerat at semper in, bibendum in lorem. Aenean rhoncus ac lectus et rutrum. Sed et arcu sit amet leo maximus facilisis quis non augue. Nullam enim sem, hendrerit id sapien ac, rhoncus hendrerit tortor. Proin id elit elementum, iaculis est vitae, ullamcorper neque. Proin efficitur porttitor nunc quis suscipit. Maecenas odio elit, varius et aliquam ac."), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "https://wwww.example.com/path1/path2/path3/path4/path5/superlongvaluethatdoesntfitintheblocklistwhenitgetsveryveryveryveryveryveryveryveryverylong")))]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    maxHeight: '150px'
  }, _react["default"].createElement(_index["default"].Category, {
    header: "BlockList with Scroll"
  }, _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), _react["default"].createElement(_index["default"].Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet.")))]
}];
exports["default"] = _default;