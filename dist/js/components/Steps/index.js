"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Steps =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Steps, _React$Component);

  function Steps() {
    _classCallCheck(this, Steps);

    return _possibleConstructorReturn(this, _getPrototypeOf(Steps).apply(this, arguments));
  }

  _createClass(Steps, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          onClick = _this$props.onClick,
          testSection = _this$props.testSection,
          currentStep = _this$props.currentStep,
          userCanEdit = _this$props.userCanEdit;
      return _react["default"].createElement("ul", _extends({
        className: "oui-steps",
        "data-oui-component": true
      }, testSection ? {
        'data-test-section': testSection
      } : {}), items.map(function (item, index) {
        var stepIsActive = item.value === currentStep;
        var indexOfCurrentStep = 0;
        items.forEach(function (innerItem, innerIndex) {
          if (innerItem.value === currentStep) {
            indexOfCurrentStep = innerIndex;
          }
        });
        var stepIsComplete = index < indexOfCurrentStep;

        function onClickStep() {
          if (!userCanEdit) {
            return;
          }

          onClick(item.value);
        }

        return _react["default"].createElement("li", _extends({
          key: item.value,
          className: (0, _classnames["default"])('oui-steps__item', {
            'oui-steps__item--active': stepIsActive,
            'oui-steps__item--complete': stepIsComplete,
            'oui-steps__item--editable': userCanEdit
          }),
          onClick: onClickStep
        }, testSection ? {
          'data-test-section': testSection + '-' + item.value
        } : {}), _react["default"].createElement("div", {
          className: "oui-steps__dot"
        }), _react["default"].createElement("div", {
          className: "oui-steps__label"
        }, item.label));
      }));
    }
  }]);

  return Steps;
}(_react["default"].Component);

_defineProperty(Steps, "propTypes", {
  /**
   * The currently selected step, maps to a value in items.
   */
  currentStep: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,

  /**
   * Dropdown items that can be selected from the select dropdown.
   */
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
    label: _propTypes["default"].node.isRequired
  })).isRequired,

  /**
   * Function that is called when user clicks on a step.
   */
  onClick: _propTypes["default"].func.isRequired,

  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: _propTypes["default"].string,

  /**
   * Determines whether to show editable styling,
   * and whether to call passed click handler.
   */
  userCanEdit: _propTypes["default"].bool
});

_defineProperty(Steps, "defaultProps", {
  userCanEdit: true
});

var _default = Steps;
exports["default"] = _default;