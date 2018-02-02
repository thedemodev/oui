import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ onClick }) => {
  return (
    <label className="oui-switch" onClick={onClick}>
      <input type="checkbox" />
      <span className="slider round"></span>
      <span className="slider-text"></span>
    </label>
  );
};

Toggle.propTypes = {
  // checked true means the toggle is on off means off
  checked: PropTypes.bool,
  // onClick function
  onClick: PropTypes.func,
};

export default Toggle;

