import PropTypes from 'prop-types';
import React from 'react';

const Title = props => (
  <div className="oui-dialog__header">
    <h2 className="push--bottom">
      { props.children }
    </h2>
    { props.subtitle && (
      <p>
        { props.subtitle }
      </p>
    ) }
  </div>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
};

export default Title;
