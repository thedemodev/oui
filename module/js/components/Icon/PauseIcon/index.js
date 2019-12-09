import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable max-len */

var PauseIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/pause-16.svg');

var PauseIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/pause-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var PauseIcon = function PauseIcon(props) {
  var Svg;
  var sizeclass;

  switch (props.size) {
    case 16:
      Svg = PauseIcon16;
      sizeclass = 'oui-icon--16';
      break;

    case 24:
      Svg = PauseIcon24;
      sizeclass = 'oui-icon--24';
      break;

    default:
      Svg = PauseIcon16;
      sizeclass = "oui-icon--".concat(props.size);
  }

  return React.createElement(Svg, {
    className: 'oui-icon display--inline ' + sizeclass,
    "data-test-section": props.testSection
  });
};

PauseIcon.propTypes = {
  /** Size of the icon */
  size: PropTypes.oneOf([12, 16, 24]).isRequired,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default PauseIcon;