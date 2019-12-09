import PropTypes from 'prop-types';
import React from 'react';

var Wrapper = function Wrapper(props) {
  return React.createElement("div", {
    "data-oui-component": true,
    className: "overflow-y--auto flex--1",
    "data-test-section": props.testSection
  }, React.createElement("div", {
    className: "reading-column"
  }, React.createElement("div", {
    className: "push-quad--bottom"
  }, props.children)));
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  testSection: PropTypes.string
};
export default Wrapper;