import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable max-len */

var ExperimentIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/experiment-16.svg');

var ExperimentIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/experiment-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var ExperimentIcon = function ExperimentIcon(props) {
  var Svg;
  var sizeclass;

  switch (props.size) {
    case 16:
      Svg = ExperimentIcon16;
      sizeclass = 'oui-icon--16';
      break;

    case 24:
      Svg = ExperimentIcon24;
      sizeclass = 'oui-icon--24';
      break;

    default:
      Svg = ExperimentIcon16;
      sizeclass = "oui-icon--".concat(props.size);
  }

  return React.createElement(Svg, {
    className: 'oui-icon display--inline ' + sizeclass,
    "data-test-section": props.testSection
  });
};

ExperimentIcon.propTypes = {
  /** Size of the icon */
  size: PropTypes.oneOf([12, 16, 24]).isRequired,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default ExperimentIcon;