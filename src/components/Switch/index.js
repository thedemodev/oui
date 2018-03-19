import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({
  onClick,
  elementId = 'switch1',
  checked,
}) => {
  return (
    <div className='position--relative' data-oui-component={ true }>
      <input type="checkbox" id={ elementId } className="oui-switch" checked={ checked } onClick={ onClick }/>
      <label htmlFor={ elementId } data-on-label="On" data-off-label="Off"></label>
    </div>
  );
};

Switch.propTypes = {
  // checked true means the switch is on; false is off
  checked: PropTypes.bool,
  // string for label/input id pair, should be unique to the page
  elementId: PropTypes.string,
  // onClick function
  onClick: PropTypes.func,
};

export default Switch;
