var _dec, _class, _class2, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Manager, Popper, Reference } from 'react-popper';
import { withState } from 'recompose';
import { withToggle } from '../../utils/recompose-utils';
import DropdownContents from './DropdownContents';
import DropdownListItem from './DropdownListItem';
import DropdownBlockLink from './DropdownBlockLink';
import DropdownBlockLinkText from './DropdownBlockLinkText';
import DropdownBlockLinkSecondaryText from './DropdownBlockLinkSecondaryText';
var Dropdown = (_dec = withState('overChildren', 'setOverChildren', false), withToggle(_class = _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      // For performance reasons, only listen to global clicks
      // while the children are displayed.
      if (Dropdown.shouldDisplayChildren(prevProps) === Dropdown.shouldDisplayChildren(_this.props)) {
        return;
      }

      if (Dropdown.shouldDisplayChildren(_this.props)) {
        document.addEventListener('click', _this.handleOnBlur);
      } else {
        document.removeEventListener('click', _this.handleOnBlur);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleHideChildren", function () {
      var _this$props = _this.props,
          hide = _this$props.hide,
          setOverChildren = _this$props.setOverChildren,
          shouldHideChildrenOnClick = _this$props.shouldHideChildrenOnClick; // We need to return early because handleToggle() and hide() will
      // cancel each other out if shouldHideChildrenOnClick is true

      if (shouldHideChildrenOnClick) {
        return;
      }

      hide();
      setOverChildren(false);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnBlur", function () {
      if (!_this.props.overChildren) {
        _this.props.hide();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggle", function (event) {
      var _this$props2 = _this.props,
          isDisabled = _this$props2.isDisabled,
          overChildren = _this$props2.overChildren,
          shouldHideChildrenOnClick = _this$props2.shouldHideChildrenOnClick;

      if (isDisabled || event.ignoreToggle || !shouldHideChildrenOnClick && overChildren) {
        return;
      }

      _this.props.setOverChildren(false);

      _this.props.toggle();
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function () {
      return _this.props.setOverChildren(true);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      return _this.props.setOverChildren(false);
    });

    return _this;
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      var _classNames6,
          _this2 = this;

      var _this$props3 = this.props,
          arrowIcon = _this$props3.arrowIcon,
          buttonContent = _this$props3.buttonContent,
          children = _this$props3.children,
          isDisabled = _this$props3.isDisabled,
          isOpen = _this$props3.isOpen,
          displayError = _this$props3.displayError,
          fullWidth = _this$props3.fullWidth,
          placement = _this$props3.placement,
          renderActivator = _this$props3.renderActivator,
          style = _this$props3.style,
          testSection = _this$props3.testSection,
          width = _this$props3.width,
          zIndex = _this$props3.zIndex;
      var groupClass = classNames('oui-dropdown-group', _defineProperty({}, 'width--1-1', fullWidth), _defineProperty({}, 'oui-form-bad-news', displayError), _defineProperty({}, 'is-active', isOpen));
      var buttonClass = classNames('oui-button', _defineProperty({}, "oui-button--".concat(style), style), _defineProperty({}, 'oui-button--full soft--left text--left', fullWidth));
      var iconClass = classNames('push-half--left', (_classNames6 = {}, _defineProperty(_classNames6, 'oui-arrow-inline--down', arrowIcon === 'down'), _defineProperty(_classNames6, 'oui-arrow-inline--left', arrowIcon === 'left'), _defineProperty(_classNames6, 'oui-arrow-inline--right', arrowIcon === 'right'), _defineProperty(_classNames6, 'oui-arrow-inline--up', arrowIcon === 'up'), _classNames6));
      return React.createElement(Manager, null, React.createElement("div", {
        className: groupClass,
        "data-oui-component": true,
        "data-test-section": testSection
      }, React.createElement(Reference, null, function (_ref) {
        var ref = _ref.ref;

        if (buttonContent) {
          return React.createElement("button", {
            type: "button",
            className: buttonClass,
            disabled: isDisabled,
            onClick: _this2.handleToggle,
            onBlur: _this2.handleOnBlur,
            ref: ref
          }, React.createElement("div", {
            className: "flex flex-align--center"
          }, React.createElement("div", {
            className: "flex--1 truncate"
          }, buttonContent), !!arrowIcon && arrowIcon !== 'none' && React.createElement("div", {
            className: "text--right"
          }, React.createElement("span", {
            className: iconClass
          }))));
        }

        if (renderActivator) {
          return renderActivator({
            buttonRef: ref,
            disabled: isDisabled,
            onBlur: _this2.handleOnBlur,
            onClick: _this2.handleToggle,
            testSection: testSection
          });
        } else if (_this2.props.activator) {
          // To be deprecated in favor of renderActivator
          return React.cloneElement(_this2.props.activator, {
            buttonRef: ref,
            onBlur: _this2.handleOnBlur,
            onClick: _this2.handleToggle
          });
        }
      }), Dropdown.shouldDisplayChildren(this.props) && React.createElement(Popper, {
        placement: placement
      }, function (_ref2) {
        var ref = _ref2.ref,
            popperStyle = _ref2.style,
            popperPlacement = _ref2.placement;
        return React.createElement("div", {
          ref: ref,
          "data-placement": popperPlacement,
          className: "oui-dropdown-children",
          onMouseOver: _this2.onMouseOver,
          onMouseLeave: _this2.onMouseLeave,
          onClick: _this2.handleToggle,
          style: _objectSpread({
            zIndex: zIndex,
            position: 'absolute',
            width: width,
            marginTop: 2,
            marginBottom: 2,
            borderRadius: 'var(--border-radius)',
            boxShadow: '0 2px 3px rgba(0,0,0,.1)'
          }, popperStyle)
        }, typeof children === 'function' ? children({
          handleHideChildren: _this2.handleHideChildren
        }) : children);
      })));
    }
  }]);

  return Dropdown;
}(React.Component), _defineProperty(_class2, "displayName", 'Dropdown'), _defineProperty(_class2, "shouldDisplayChildren", function (_ref3) {
  var isOpen = _ref3.isOpen,
      isDisabled = _ref3.isDisabled;
  return isOpen && !isDisabled;
}), _temp)) || _class) || _class);
Dropdown.propTypes = {
  /**
   * React element that when clicked activates the dropdown
   * Either this prop OR buttonContent should be used, not both
   * Not included in defaultProps because undefined is an expected value
   */
  activator: PropTypes.elementType,

  /** Arrow icon direction:
   * - Defaults to 'none', which hides the arrow
   * - passing a prop value of false also hides the arrow
   * - passing a prop value of true uses down arrow
   */
  arrowIcon: PropTypes.oneOf(['down', 'left', 'none', 'right', 'up']),

  /**
   * Button text, can be a string or element.
   * Either this prop OR activator should be used, not both
   * Not included in defaultProps because undefined is an expected value
   */
  buttonContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Dropdown contents, typically using the <Blocklist> component
   * Use render prop function for custom hide configuration
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /** Show error state. */
  displayError: PropTypes.bool,

  /** Button width is either full or inline-block. */
  fullWidth: PropTypes.bool,

  /** Provided by @withToggle HOC */
  hide: PropTypes.func,

  /** Disable button. */
  isDisabled: PropTypes.bool,

  /**
   * Provided by @withToggle HOC
   * Defaults to false but Dropdown can be open by default if true
   */
  isOpen: PropTypes.bool,

  /**
   * Provided by @withState HOC
   * Whether or not the children are currently moused over
   */
  overChildren: PropTypes.bool,

  /** Popper placement property */
  placement: PropTypes.oneOf(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end']),

  /**
   * A render prop to render the activator button that when clicked activates
   * the dropdown
   * Either this prop OR buttonContent should be used, not both
   */
  renderActivator: PropTypes.func,

  /** Provided by @withToggle HOC. Control for overChildren value */
  setOverChildren: PropTypes.func,

  /**
   * Whether Dropdown children should be hidden on children click
   * - Defaults to true
   * - Pass render prop function as child prop and use provided
   *   handleHideChildren function to programmatically hide
   */
  shouldHideChildrenOnClick: PropTypes.bool,

  /**
   * Button style, e.g. highlight, danger, outline
   * Not included in defaultProps because undefined is an expected value
   */
  style: PropTypes.string,

  /** For automated testing only. */
  testSection: PropTypes.string,

  /** Provided by @withToggle HOC. Toggle control for isOpen. */
  toggle: PropTypes.func,

  /** Dropdown menu width, in pixels. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Override default dropdown menu z-index. */
  zIndex: PropTypes.number
};
Dropdown.defaultProps = {
  arrowIcon: 'none',
  displayError: false,
  fullWidth: false,
  isDisabled: false,
  isOpen: false,
  overChildren: false,
  placement: 'bottom-start',
  renderActivator: null,
  setOverChildren: function setOverChildren() {},
  shouldHideChildrenOnClick: true,
  testSection: '',
  toggle: function toggle() {},
  width: 200,
  zIndex: 999
};
Dropdown.Contents = DropdownContents;
Dropdown.ListItem = DropdownListItem;
Dropdown.BlockLink = DropdownBlockLink;
Dropdown.BlockLinkText = DropdownBlockLinkText;
Dropdown.BlockLinkSecondaryText = DropdownBlockLinkSecondaryText;
export default Dropdown;