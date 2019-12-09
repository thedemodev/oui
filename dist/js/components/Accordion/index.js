"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionSection = AccordionSection;
exports["default"] = exports.Accordion = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Accordion =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));
    _this.state = {
      selected: _this.props.initiallySelected
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "handleSelection",
    value: function handleSelection(selected) {
      this.setState({
        selected: selected
      });
    } // inspired by React-Bootstrap Carousel

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("ul", {
        "data-oui-component": true,
        className: "accordion accordion__react",
        "data-test-section": this.props.testSection
      }, _react["default"].Children.map(this.props.children, function (child, index) {
        if (!(0, _react.isValidElement)(child)) {
          return null;
        }

        return (0, _react.cloneElement)(child, {
          key: index,
          _onClickHandler: _this2.handleSelection.bind(_this2, index),
          _isSelected: index === _this2.state.selected
        });
      }));
    }
  }]);

  return Accordion;
}(_react["default"].Component);

exports.Accordion = Accordion;
Accordion.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,
  initiallySelected: _propTypes["default"].number,
  testSection: _propTypes["default"].string
};
Accordion.defaultProps = {
  initiallySelected: 0
};

function AccordionSection(_ref) {
  var _isSelected = _ref._isSelected,
      _onClickHandler = _ref._onClickHandler,
      children = _ref.children,
      testSection = _ref.testSection,
      title = _ref.title;
  return _react["default"].createElement("li", {
    "data-test-section": testSection,
    className: (0, _classnames["default"])('accordion__item', 'accordion__item__react', {
      'is-active': _isSelected
    })
  }, _react["default"].createElement("a", {
    className: "accordion__link",
    onClick: _onClickHandler
  }, title), _react["default"].createElement("div", {
    className: "accordion__content-wrap accordion__content-wrap__react"
  }, _react["default"].createElement("div", {
    className: "accordion__content flex--column height--1-1"
  }, children)));
}

AccordionSection.propTypes = {
  _isSelected: _propTypes["default"].bool,
  _onClickHandler: _propTypes["default"].func,
  children: _propTypes["default"].node.isRequired,
  testSection: _propTypes["default"].string,
  title: _propTypes["default"].string.isRequired
};
var _default = {
  Accordion: Accordion,
  AccordionSection: AccordionSection
};
exports["default"] = _default;