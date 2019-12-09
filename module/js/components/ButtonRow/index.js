function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var areAnyButtonsFullWidth = function areAnyButtonsFullWidth(buttons) {
  var includesFullWidth = false;
  buttons.map(function (button) {
    if (button.props && button.props.width === 'full') {
      includesFullWidth = true;
    }
  });
  return includesFullWidth;
};

var ButtonRowSide = function ButtonRowSide(side, buttons, testSection) {
  var includesFullWidthButton = areAnyButtonsFullWidth(buttons);
  var wrapperClassNames = classNames(_defineProperty({
    'flex': includesFullWidthButton,
    'flex--1': true
  }, "oui-button-row--".concat(side), side));
  return React.createElement("div", {
    "data-oui-component": true,
    className: wrapperClassNames,
    "data-test-section": testSection ? testSection + '-' + side : null
  }, buttons.map(function (button, index) {
    if (includesFullWidthButton) {
      // `ButtonRow` groups that contain a full width `Button` must wrap
      // the buttons in `div`'s of equal spacing.
      var containerClasses = classNames({
        'push-half--right': index !== buttons.length - 1,
        'push-half--left': index !== 0,
        'flex--1': true
      });
      return React.createElement("div", {
        className: containerClasses,
        key: index
      }, button);
    }

    return button;
  }));
};
/**
 * A horizontal list of buttons with space between them.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var ButtonRow = function ButtonRow(_ref) {
  var centerGroup = _ref.centerGroup,
      leftGroup = _ref.leftGroup,
      rightGroup = _ref.rightGroup,
      testSection = _ref.testSection;
  return React.createElement("div", {
    "data-oui-component": true,
    className: "oui-button-row flex",
    "data-test-section": testSection
  }, leftGroup ? ButtonRowSide('left', leftGroup, testSection) : null, centerGroup ? ButtonRowSide('center', centerGroup, testSection) : null, rightGroup ? ButtonRowSide('right', rightGroup, testSection) : null);
};

ButtonRow.propTypes = {
  /** Array of buttons for the center */
  centerGroup: PropTypes.arrayOf(PropTypes.element),

  /** Array of buttons for left side */
  leftGroup: PropTypes.arrayOf(PropTypes.element),

  /** Array of buttons for right side */
  rightGroup: PropTypes.arrayOf(PropTypes.element),

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default ButtonRow;