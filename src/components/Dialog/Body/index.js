import PropTypes from 'prop-types';
import React from 'react';

const Body = props => (
  <div
    className="oui-dialog__body">
    { props.children }
  </div>
);

Body.propTypes = {
  /**
   * Contents of the dialog body. Can be anything.
   */
  children: PropTypes.node.isRequired,
};

export default Body;
