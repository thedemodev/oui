"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CopyButton = _interopRequireDefault(require("../CopyButton"));

var _highlight = _interopRequireDefault(require("highlight.js/lib/highlight.js"));

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

_highlight["default"].registerLanguage('cs', require('highlight.js/lib/languages/cs'));

_highlight["default"].registerLanguage('css', require('highlight.js/lib/languages/css'));

_highlight["default"].registerLanguage('diff', require('highlight.js/lib/languages/diff'));

_highlight["default"].registerLanguage('html', require('highlight.js/lib/languages/xml'));

_highlight["default"].registerLanguage('java', require('highlight.js/lib/languages/java'));

_highlight["default"].registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

_highlight["default"].registerLanguage('js', require('highlight.js/lib/languages/javascript'));

_highlight["default"].registerLanguage('jsx', require('highlight.js/lib/languages/javascript'));

_highlight["default"].registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));

_highlight["default"].registerLanguage('md', require('highlight.js/lib/languages/markdown'));

_highlight["default"].registerLanguage('objectivec', require('highlight.js/lib/languages/objectivec'));

_highlight["default"].registerLanguage('php', require('highlight.js/lib/languages/php'));

_highlight["default"].registerLanguage('python', require('highlight.js/lib/languages/python'));

_highlight["default"].registerLanguage('ruby', require('highlight.js/lib/languages/ruby'));

_highlight["default"].registerLanguage('scss', require('highlight.js/lib/languages/scss'));

_highlight["default"].registerLanguage('swift', require('highlight.js/lib/languages/swift'));

_highlight["default"].registerLanguage('go', require('highlight.js/lib/languages/go'));
/**
 * Display code either inline or in its own block.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var Code =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Code, _React$Component);

  function Code() {
    var _this;

    _classCallCheck(this, Code);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Code).call(this));
    _this.renderCode = _this.renderCode.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Code, [{
    key: "renderCode",
    value: function renderCode() {
      var dangerouslySetInnerHTML = null;
      var _this$props = this.props,
          isHighlighted = _this$props.isHighlighted,
          language = _this$props.language,
          type = _this$props.type,
          testSection = _this$props.testSection;
      var code = this.props.children;

      if (isHighlighted) {
        // Code that uses syntax highlighting needs to have
        // `dangerouslySetInnerHTML` set so that the HTML returned is displayed.
        dangerouslySetInnerHTML = {
          __html: language ? _highlight["default"].highlight(language, code).value : _highlight["default"].highlightAuto(code).value
        };
        code = null;
      }

      return (
        /* eslint-disable react/no-danger */
        _react["default"].createElement("code", {
          "data-oui-component": true,
          className: type === 'inline' ? 'oui-code' : '',
          "data-test-section": type === 'inline' && testSection,
          dangerouslySetInnerHTML: dangerouslySetInnerHTML
        }, code)
        /* eslint-enable react/no-danger */

      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          type = _this$props2.type,
          hasCopyButton = _this$props2.hasCopyButton,
          copyButtonStyle = _this$props2.copyButtonStyle,
          testSection = _this$props2.testSection,
          className = _this$props2.className,
          _this$props2$ouiStyle = _this$props2.ouiStyle,
          ouiStyle = _this$props2$ouiStyle === void 0 ? true : _this$props2$ouiStyle;
      var classes = (0, _classnames["default"])(className, {
        'oui-pre': ouiStyle
      });

      if (!children) {
        return null;
      }

      if (type === 'inline') {
        return this.renderCode();
      }

      return _react["default"].createElement("div", {
        "data-oui-component": true,
        className: "position--relative"
      }, hasCopyButton && _react["default"].createElement("div", {
        style: {
          position: 'absolute',
          top: '5px',
          right: '5px'
        }
      }, _react["default"].createElement(_CopyButton["default"], {
        textToCopy: children,
        testSection: testSection,
        style: copyButtonStyle
      })), _react["default"].createElement("pre", {
        className: classes,
        "data-test-section": testSection
      }, this.renderCode()));
    }
  }]);

  return Code;
}(_react["default"].Component);

Code.propTypes = {
  /** The code within the component */
  children: _propTypes["default"].string,

  /** className provide the possibility for extra classNames */
  className: _propTypes["default"].string,

  /** Style for the CopyButton */
  copyButtonStyle: _propTypes["default"].oneOf(['highlight', 'danger', 'danger-outline', 'outline', 'outline-reverse', 'plain', 'toggle', 'underline', 'unstyled', 'none']),

  /** Adds a copy button to code examples */
  hasCopyButton: _propTypes["default"].bool,

  /** Apply syntax highlighting to the code */
  isHighlighted: _propTypes["default"].bool,

  /** Specify a language for the syntax highlighter */
  language: _propTypes["default"].oneOf(['cs', 'css', 'diff', 'html', 'java', 'javascript', 'js', 'jsx', 'markdown', 'md', 'objectivec', 'php', 'python', 'ruby', 'scss', 'swift', 'go']),

  /** ouiStyle */
  ouiStyle: _propTypes["default"].bool,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** How the code should be displayed */
  type: _propTypes["default"].oneOf(['inline', 'block']).isRequired
};
var _default = Code;
exports["default"] = _default;