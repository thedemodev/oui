import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable max-len */

var LoserIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/loser-16.svg');

var LoserIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/loser-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var LoserIcon = function LoserIcon(props) {
  var Svg;
  var sizeclass;

  switch (props.size) {
    case 16:
      Svg = LoserIcon16;
      sizeclass = 'oui-icon--16';
      break;

    case 24:
      Svg = LoserIcon24;
      sizeclass = 'oui-icon--24';
      break;

    default:
      Svg = LoserIcon16;
      sizeclass = "oui-icon--".concat(props.size);
  }

  return React.createElement(Svg, {
    className: 'oui-icon display--inline ' + sizeclass,
    "data-test-section": props.testSection
  });
};

LoserIcon.propTypes = {
  /** Size of the icon */
  size: PropTypes.oneOf([12, 16, 24]).isRequired,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default LoserIcon;