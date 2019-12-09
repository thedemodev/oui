import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable max-len */

var ToolbarSizeFullWidthIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/toolbar-size-full-width-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var ToolbarSizeFullWidthIcon = function ToolbarSizeFullWidthIcon(props) {
  var Svg;
  var sizeclass;

  switch (props.size) {
    case 24:
      Svg = ToolbarSizeFullWidthIcon24;
      sizeclass = 'oui-icon--24';
      break;

    default:
      Svg = ToolbarSizeFullWidthIcon24;
      sizeclass = "oui-icon--".concat(props.size);
  }

  return React.createElement(Svg, {
    className: 'oui-icon display--inline ' + sizeclass,
    "data-test-section": props.testSection
  });
};

ToolbarSizeFullWidthIcon.propTypes = {
  /** Size of the icon */
  size: PropTypes.oneOf([12, 16, 24]).isRequired,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default ToolbarSizeFullWidthIcon;