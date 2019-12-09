import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Label from '../Label';
/**
 * Generates an `ProgressBar` element
 * most of the common input types.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var ProgressBar = function ProgressBar(_ref) {
  var _ref$displayError = _ref.displayError,
      displayError = _ref$displayError === void 0 ? false : _ref$displayError,
      leftLabel = _ref.leftLabel,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      progress = _ref.progress,
      rightLabel = _ref.rightLabel,
      topLabel = _ref.topLabel;
  var ouiProgress = classnames('oui-progress', {
    'oui-progress--bad-news': displayError
  });
  var range = max - min;
  var allocated = Math.round(progress / range * 100);
  var available = Math.round(100 - allocated);
  return React.createElement("div", {
    "data-oui-component": true
  }, topLabel && React.createElement(Label, null, topLabel), React.createElement("div", {
    className: ouiProgress
  }, React.createElement("div", {
    className: "oui-progress__bar",
    style: {
      'width': "".concat(allocated, "%")
    },
    "aria-valuenow": "".concat(allocated),
    "aria-valuemin": min,
    "aria-valuemax": max
  }, !leftLabel && "".concat(allocated, "%"))), leftLabel && rightLabel && React.createElement("div", {
    className: "flex flex--1 push-half--top"
  }, React.createElement("div", {
    className: "flex flex--1 muted milli"
  }, "".concat(leftLabel, ": ").concat(allocated, "%")), React.createElement("div", {
    className: "flex flex--1 muted milli flex-justified--end"
  }, "".concat(rightLabel, ": ").concat(available, "%"))))
  /* eslint-enable */
  ;
};

ProgressBar.propTypes = {
  /** badNews will change the progress bar color to red */
  displayError: PropTypes.bool,

  /** left label */
  leftLabel: PropTypes.string,

  /** max */
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** min */
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** string data for progress */
  progress: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** right label */
  rightLabel: PropTypes.string,

  /** top label*/
  topLabel: PropTypes.string
};
export default ProgressBar;