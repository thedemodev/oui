import PropTypes from 'prop-types';

export const checkPropIsGreaterThanOrEqualTo = (numberToCheck, isRequired) => {
  return function(props, propName, componentName, ...rest) {
    if (isRequired) {
      if (props[propName] === undefined || props[propName] === null) {
        return new Error(
          'Invalid prop `' + propName +
            '` (has value `' + props[propName] +
            '`) supplied to `' + componentName + '`. Must be defined.`'
        );
      }
    }
    if (props[propName] < numberToCheck) {
      return new Error(
        'Invalid prop `' + propName +
          '` (has value `' + props[propName] +
          '`) supplied to `' + componentName +
          '`. Must be greater than or equal to `' + numberToCheck + '.'
      );
    }
    return PropTypes.number(props, propName, componentName, ...rest);
  };
};
