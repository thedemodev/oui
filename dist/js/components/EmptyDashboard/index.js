"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EmptyDashboard = function EmptyDashboard(_ref) {
  var button = _ref.button,
      imageHeight = _ref.imageHeight,
      imagePath = _ref.imagePath,
      imageWidth = _ref.imageWidth,
      headline = _ref.headline,
      description = _ref.description,
      descriptionMaxWidth = _ref.descriptionMaxWidth,
      showButtonBelow = _ref.showButtonBelow,
      testSection = _ref.testSection;
  return _react["default"].createElement("div", {
    "data-oui-component": true,
    className: "flex flex--column overflow-y--scroll flex--1",
    "data-test-section": "layers-empty-state"
  }, button && !showButtonBelow && _react["default"].createElement("div", {
    className: "flex push-quad--sides oui-empty-dashboard__button-row flex-justified--end"
  }, button), _react["default"].createElement("div", {
    className: "anchor--middle height--1-1 flex flex--row flex-align--center"
  }, _react["default"].createElement("div", {
    "data-oui-component": true,
    className: "text--center soft-quad",
    "data-test-section": testSection
  }, imagePath && _react["default"].createElement("div", {
    className: "push-double--bottom"
  }, _react["default"].createElement("img", {
    src: imagePath,
    className: "svg--non-scaling-stroke display--inline",
    style: {
      maxWidth: '450px',
      maxHeight: '290px',
      height: imageHeight,
      width: imageWidth
    },
    "data-test-section": testSection && "".concat(testSection, "-image"),
    alt: ""
  })), headline && _react["default"].createElement("h1", {
    className: "alpha push--bottom",
    "data-test-section": testSection && "".concat(testSection, "-headline")
  }, headline), description && _react["default"].createElement("div", {
    className: "muted push--bottom anchor--middle",
    style: {
      maxWidth: descriptionMaxWidth
    },
    "data-test-section": testSection && "".concat(testSection, "-description")
  }, description), button && showButtonBelow && _react["default"].createElement("div", {
    className: "push-double--top"
  }, button))));
};

EmptyDashboard.propTypes = {
  /** A button, link, or other element that is actionable */
  button: _propTypes["default"].node,

  /** A string or `div` containing longer text that describes the empty state */
  description: _propTypes["default"].element,

  /** Max width of description. Accepts any valid CSS width value. */
  descriptionMaxWidth: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** Short text about the empty state */
  headline: _propTypes["default"].string.isRequired,

  /** String to set the max image height */
  imageHeight: _propTypes["default"].string,

  /** Path to an image representing the empty state */
  imagePath: _propTypes["default"].string,

  /** String to set the max image width */
  imageWidth: _propTypes["default"].string,

  /**
   * Boolean used to show the button below the image
   * instead of top right corner of the empty state
   */
  showButtonBelow: _propTypes["default"].bool,

  /** Identifier used to create data-test-section attributes for testing */
  testSection: _propTypes["default"].string
};
EmptyDashboard.getDefaultProps = {
  descriptionMaxWidth: '450px',
  imageHeight: 'inherit',
  imageWidth: 'inherit',
  showButtonBelow: false,
  testSection: 'empty-hello'
};
var _default = EmptyDashboard;
exports["default"] = _default;