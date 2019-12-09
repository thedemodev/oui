"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("../../Link"));

var _Poptip = _interopRequireDefault(require("../../Poptip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LINK = 'link';
var PUSH_STATE = 'pushstate';
var BUTTON = 'button'; // Should have a main component on its own.

var IconLink =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(IconLink, _React$PureComponent);

  function IconLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderNavLink", function () {
      var _this$props = _this.props,
          isActive = _this$props.isActive,
          iconName = _this$props.iconName,
          isOpen = _this$props.isOpen,
          isSecondaryLink = _this$props.isSecondaryLink,
          hasSeparator = _this$props.hasSeparator,
          linkLabel = _this$props.linkLabel;
      var iconSize = isSecondaryLink ? 'medium' : 'large';
      return _react["default"].createElement(_react["default"].Fragment, null, hasSeparator && _react["default"].createElement("li", {
        className: "push-double--sides hard--ends"
      }, _react["default"].createElement("hr", {
        className: "oui-rule"
      })), _react["default"].createElement(_Poptip["default"], {
        content: linkLabel,
        disable: isOpen,
        isAnimated: false,
        position: "right"
      }, _react["default"].createElement("div", {
        className: (0, _classnames["default"])('root-nav__link', {
          'is-active': isActive,
          'root-nav__link--primary': !isSecondaryLink,
          'root-nav__link--secondary': isSecondaryLink
        })
      }, _react["default"].createElement("div", {
        className: "flex"
      }, _react["default"].createElement(_reactOuiIcons["default"], {
        name: iconName,
        size: iconSize
      })), _react["default"].createElement("span", {
        className: (0, _classnames["default"])('root-nav__link__text', ' truncate', {
          'root-nav-fader': !isOpen
        })
      }, linkLabel))));
    });

    _defineProperty(_assertThisInitialized(_this), "onAppRouteLinkClick", function (event) {
      var _this$props2 = _this.props,
          href = _this$props2.href,
          onClick = _this$props2.onClick;
      return onClick(href, event);
    });

    _defineProperty(_assertThisInitialized(_this), "renderAppRouteLink", function () {
      var _this$props3 = _this.props,
          testSection = _this$props3.testSection,
          href = _this$props3.href;
      return _react["default"].createElement(_Link["default"], {
        style: "reverse",
        href: href,
        onClick: _this.onAppRouteLinkClick,
        testSection: "".concat(testSection, "-internal-link")
      }, _this.renderNavLink());
    });

    _defineProperty(_assertThisInitialized(_this), "renderExternalLink", function () {
      var _this$props4 = _this.props,
          testSection = _this$props4.testSection,
          href = _this$props4.href;
      return _react["default"].createElement(_Link["default"], {
        href: href,
        style: "reverse",
        testSection: "".concat(testSection, "-external-link")
      }, _this.renderNavLink());
    });

    _defineProperty(_assertThisInitialized(_this), "renderButton", function () {
      var _this$props5 = _this.props,
          testSection = _this$props5.testSection,
          onClick = _this$props5.onClick;
      return _react["default"].createElement(_Link["default"], {
        onClick: onClick,
        style: "reverse",
        testSection: "".concat(testSection, "-button")
      }, _this.renderNavLink());
    });

    return _this;
  }

  _createClass(IconLink, [{
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          testSection = _this$props6.testSection,
          type = _this$props6.type;
      var linkToRender;

      switch (type) {
        case PUSH_STATE:
          linkToRender = this.renderAppRouteLink();
          break;

        case LINK:
          linkToRender = this.renderExternalLink();
          break;

        case BUTTON:
          linkToRender = this.renderButton();
          break;

        default:
          // Should never reach here
          linkToRender = null;
      }

      return _react["default"].createElement("li", {
        "data-test-section": testSection
      }, linkToRender);
    }
  }]);

  return IconLink;
}(_react["default"].PureComponent);

_defineProperty(IconLink, "propTypes", {
  /* Boolean, Should show a separator line before this link */
  hasSeparator: _propTypes["default"].bool,

  /* Navigates to this URL when clicked */
  href: _propTypes["default"].string,

  /* String, name of Icon */
  iconName: _propTypes["default"].string.isRequired,

  /* Boolean, whether the link is highlighted
   * blue as the current active nav link */
  isActive: _propTypes["default"].bool,

  /* Boolean, whether navbar is open or closed */
  isOpen: _propTypes["default"].bool,

  /* Boolean, whether link is primary or secondary */
  isSecondaryLink: _propTypes["default"].bool,

  /* String, description of url */
  linkLabel: _propTypes["default"].string.isRequired,

  /* Function called when IconLink is clicked */
  onClick: _propTypes["default"].func,

  /* String, name of test data section */
  testSection: _propTypes["default"].string.isRequired,

  /* IconLink can be one of these types
   * LINK
   * PUSH_STATE
   * BUTTON */
  type: _propTypes["default"].oneOf([LINK, PUSH_STATE, BUTTON])
});

_defineProperty(IconLink, "defaultProps", {
  hasSeparator: false,
  href: '',
  isActive: false,
  isOpen: true,
  isSecondaryLink: false,
  onClick: function onClick() {},
  type: LINK
});

var _default = IconLink;
exports["default"] = _default;