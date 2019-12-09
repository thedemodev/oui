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

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Dropdown from '../Dropdown';

var SelectDropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectDropdown, _React$Component);

  function SelectDropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectDropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderActivator", function (_ref) {
      var _classNames;

      var buttonRef = _ref.buttonRef,
          onClick = _ref.onClick,
          onBlur = _ref.onBlur;
      var _this$props = _this.props,
          buttonStyle = _this$props.buttonStyle,
          value = _this$props.value,
          width = _this$props.width,
          maxWidth = _this$props.maxWidth,
          isDisabled = _this$props.isDisabled,
          initialPlaceholder = _this$props.initialPlaceholder,
          trackId = _this$props.trackId,
          testSection = _this$props.testSection;
      var selectedItem;

      _this.props.items.forEach(function (item) {
        if (item.value === value) {
          selectedItem = item;
        }
      });

      var outerClass = classNames((_classNames = {}, _defineProperty(_classNames, 'oui-form-bad-news', _this.props.displayError), _defineProperty(_classNames, 'oui-dropdown-group__activator', true), _classNames));
      var activatorLabel = '';

      if (selectedItem) {
        activatorLabel = selectedItem.activatorLabel || selectedItem.label;
      } else if (initialPlaceholder) {
        activatorLabel = initialPlaceholder;
      }

      return React.createElement("div", {
        style: {
          width: width,
          maxWidth: maxWidth
        },
        className: outerClass
      }, React.createElement(Button, {
        title: activatorLabel,
        isDisabled: isDisabled,
        style: buttonStyle,
        size: "narrow",
        testSection: testSection,
        width: "full",
        buttonRef: buttonRef,
        onClick: onClick,
        onBlur: onBlur
      }, React.createElement("div", {
        className: "flex flex-align--center",
        "data-track-id": trackId
      }, React.createElement("span", {
        className: "oui-dropdown-group__activator-label flex--1"
      }, activatorLabel), React.createElement("span", {
        className: "push--left oui-arrow-inline--down"
      }))));
    });

    _defineProperty(_assertThisInitialized(_this), "renderContents", function () {
      var _this$props2 = _this.props,
          items = _this$props2.items,
          onChange = _this$props2.onChange,
          value = _this$props2.value,
          minDropdownWidth = _this$props2.minDropdownWidth,
          dropdownDirection = _this$props2.dropdownDirection;
      return React.createElement(Dropdown.Contents, {
        minWidth: minDropdownWidth,
        direction: dropdownDirection
      }, items.map(function (entry, index) {
        return React.createElement(Dropdown.ListItem, {
          key: entry.value
        }, React.createElement(Dropdown.BlockLink, {
          value: entry.value,
          onClick: onChange,
          isLink: entry.value !== value,
          testSection: 'dropdown-block-link-' + entry.value
        }, entry.label, entry.description && React.createElement("div", {
          className: "micro muted"
        }, entry.description)));
      }));
    });

    return _this;
  }

  _createClass(SelectDropdown, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          isDisabled = _this$props3.isDisabled,
          zIndex = _this$props3.zIndex,
          fullWidth = _this$props3.fullWidth;
      return React.createElement(Dropdown, _extends({}, zIndex ? {
        zIndex: zIndex
      } : {}, {
        isDisabled: isDisabled,
        fullWidth: fullWidth,
        renderActivator: this.renderActivator
      }), this.renderContents());
    }
  }]);

  return SelectDropdown;
}(React.Component);

_defineProperty(SelectDropdown, "propTypes", {
  /**
   * Style value that is passed to the OUI button that controls the dropdown.
   */
  buttonStyle: PropTypes.string,

  /**
   * Show error by default.
   */
  displayError: PropTypes.bool,

  /**
   * Dropdown direction.
   */
  dropdownDirection: PropTypes.oneOf(['right', 'left']),

  /**
   * Should activator be full width of container
   */
  fullWidth: PropTypes.bool,

  /**
   * An initial value for the dropdown before anything is selected
   */
  initialPlaceholder: PropTypes.node,

  /**
   * The select is greyed out if it is disabled.
   */
  isDisabled: PropTypes.bool,

  /**
   * Dropdown items that can be selected from the select dropdown.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    activatorLabel: PropTypes.node,
    description: PropTypes.string,
    label: PropTypes.node.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired
  })).isRequired,

  /**
   * Max width of the activator container.
   */
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The minimum width of the dropdown list; any valid CSS width value.
   */
  minDropdownWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Function that is called when user selects
   * an item from dropdown list.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: PropTypes.string,

  /**
   * Identifier used to create data-track-id attributes for Heap testing.
   */
  trackId: PropTypes.string,

  /**
   * Value of currently selected item.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),

  /**
   * Width of the activator container.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * zIndex of dropdown group
   */
  zIndex: PropTypes.number
});

_defineProperty(SelectDropdown, "defaultProps", {
  buttonStyle: 'outline',
  initialPlaceholder: '',
  displayError: false,
  dropdownDirection: 'right',
  fullWidth: false,
  width: '100%',
  trackId: '',
  testSection: '',
  value: ''
});

export default SelectDropdown;