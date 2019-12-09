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

import React from 'react';
import PropTypes from 'prop-types';
import Tether from 'tether';
/**
 * Intelligently position elements on a page.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var OverlayWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OverlayWrapper, _React$Component);

  function OverlayWrapper(props) {
    var _this;

    _classCallCheck(this, OverlayWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OverlayWrapper).call(this, props));
    _this.state = {
      isOverlayOpen: false
    };
    _this.onChildClick = _this.onChildClick.bind(_assertThisInitialized(_this));
    _this.onChildMouseOver = _this.onChildMouseOver.bind(_assertThisInitialized(_this));
    _this.onChildMouseOut = _this.onChildMouseOut.bind(_assertThisInitialized(_this));
    _this.disableTether = _this.disableTether.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OverlayWrapper, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        hideOverlay: this.disableTether
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = {
        element: this._overlayEl,
        target: this._activatorEl.firstChild,
        attachment: "".concat(this.props.verticalAttachment, " ").concat(this.props.horizontalAttachment),
        constraints: [{
          to: 'window',
          attachment: this.props.attachmentConstraint,
          pin: this.props.isConstrainedToScreen
        }]
      };

      if (this.props.verticalTargetAttachment && this.props.horizontalTargetAttachment) {
        options.targetAttachment = "".concat(this.props.verticalTargetAttachment, " ").concat(this.props.horizontalTargetAttachment);
      }

      this.initTether = function () {
        return new Tether(options);
      };
    }
  }, {
    key: "enableTether",
    value: function enableTether() {
      var _this2 = this;

      // If tether hasn't yet been created, do it now.
      if (!this._tether) {
        this._tether = this.initTether();
      }

      this.setState({
        'isOverlayOpen': true
      });

      this._tether.enable();

      if (typeof this.props.onShow === 'function') {
        this.props.onShow();
      } // Reposition once the overlay is visible because Tether can't
      // properly calculate the positioning when the overlay is not
      // displayed.


      setTimeout(function () {
        _this2._tether.position();
      }); // These functions must be stored so that it can be still be removed even
      // though `bind` was used: http://stackoverflow.com/a/22870717/316602

      this._bodyClickListener = this.props.shouldHideOnClick && this.isClickWithinOverlayOrChildren.bind(this);
      this._documentEscapeListener = this.onEscapeKey.bind(this);

      if (this._bodyClickListener) {
        document.addEventListener('click', this._bodyClickListener);
      }

      document.addEventListener('keyup', this._documentEscapeListener);
    }
  }, {
    key: "disableTether",
    value: function disableTether() {
      // If tether hasn't been created, return early
      if (!this._tether) {
        return;
      }

      var shouldHide = true;

      if (typeof this.props.onHide === 'function') {
        shouldHide = this.props.onHide();
      }

      if (shouldHide === false) {
        // Exit out of this function before hiding the `overlay` if the supplied
        // `onHide` function returns false. This is useful for fine-tuned control
        // of when the `overlay` should close.
        return;
      }

      this.setState({
        'isOverlayOpen': false
      });

      this._tether.disable();

      this.removeBodyEventListener();
    }
  }, {
    key: "removeBodyEventListener",
    value: function removeBodyEventListener() {
      if (this._bodyClickListener) {
        document.removeEventListener('click', this._bodyClickListener);
      }

      if (this._documentEscapeListener) {
        document.removeEventListener('keyup', this._documentEscapeListener);
      }
    }
    /**
      * Disable Tether if a user clicks outside of the `overlay` and `children`.
      * @param {Object} event - Click event
     */

  }, {
    key: "isClickWithinOverlayOrChildren",
    value: function isClickWithinOverlayOrChildren(event) {
      var target = event.target;
      var shouldCloseOverlay = true;

      while (target.parentNode !== null && shouldCloseOverlay) {
        if (target === this._overlayEl || target === this._activatorEl) {
          shouldCloseOverlay = false;
        }

        target = target.parentNode;
      }

      if (shouldCloseOverlay) {
        this.disableTether();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeBodyEventListener(); // If tether hasn't been created, return early

      if (!this._tether) {
        return;
      }

      this._tether.destroy();

      if (this._tether.element && this._tether.element.remove) {
        this._tether.element.remove();
      }
    }
  }, {
    key: "onChildClick",
    value: function onChildClick(event, child) {
      // Toggle the `overlay` by enabling or disabling Tether.
      if (this.state.isOverlayOpen) {
        // Disable Tether when not visible for performance reasons.
        this.disableTether();
      } else {
        // Enable Tether when visible.
        this.enableTether();
      } // Run the `children`'s `onClick` if it exists.


      if (child.props.onClick) {
        child.props.onClick(event);
      }
    }
  }, {
    key: "onChildMouseOver",
    value: function onChildMouseOver(event, child) {
      // Enable Tether when visible.
      this.enableTether(); // Run the `children`'s `onMouseOver` if it exists.

      if (child.props.onMouseOver) {
        child.props.onMouseOver(event);
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus(event, child) {
      // Enable Tether when visible.
      this.enableTether();
    }
  }, {
    key: "onBlur",
    value: function onBlur(event, child) {
      // Enable Tether when visible.
      this.disableTether();
    }
  }, {
    key: "onChildMouseOut",
    value: function onChildMouseOut(event, child) {
      // Disable Tether when not visible for performance reasons.
      this.disableTether(); // Run the `children`'s `onMouseOut` if it exists.

      if (child.props.onMouseOut) {
        child.props.onMouseOut(event);
      }
    }
  }, {
    key: "onEscapeKey",
    value: function onEscapeKey(event) {
      // Escape key
      if (event.keyCode === 27) {
        this.disableTether();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          behavior = _this$props.behavior,
          children = _this$props.children,
          overlay = _this$props.overlay,
          testSection = _this$props.testSection;
      var eventHandlerProps;
      var child = React.Children.only(children);

      switch (behavior) {
        case 'click':
          eventHandlerProps = {
            onClick: function onClick(event) {
              return _this3.onChildClick.call(null, event, child);
            },
            onBlur: function onBlur(event) {
              return _this3.onBlur.call(null, event, child);
            }
          };
          break;

        case 'hover':
          eventHandlerProps = {
            onMouseOver: function onMouseOver(event) {
              return _this3.onChildMouseOver.call(null, event, child);
            },
            onMouseOut: function onMouseOut(event) {
              return _this3.onChildMouseOut.call(null, event, child);
            },
            onFocus: function onFocus(event) {
              return _this3.onFocus.call(null, event, child);
            },
            onBlur: function onBlur(event) {
              return _this3.onBlur.call(null, event, child);
            }
          };
          break;

        default:
      }

      var block = {
        display: 'inline-block'
      };
      var overlayState = this.state.isOverlayOpen ? {
        display: 'block'
      } : {
        display: 'none'
      };
      return (
        /* eslint-disable react/jsx-no-bind */
        React.createElement("div", {
          "data-oui-component": true,
          "data-test-section": testSection,
          style: block
        }, React.createElement("div", _extends({
          className: "click-area",
          style: block,
          ref: function ref(_ref) {
            _this3._activatorEl = _ref;
          }
        }, eventHandlerProps), child), React.createElement("div", {
          ref: function ref(_ref2) {
            _this3._overlayEl = _ref2;
          },
          style: overlayState
        }, overlay))
        /* eslint-enable */

      );
    }
  }]);

  return OverlayWrapper;
}(React.Component);

OverlayWrapper.propTypes = {
  /** Determines how the attachment is constrained to the target */
  attachmentConstraint: PropTypes.oneOf(['both', 'element', 'none', 'target', 'together']),

  /** Event to listen to and open the overlay */
  behavior: PropTypes.oneOf(['click', 'hover']),

  /** Element that the `overlay` should attach to */
  children: PropTypes.node.isRequired,

  /** Side of the `overlay` that should attach to the `children` */
  horizontalAttachment: PropTypes.oneOf(['left', 'center', 'right']),

  /** Side of `children` that should attach to the `overlay` */
  horizontalTargetAttachment: PropTypes.oneOf(['left', 'center', 'right']),

  /** Attach `overlay` to an edge of the screen if it is going to move off */
  isConstrainedToScreen: PropTypes.bool,

  /**
   * Function that runs when the `overlay` is hidden. Return `false` to prevent
   * the `overlay` from closing.
   */
  onHide: PropTypes.func,

  /** Function that runs when the `overlay` is shown */
  onShow: PropTypes.func,

  /** The element that is attached to the children */
  overlay: PropTypes.node.isRequired,

  /** Should the `overlay` close when clicking outside of it */
  shouldHideOnClick: PropTypes.bool,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,

  /** Vertical edge of the `overlay` that should touch the `children` */
  verticalAttachment: PropTypes.oneOf(['top', 'middle', 'bottom']),

  /** Vertical edge of the `children` that should touch the `overlay` */
  verticalTargetAttachment: PropTypes.oneOf(['top', 'middle', 'bottom'])
};
OverlayWrapper.defaultProps = {
  attachmentConstraint: 'together',
  behavior: 'click',
  horizontalAttachment: 'center',
  isConstrainedToScreen: false,
  onHide: function onHide() {},
  shouldHideOnClick: true,
  verticalAttachment: 'top'
};
OverlayWrapper.childContextTypes = {
  hideOverlay: PropTypes.func
};
export default OverlayWrapper;