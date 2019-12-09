"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Item =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item(props) {
    var _this;

    _classCallCheck(this, Item);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Item).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "ref", _react["default"].createRef());

    _this._handleOnKeyDown = _this._handleOnKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Item, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.hasFauxFocus) {
        this.ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  }, {
    key: "_handleOnKeyDown",
    value: function _handleOnKeyDown(event) {
      if (event && event.keyCode === 32 && event.target === this._itemWithOnClick) {
        // Space key was pressed on the item, not a child of the item.
        // Run the `onClick` and prevent the page from scrolling.
        event.preventDefault();
        this.props.onClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var item;
      var commonClasses = (0, _classnames["default"])({
        'oui-block-list__item': true,
        'oui-block-list__item--has-focus': this.props.hasFauxFocus,
        'hard--sides': this.props.gutters === 'tight'
      });

      if (this.props.isDisabled) {
        item = _react["default"].createElement("div", {
          className: "".concat(commonClasses, " pointer-events--none background--faint muted")
        }, this.props.children);
      } else if (this.props.onClick) {
        // The element is rendered as a `div` instead of a `button` because the
        // user may want to pass in a `button` within `this.props.children`.
        // `tabIndex`, `role`, and `onKeyDown` are provided to make the `div`
        // behave like a button: https://mzl.la/1mRMvQj
        item = _react["default"].createElement("div", {
          className: "".concat(commonClasses, " link oui-block-list__link"),
          onClick: this.props.onClick,
          onKeyDown: this._handleOnKeyDown,
          tabIndex: "0",
          role: "button",
          ref: function ref(el) {
            _this2._itemWithOnClick = el;
          }
        }, this.props.children);
      } else if (this.props.href) {
        item = _react["default"].createElement("a", {
          href: this.props.href,
          className: "".concat(commonClasses, " oui-block-list__link display--block"),
          target: this.props.hrefTarget,
          title: this.props.hrefTitle,
          rel: this.props.hrefTarget === '_blank' && 'noopener noreferrer'
        }, this.props.children);
      } else {
        item = _react["default"].createElement("div", _extends({
          className: commonClasses,
          onMouseDown: this.props.onMouseDown
        }, this.props.testSection && {
          'data-test-section': this.props.testSection + '-item'
        }), this.props.children);
      }

      return _react["default"].createElement("li", {
        ref: this.ref,
        style: {
          wordBreak: 'break-word'
        },
        "data-test-section": this.props.testSection
      }, item);
    }
  }]);

  return Item;
}(_react["default"].Component);

Item.propTypes = {
  /** String or JSX that appears within the component */
  children: _propTypes["default"].node.isRequired,

  /** Determines level of padding of item */
  gutters: _propTypes["default"].oneOf(['loose', 'tight']),

  /** Boolean to set faux focus of a list item */
  hasFauxFocus: _propTypes["default"].bool,

  /** URL to navigate to when clicking on the item */
  href: _propTypes["default"].string,

  /** Target that the link, if provided, should open in */
  hrefTarget: _propTypes["default"].oneOf(['_self', '_blank']),

  /** Sets the `title` attribute on an `href` */
  hrefTitle: _propTypes["default"].string,

  /** Disable the item */
  isDisabled: _propTypes["default"].bool,

  /** Function that is run when clicking on the item */
  onClick: _propTypes["default"].func,

  /** Function that is run when mouse-down event is fired on the item */
  onMouseDown: _propTypes["default"].func,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
Item.defaultProps = {
  gutters: 'loose'
};
Item.displayName = 'BlockList.Item';
var _default = Item;
exports["default"] = _default;