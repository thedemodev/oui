import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @name StoryStateWrapper
 * @description
 *  This HOC allows us to use React's useState hook within our Story (source: https://levelup.gitconnected.com/adding-state-to-storybook-in-react-c6744fda25b4).
 *  The initialValue or initialValues props are mutually exclusive.
 *  The prop initialValue can be used if only one piece of state is needed.
 *  Add an array of initialValues to return an array of state / setter arrays.
 *
 * @param {Object} props props from child component to be decorated
 * @param {*} initialValue (optional)
 *  For uses where only one state / setter is needed, sets initial state value.
 * @param {Array} initialValues (optional)
 *  For uses where multiple state / setters are needed,
 *  sets initial state values.
 *
 * @returns {ReactElement} Provided component decorated with state and setters
 */
export function StoryStateWrapper({ children, initialValue, initialValues }) {
  if (Array.isArray(initialValues)) {
    return children(initialValues.map(value => useState(initialValue)));
  }
  const [state, setState] = useState(initialValue);
  return children(state, setState);
}

StoryStateWrapper.propTypes = {
  initialValue: PropTypes.any,
  initialValues: PropTypes.arrayOf(PropTypes.any),
};

StoryStateWrapper.defaultProps = {
  initialValue: null,
  initialValues: null,
};
