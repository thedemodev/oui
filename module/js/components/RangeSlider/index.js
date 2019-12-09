import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { FILL_COLOR_MAP } from './constants';
var DEFAULT_FILL_COLOR_NAME = 'default';

var RangeSlider = function RangeSlider(props) {
  var fillColorName = props.fillColorName,
      value = props.value,
      onChange = props.onChange,
      isDisabled = props.isDisabled;
  var rangeClasses = classnames({
    'oui-rangeslider': true,
    'oui-rangeslider--disabled': isDisabled
  }); // ensure valid fillColor name (in the case that propType errors are ignored)

  var validFillColorName = Object.keys(FILL_COLOR_MAP).includes(fillColorName) ? fillColorName : DEFAULT_FILL_COLOR_NAME;
  var fillColor = FILL_COLOR_MAP[validFillColorName];
  return React.createElement("div", {
    className: rangeClasses,
    "data-test-section": props.testSection
  }, React.createElement("div", {
    className: "oui-grid"
  }, React.createElement("div", {
    className: "oui-grid__cell position--relative"
  }, React.createElement("div", {
    className: "range-labels flex"
  }, React.createElement("label", {
    className: "oui-label muted flush flex--1"
  }, props.useOffForLabel ? 'Off' : '0%'), React.createElement("label", {
    className: "oui-label muted flush"
  }, "100%")), React.createElement("div", {
    className: "range-display"
  }, React.createElement("svg", {
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    width: "256",
    height: "256",
    viewBox: "0 0 256 256"
  }, React.createElement("path", {
    fill: fillColor,
    d: "M0 256h256V0z"
  })), React.createElement("div", {
    className: "range-display range-display-overlay",
    style: {
      left: value + '%'
    }
  })), React.createElement("div", {
    className: "range-grid"
  }, React.createElement("div", {
    className: "gridline grid-1"
  }), React.createElement("div", {
    className: "gridline grid-2"
  }), React.createElement("div", {
    className: "gridline grid-3"
  }), React.createElement("div", {
    className: "gridline grid-4"
  }), React.createElement("div", {
    className: "gridline grid-5"
  }), React.createElement("div", {
    className: "gridline gridline-half grid-h1"
  }), React.createElement("div", {
    className: "gridline gridline-half grid-h2"
  }), React.createElement("div", {
    className: "gridline gridline-half grid-h3"
  }), React.createElement("div", {
    className: "gridline gridline-half grid-h4"
  })), React.createElement("input", {
    className: "hard position--relative width--1-1",
    "data-traffic-group": "1",
    type: "range",
    min: "0",
    max: "100",
    step: "1",
    value: value,
    onChange: onChange,
    disabled: isDisabled
  }))));
};

RangeSlider.propTypes = {
  /** Custom color for slider **/
  fillColorName: PropTypes.oneOf(Object.keys(FILL_COLOR_MAP)),

  /** Whether it is disabled, will render as greyscale if so **/
  isDisabled: PropTypes.bool,

  /** onChange function */
  onChange: PropTypes.func,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,

  /** When true, uses 'Off' instead of '0%' */
  useOffForLabel: PropTypes.bool,

  /** The value */
  value: PropTypes.number
};
RangeSlider.defaultProps = {
  fillColorName: DEFAULT_FILL_COLOR_NAME,
  isDisabled: false,
  onChange: undefined,
  testSection: undefined,
  useOffForLabel: false,
  value: undefined
};
export default RangeSlider;