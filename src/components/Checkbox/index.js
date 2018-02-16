import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../Label';

/**
 * Generates a `checkbox` element wrapped in a Label
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Checkbox = ({
  checked,
  defaultChecked,
  isDisabled,
  label,
  onChange,
  testSection,
}) => {
  const labelClassNames = classNames({
    'flush--bottom': true,
    'push--left': true,
    'weight--normal': true,
    'cursor--pointer': true,
    'oui-label--disabled': isDisabled,
  });
  const classes = classNames({
    'flex--none': true,
    'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
  });
  return (
    <Label testSection={ testSection && testSection + '-label' }>
      <div className="flex">
        <input
          data-oui-component={ true }
          type="checkbox"
          defaultChecked={ defaultChecked }
          checked={ checked }
          className={ classes }
          disabled={ isDisabled }
          onChange={ onChange }
          data-test-section={ testSection }
          style={{ 'marginTop': '0.35em' }}
        />
        <div className={ labelClassNames }>
          { label }
        </div>
      </div>
    </Label>
  );
};

Checkbox.propTypes = {
  /** Boolean to set checkbox, for controlled component  */
  checked: PropTypes.bool,
  /** Boolean for how checkbox renders initially  */
  defaultChecked: PropTypes.bool,
  /** Prevents checkbox from being modified and appears disabled */
  isDisabled: PropTypes.bool,
  /** Text that describes the checkbox */
  label: PropTypes.string,
  /** Function that fires when the checkbox is clicked */
  onChange: PropTypes.func,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

export default Checkbox;
