var _dec, _class, _class2, _temp;

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

import React from 'react';
import PropTypes from 'prop-types';
import { withState } from 'recompose';
import { waitForSelector } from '../../utils/poll';
import classNames from 'classnames';
import { Tooltip } from 'react-tippy';
/**
 * Displays help text when hovering on an element.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var Poptip = (_dec = withState('bodyDefined', 'setBodyDefined', !!document.body), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Poptip, _React$Component);

  function Poptip(props) {
    var _this;

    _classCallCheck(this, Poptip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Poptip).call(this, props)); // Set the bodyDefined prop to true when the body is ready

    _defineProperty(_assertThisInitialized(_this), "renderPoptip", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          content = _this$props.content,
          delay = _this$props.delay,
          disable = _this$props.disable,
          hideDelay = _this$props.hideDelay,
          isAnimated = _this$props.isAnimated,
          isInline = _this$props.isInline,
          position = _this$props.position,
          trigger = _this$props.trigger,
          theme = _this$props.theme;
      var wrapperInline = classNames({
        'display--inline': isInline
      });
      return React.createElement(Tooltip, _extends({
        arrow: true,
        disabled: disable,
        delay: [delay, hideDelay]
      }, !isAnimated ? {
        duration: 0
      } : {}, {
        html: React.createElement("div", {
          className: "force-break"
        }, content),
        position: position,
        theme: theme,
        trigger: trigger
      }), React.createElement("div", {
        className: wrapperInline,
        title: ""
      }, children));
    });

    waitForSelector('body').then(function (documentBody) {
      return props.setBodyDefined(!!documentBody);
    }); // eslint-disable-line react/prop-types

    return _this;
  }

  _createClass(Poptip, [{
    key: "render",
    value: function render() {
      var bodyDefined = this.props.bodyDefined; // eslint-disable-line react/prop-types

      return bodyDefined ? this.renderPoptip() : null;
    }
  }]);

  return Poptip;
}(React.Component), _defineProperty(_class2, "displayName", 'Poptip'), _defineProperty(_class2, "propTypes", {
  /** Content that, when hovered on, makes the Poptip appear */
  children: PropTypes.node.isRequired,

  /** content could be a node of a string */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,

  /** how long it takes after a trigger event is fired for a tooltip to show |
   * default => 0 */
  delay: PropTypes.number,

  /** disable value | default => false */
  disable: PropTypes.bool,

  /** how long it takes after a trigger event is fired for a tooltip to hide |
   * default => 0 */
  hideDelay: PropTypes.number,

  /** should the poptip content be animated | default => true */
  isAnimated: PropTypes.bool,

  /** should the poptip be displayed inline */
  isInline: PropTypes.bool,

  /** position value options | default => top */
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),

  /** background color | default => dark */
  theme: PropTypes.oneOf(['dark', 'light', 'transparent']),

  /** trigger value options | default => mouseenter focus */
  trigger: PropTypes.oneOf(['mouseenter', 'focus', 'click', 'manual'])
}), _defineProperty(_class2, "defaultProps", {
  delay: 0,
  disable: false,
  hideDelay: 0,
  isAnimated: true,
  isInline: false,
  position: 'top',
  theme: 'dark'
}), _temp)) || _class);
export default Poptip;