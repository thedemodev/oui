import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable max-len */

var DimensionsIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/dimensions-16.svg');

var DimensionsIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/dimensions-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var DimensionsIcon = function DimensionsIcon(props) {
  var Svg;
  var sizeclass;

  switch (props.size) {
    case 16:
      Svg = DimensionsIcon16;
      sizeclass = 'oui-icon--16';
      break;

    case 24:
      Svg = DimensionsIcon24;
      sizeclass = 'oui-icon--24';
      break;

    default:
      Svg = DimensionsIcon16;
      sizeclass = "oui-icon--".concat(props.size);
  }

  return React.createElement(Svg, {
    className: 'oui-icon display--inline ' + sizeclass,
    "data-test-section": props.testSection
  });
};

DimensionsIcon.propTypes = {
  /** Size of the icon */
  size: PropTypes.oneOf([12, 16, 24]).isRequired,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default DimensionsIcon;