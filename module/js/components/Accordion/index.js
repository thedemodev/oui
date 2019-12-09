function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var Accordion =
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

      return React.createElement("ul", {
        "data-oui-component": true,
        className: "accordion accordion__react",
        "data-test-section": this.props.testSection
      }, React.Children.map(this.props.children, function (child, index) {
        if (!isValidElement(child)) {
          return null;
        }

        return cloneElement(child, {
          key: index,
          _onClickHandler: _this2.handleSelection.bind(_this2, index),
          _isSelected: index === _this2.state.selected
        });
      }));
    }
  }]);

  return Accordion;
}(React.Component);
Accordion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  initiallySelected: PropTypes.number,
  testSection: PropTypes.string
};
Accordion.defaultProps = {
  initiallySelected: 0
};
export function AccordionSection(_ref) {
  var _isSelected = _ref._isSelected,
      _onClickHandler = _ref._onClickHandler,
      children = _ref.children,
      testSection = _ref.testSection,
      title = _ref.title;
  return React.createElement("li", {
    "data-test-section": testSection,
    className: classNames('accordion__item', 'accordion__item__react', {
      'is-active': _isSelected
    })
  }, React.createElement("a", {
    className: "accordion__link",
    onClick: _onClickHandler
  }, title), React.createElement("div", {
    className: "accordion__content-wrap accordion__content-wrap__react"
  }, React.createElement("div", {
    className: "accordion__content flex--column height--1-1"
  }, children)));
}
AccordionSection.propTypes = {
  _isSelected: PropTypes.bool,
  _onClickHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
  testSection: PropTypes.string,
  title: PropTypes.string.isRequired
};
export default {
  Accordion: Accordion,
  AccordionSection: AccordionSection
};