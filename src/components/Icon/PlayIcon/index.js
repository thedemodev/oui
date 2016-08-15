import React from 'react';

/* eslint-disable max-len */
const PlayIcon16 = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/play-16.svg');
const PlayIcon24 = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/play-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const PlayIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = PlayIcon16;
      break;
    case 24:
      Svg = PlayIcon24;
      break;
    default:
  }

  return (
    <Svg
      className="oui-icon display--inline"
      data-test-section={ props.testSection }
    />
  );
};

PlayIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default PlayIcon;

