"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ButtonRow = _interopRequireDefault(require("../ButtonRow"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var DockedFooter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DockedFooter, _React$Component);

  function DockedFooter(props) {
    var _this;

    _classCallCheck(this, DockedFooter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DockedFooter).call(this, props));
    _this.state = {
      isDocked: true
    };
    _this.shouldDock = _this.shouldDock.bind(_assertThisInitialized(_this));
    _this.onScroll = _this.onScroll.bind(_assertThisInitialized(_this));
    _this.setEventListeners = _this.setEventListeners.bind(_assertThisInitialized(_this));
    _this.throttle = _this.throttle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DockedFooter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.shouldDock();
      this.setEventListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.footerToTop !== this.state.footerToTop) {
        this.shouldDock();
      } else if (prevState.viewableArea !== this.state.viewableArea) {
        this.shouldDock();
      }
    }
  }, {
    key: "shouldDock",
    value: function shouldDock() {
      var parentElement = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');
      var footerElement = document.querySelector('[data-test-section="' + this.props.testSection + '"]')[0];

      if (footerElement !== undefined && parentElement !== undefined) {
        var shouldReDock = footerElement.offsetTop >= parentElement.offsetHeight - footerElement.offsetHeight;
        this.setState({
          shouldDock: shouldReDock
        });
      }

      this.onScroll();
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      var parentElement = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');
      var atScrollBottom = parentElement.scrollHeight - parentElement.scrollTop === parentElement.clientHeight;
      this.setState({
        isDocked: !atScrollBottom
      });
    }
  }, {
    key: "throttle",
    value: function throttle(delay, fn) {
      var lastCall = 0;
      return function () {
        var now = new Date().getTime();

        if (now - lastCall < delay) {
          return;
        }

        lastCall = now;
        return fn.apply(void 0, arguments);
      };
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var parentElement = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');
      window.addEventListener('resize', this.throttle(3, this.shouldDock));
      parentElement.addEventListener('click', this.shouldDock);
      parentElement.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("footer", {
        "data-test-section": this.props.testSection,
        className: (0, _classnames["default"])({
          'oui-docked-footer': true,
          'oui-docked-footer--is-docked': this.state.isDocked,
          'push-double--top': this.props.includesMargin
        })
      }, _react["default"].createElement(_ButtonRow["default"], {
        rightGroup: this.props.children
      }));
    }
  }]);

  return DockedFooter;
}(_react["default"].Component);

DockedFooter.propTypes = {
  /**
   *  Button components to be included in the DockedFooter.
   */
  children: _propTypes["default"].node,

  /**
  *  Used to determine if there should be top margin.
   */
  includesMargin: _propTypes["default"].bool,

  /**
   * Identifier to check parent height and visible space for docked footer.
   */
  parentTestSection: _propTypes["default"].string.isRequired,

  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: _propTypes["default"].string.isRequired
};
DockedFooter.defaultProps = {
  includesMargin: false,
  testSection: '',
  parentTestSection: ''
};
var _default = DockedFooter;
exports["default"] = _default;