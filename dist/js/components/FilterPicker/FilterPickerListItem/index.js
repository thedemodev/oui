"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

var _Button = _interopRequireDefault(require("../../Button"));

var _BlockList = _interopRequireDefault(require("../../BlockList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ListItem(_ref) {
  var buttonText = _ref.buttonText,
      description = _ref.description,
      id = _ref.id,
      name = _ref.name,
      onButtonClick = _ref.onButtonClick,
      _onClick = _ref.onClick,
      testSection = _ref.testSection,
      hasFauxFocus = _ref.hasFauxFocus;
  return _react["default"].createElement(_BlockList["default"].Item, {
    hasFauxFocus: hasFauxFocus,
    onClick: function onClick(event) {
      return _onClick(event, id, name, description);
    } // eslint-disable-line react/jsx-no-bind
    ,
    testSection: testSection
  }, _react["default"].createElement("div", {
    className: "flex flex-align--center"
  }, _react["default"].createElement("div", {
    className: "push--right flex"
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: "add"
  })), _react["default"].createElement("div", {
    className: (0, _classnames["default"])('flex--1', {
      'push-half--ends': !description
    })
  }, _react["default"].createElement("div", null, name), !!description && _react["default"].createElement("div", {
    className: "muted micro"
  }, description)), !!buttonText && !!onButtonClick && _react["default"].createElement(_Button["default"], {
    size: "tiny",
    style: "outline",
    width: "default",
    onClick: function onClick(event) {
      // eslint-disable-line react/jsx-no-bind
      // Prevent the outer Blocklist.Item's onClick from being called
      event.stopPropagation();
      onButtonClick(event, id, name, description);
    }
  }, buttonText)));
}

ListItem.propTypes = {
  /* Optional Button text - must be present for optional button to show up */
  buttonText: _propTypes["default"].string,

  /* Description of ListItem */
  description: _propTypes["default"].string,

  /* Boolean to set faux focus of a list item */
  hasFauxFocus: _propTypes["default"].bool,

  /* ID used to pass into functions calls */
  id: _propTypes["default"].number,

  /* Name of entity */
  name: _propTypes["default"].string.isRequired,

  /**
   * Optional function, intentionally not in defaultProps
   *  - Secondary function for additional action (e.g. "View entity")
   *  - Called with the following arguments: event, id, name, description
   **/
  onButtonClick: _propTypes["default"].func,

  /*
   * Primary function that is called with the following arguments:
   * - event, id, name, description
   **/
  onClick: _propTypes["default"].func.isRequired,

  /* String value for the outermost container's data-test-section attribute */
  testSection: _propTypes["default"].string
};
ListItem.defaultProps = {
  buttonText: '',
  description: '',
  hasFauxFocus: false,
  id: 0,
  testSection: ''
};
var _default = ListItem;
exports["default"] = _default;