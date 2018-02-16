import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const LinkActive = (props) => {
  if (props.currentRoute !== props.to) {
    return (
      <Link to={ props.to }>
        { props.children }
      </Link>
    );
  }

  return <span>{ props.children }</span>;
};

LinkActive.propTypes = {
  children: PropTypes.node.isRequired,
  currentRoute: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkActive;
