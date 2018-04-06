import PropTypes from 'prop-types';
import React from 'react';

const RangeSlider = (props) => {
  const { value, onChange } = props;
  return (
    <div className="oui-rangeslider" data-test-section={ props.testSection }>
      <div className="oui-grid">
        <div className="oui-grid__cell position--relative">
          <div className="flex">
            <label className="oui-label muted flush flex--1">0%</label>
            <label className="oui-label muted flush">100%</label>
          </div>
          <div className="range-display">
            <div
              className="range-display range-display-overlay"
              style={{ left: value + '%' }}>
            </div>
          </div>
          <div className="range-grid">
            <div className="gridline grid-1"></div>
            <div className="gridline grid-2"></div>
            <div className="gridline grid-3"></div>
            <div className="gridline grid-4"></div>
            <div className="gridline grid-5"></div>
            <div className="gridline gridline-half grid-h1"></div>
            <div className="gridline gridline-half grid-h2"></div>
            <div className="gridline gridline-half grid-h3"></div>
            <div className="gridline gridline-half grid-h4"></div>
          </div>
          <input
            className="hard position--relative width--1-1"
            data-traffic-group="1"
            type="range"
            min="0"
            max="100"
            step="1"
            value={ value }
            onChange={ onChange }
          />
        </div>
      </div>
    </div>
  );
};

RangeSlider.propTypes = {
  /** onChange function */
  onChange: PropTypes.func,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** The value */
  value: PropTypes.number,
};

export default RangeSlider;
