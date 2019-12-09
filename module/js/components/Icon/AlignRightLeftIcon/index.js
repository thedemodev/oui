import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable max-len */

var AlignRightLeftIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/align-right-left-16.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var AlignRightLeftIcon = function AlignRightLeftIcon(props) {
  var Svg;
  var sizeclass;

  switch (props.size) {
    case 16:
      Svg = AlignRightLeftIcon16;
      sizeclass = 'oui-icon--16';
      break;

    default:
      Svg = AlignRightLeftIcon16;
      sizeclass = "oui-icon--".concat(props.size);
  }

  return React.createElement(Svg, {
    className: 'oui-icon display--inline ' + sizeclass,
    "data-test-section": props.testSection
  });
};

AlignRightLeftIcon.propTypes = {
  /** Size of the icon */
  size: PropTypes.oneOf([12, 16, 24]).isRequired,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default AlignRightLeftIcon;