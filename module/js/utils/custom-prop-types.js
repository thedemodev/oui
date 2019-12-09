import PropTypes from 'prop-types';
export var checkPropIsGreaterThanOrEqualTo = function checkPropIsGreaterThanOrEqualTo(numberToCheck, isRequired) {
  return function (props, propName, componentName) {
    if (isRequired) {
      if (props[propName] === undefined || props[propName] === null) {
        return new Error('Invalid prop `' + propName + '` (has value `' + props[propName] + '`) supplied to `' + componentName + '`. Must be defined.`');
      }
    }

    if (props[propName] < numberToCheck) {
      return new Error('Invalid prop `' + propName + '` (has value `' + props[propName] + '`) supplied to `' + componentName + '`. Must be greater than or equal to `' + numberToCheck + '.');
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return PropTypes.number.apply(PropTypes, [props, propName, componentName].concat(rest));
  };
};