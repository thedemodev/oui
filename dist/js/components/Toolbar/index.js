"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Toolbar = function Toolbar(props) {
  var toolbarContentClasses = (0, _classnames["default"])({
    toolbar__content: true,
    'background--white': props.isBottomToolbar,
    'border--top': props.isBottomToolbar,
    'no-border--bottom': props.isBottomToolbar,
    'hard--left': props.isBottomToolbar
  });
  return _react["default"].createElement("div", {
    "data-oui-component": true,
    className: "toolbar",
    "data-test-section": props.testSection
  }, _react["default"].createElement("div", {
    className: toolbarContentClasses
  }, props.children));
};

Toolbar.defaultProps = {
  isBottomToolbar: false
};
Toolbar.propTypes = {
  children: _propTypes["default"].node.isRequired,
  isBottomToolbar: _propTypes["default"].bool,
  testSection: _propTypes["default"].string
};

var Left = function Left(props) {
  return _react["default"].createElement("div", {
    className: "toolbar__left"
  }, props.children);
};

Left.propTypes = {
  children: _propTypes["default"].node.isRequired
};

var Right = function Right(props) {
  return _react["default"].createElement("div", {
    className: "toolbar__right"
  }, props.children);
};

Right.propTypes = {
  children: _propTypes["default"].node.isRequired
};

var ToolbarButtonContents = function ToolbarButtonContents(props) {
  return _react["default"].createElement("div", {
    className: "flex flex-align--center editor__select-size__text"
  }, props.icon && _react["default"].createElement("svg", {
    className: "lego-icon push--right vertical-align--middle"
  }, _react["default"].createElement("use", {
    xlinkHref: props.icon
  })), _react["default"].createElement("div", null, props.title && _react["default"].createElement("div", {
    className: "editor__select-size__value"
  }, props.title), _react["default"].createElement("span", null, props.label)), props.isDropdown && _react["default"].createElement("span", {
    className: "lego-arrow-inline--down push--left"
  }));
};

ToolbarButtonContents.propTypes = {
  icon: _propTypes["default"].string,
  isDropdown: _propTypes["default"].bool,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].node.isRequired]).isRequired,
  title: _propTypes["default"].string
};

var ToolbarLink = function ToolbarLink(props, context) {
  var _classNames;

  return _react["default"].createElement("a", {
    className: (0, _classnames["default"])((_classNames = {
      flex: true,
      toolbar__button: true,
      'is-active': props.isActive
    }, _defineProperty(_classNames, 'link--disabled', props.isDisabled), _defineProperty(_classNames, 'pointer-events--none', props.isDisabled), _classNames)),
    isDisabled: props.isDisabled,
    testSection: props.testSection,
    href: props.href
  }, ToolbarButtonContents(props));
};

ToolbarLink.propTypes = {
  href: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  isActive: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  isDropdown: _propTypes["default"].bool,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].node.isRequired]).isRequired,
  onClick: _propTypes["default"].func,
  testSection: _propTypes["default"].string,
  title: _propTypes["default"].string
};

var ToolbarButton = function ToolbarButton(props, context) {
  return _react["default"].createElement("button", {
    className: (0, _classnames["default"])({
      toolbar__button: true,
      'is-active': props.isActive
    }),
    type: "button",
    disabled: props.isDisabled,
    "data-test-section": props.testSection,
    "data-track-id": props.testSection,
    onClick: props.onClick
  }, ToolbarButtonContents(props));
};

ToolbarButton.propTypes = {
  icon: _propTypes["default"].string,
  isActive: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  isDropdown: _propTypes["default"].bool,
  label: _propTypes["default"].oneOfType([_propTypes["default"].node.isRequired, _propTypes["default"].string.isRequired]).isRequired,
  onClick: _propTypes["default"].func,
  testSection: _propTypes["default"].string,
  title: _propTypes["default"].string
};
ToolbarButton.defaultProps = {
  isDropdown: false,
  isActive: false,
  isDisabled: false
};
Toolbar.Button = ToolbarButton;
Toolbar.Link = ToolbarLink;
Toolbar.Right = Right;
Toolbar.Left = Left;
var _default = Toolbar;
exports["default"] = _default;