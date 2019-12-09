"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ButtonRow = _interopRequireDefault(require("../ButtonRow"));

var _CloseButton = _interopRequireDefault(require("../CloseButton"));

var _Attention = _interopRequireDefault(require("../Attention"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sheet = function Sheet(props) {
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
    className: "oui-sheet__wrapper"
  }, _react["default"].createElement("div", {
    className: "oui-sheet__overlay"
  }), _react["default"].createElement("div", {
    "data-oui-component": true,
    className: "oui-sheet overflow-y--auto",
    "data-test-section": props.testSection
  }, props.hasCloseButton && _react["default"].createElement(_CloseButton["default"], {
    onClick: props.onClose,
    size: "large"
  }), props.warningContent && _react["default"].createElement("div", {
    className: "oui-sheet__warning"
  }, _react["default"].createElement(_Attention["default"], {
    alignment: "center",
    type: "warning",
    testSection: props.warningTestSection
  }, props.warningContent)), _react["default"].createElement("header", {
    className: "oui-sheet__header"
  }, _react["default"].createElement("h2", {
    className: "flush--bottom"
  }, props.title), subtitleContent), _react["default"].createElement("div", {
    className: "oui-sheet__body"
  }, props.children), _react["default"].createElement("footer", {
    className: "oui-sheet__footer"
  }, _react["default"].createElement(_ButtonRow["default"], {
    rightGroup: props.footerButtonList
  }))));
};

Sheet.propTypes = {
  /**
   *  The body of the sheet to request information and data from the user.
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * Array of buttons used in the footer of the sheet.
   */
  footerButtonList: _propTypes["default"].array.isRequired,

  /**
   *  Used to determine if the sheet should have a close button.
   */
  hasCloseButton: _propTypes["default"].bool,

  /**
   * Function to perform when the sheet is closed.
   */
  onClose: _propTypes["default"].func,

  /**
   * A subtitle for the sheet.
   */
  subtitle: _propTypes["default"].node || _propTypes["default"].string,

  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: _propTypes["default"].string,

  /**
   * Main title of the sheet.
   */
  title: _propTypes["default"].string.isRequired,

  /**
   * Content of the warning Attention bar.
   */
  warningContent: _propTypes["default"].string,

  /**
   * Identifier used to create data-test-section
   * attribute for the Attention bar.
   */
  warningTestSection: _propTypes["default"].string
};
Sheet.defaultProps = {
  hasCloseButton: true,
  onClose: function onClose() {},
  subtitle: '',
  testSection: '',
  warningTestSection: ''
};
var _default = Sheet;
exports["default"] = _default;