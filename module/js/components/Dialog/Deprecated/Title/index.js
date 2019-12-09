import PropTypes from 'prop-types';
import React from 'react';

var Title = function Title(props) {
  return React.createElement("div", {
    className: "push-quad--bottom"
  }, React.createElement("div", {
    className: "beta push--bottom"
  }, props.children), props.subtitle && React.createElement("div", {
    className: "push--bottom"
  }, props.subtitle));
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.node
};
export default Title;