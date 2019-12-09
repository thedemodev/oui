"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DialogNew = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ButtonRow = _interopRequireDefault(require("../ButtonRow"));

var _CloseButton = _interopRequireDefault(require("../CloseButton"));

var _Fieldset = _interopRequireDefault(require("../Fieldset"));

var _Footer = _interopRequireDefault(require("./Deprecated/Footer"));

var _Title = _interopRequireDefault(require("./Deprecated/Title"));

var _Wrapper = _interopRequireDefault(require("./Deprecated/Wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DialogNew = function DialogNew(props) {
  var subtitleContent;

  if (props.subtitle && typeof props.subtitle === 'string') {
    subtitleContent = _react["default"].createElement("p", {
      className: "push--top flush--bottom"
    }, props.subtitle);
  } else {
    subtitleContent = _react["default"].createElement("div", {
      className: "push--top flush--bottom"
    }, props.subtitle);
  }

  return _react["default"].createElement("div", {
    className: "oui-dialog__wrapper"
  }, props.hasOverlay && _react["default"].createElement("div", {
    className: "oui-dialog__overlay"
  }), _react["default"].createElement("div", {
    "data-oui-component": true,
    className: "oui-dialog",
    "data-test-section": props.testSection
  }, props.hasCloseButton && _react["default"].createElement(_CloseButton["default"], {
    onClick: props.onClose,
    size: "medium"
  }), _react["default"].createElement("header", {
    className: "oui-dialog__header"
  }, _react["default"].createElement("h2", {
    className: "flush--bottom"
  }, props.title), subtitleContent), _react["default"].createElement("div", {
    className: "oui-dialog__body overflow-y--auto"
  }, props.children), _react["default"].createElement("footer", {
    className: "oui-dialog__footer-container"
  }, _react["default"].createElement(_ButtonRow["default"], {
    rightGroup: props.footerButtonList
  }))));
};

exports.DialogNew = DialogNew;
DialogNew.propTypes = {
  /**
   * The body of the dialog to request minimal information from the user.
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * Array of buttons used in the footer of the dialog.
   */
  footerButtonList: _propTypes["default"].array.isRequired,

  /**
   *  Used to determine if the dialog should have a close button.
   */
  hasCloseButton: _propTypes["default"].bool,

  /**
   * Used to determine if dialog should have a semi
   * transparent overlay behind it.
   */
  hasOverlay: _propTypes["default"].bool,

  /**
   *  Function to perform when the dialog is closed.
   */
  onClose: _propTypes["default"].func,

  /**
   * A subtitle for the dialog.
   */
  subtitle: _propTypes["default"].node || _propTypes["default"].string,

  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: _propTypes["default"].string,

  /**
   * Main title of the dialog.
   */
  title: _propTypes["default"].string.isRequired
};
DialogNew.defaultProps = {
  hasCloseButton: true,
  hasOverlay: true,
  onClose: function onClose() {},
  subtitle: '',
  testSection: ''
};
var Dialog = {
  Fieldset: _Fieldset["default"],
  Footer: _Footer["default"],
  Title: _Title["default"],
  Wrapper: _Wrapper["default"]
};
var _default = Dialog;
exports["default"] = _default;