import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ onClick }) => {
  return (
    <label className="oui-switch" >
      <input type="checkbox" onClick={ onClick }/>
      <span className="oui-switch-slider"></span>
      <span className="oui-switch--text"></span>
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

