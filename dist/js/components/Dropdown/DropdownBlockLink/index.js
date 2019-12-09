"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DropdownBlockLink = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DropdownBlockLink = function DropdownBlockLink(props) {
  var el = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (props.hasFauxFocus && el.current) {
      el.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  });

  function onClick() {
    props.onClick(props.value);
  }

  var styleProps = {};

  if (props.minWidth) {
    styleProps.minWidth = props.minWidth;
  }

  return _react["default"].createElement("div", _extends({
    className: (0, _classnames["default"])({
      'link': props.isLink,
      'isSelected': !props.isLink,
      'oui-dropdown__block-link': props.isLink,
      'oui-dropdown__block-link--has-focus': props.hasFauxFocus
    }),
    ref: el,
    style: styleProps
  }, props.testSection ? {
    'data-test-section': props.testSection
  } : {}, props.trackId ? {
    'data-track-id': props.trackId
  } : {}, {
    onClick: onClick
  }), props.children);
};

exports.DropdownBlockLink = DropdownBlockLink;
DropdownBlockLink.defaultProps = {
  isLink: true
};
DropdownBlockLink.propTypes = {
  /** Content to be shown in the menu option */
  children: _propTypes["default"].node.isRequired,

  /** Whether or not this element should be highlighted. */
  hasFauxFocus: _propTypes["default"].bool,

  /** should this be a link or nonclickable text */
  isLink: _propTypes["default"].bool.isRequired,

  /** Minimum width of the list item, useful if
    * you need to have a block of description text */
  minWidth: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** Click handler for the menu option */
  onClick: _propTypes["default"].func.isRequired,

  /** Used for data-test-section attribute on the link */
  testSection: _propTypes["default"].string,

  /** Used for data-track-id attribute on the link */
  trackId: _propTypes["default"].string,

  /** An optional value to invoke the onClick callback with */
  value: _propTypes["default"].string
};
var _default = DropdownBlockLink;
exports["default"] = _default;