import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Toggle = ({ checked = false }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={ checked }/>
      <span className="slider round"></span>
      <span className="slider-text"></span>
    </label>
  );
};

Toggle.propTypes = {
  // checked true means the toggle is on off means off
  checked: PropTypes.bool,
};

export default Toggle;

