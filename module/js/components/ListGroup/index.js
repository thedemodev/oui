import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var ListGroup = function ListGroup(_ref) {
  var children = _ref.children,
      subtitle = _ref.subtitle,
      testSection = _ref.testSection,
      title = _ref.title;
  return React.createElement("div", {
    className: "oui-listgroup flex soft--top soft--bottom border--bottom",
    "data-test-section": testSection
  }, React.createElement("div", {
    className: "width--1-4"
  }, React.createElement("div", {
    className: "zeta muted weight--normal"
  }), React.createElement("div", {
    className: "epsilon line--tight force-break"
  }, title), React.createElement("div", {
    className: "micro muted push-half--ends"
  }, subtitle)), React.createElement("div", {
    className: "group flex--1 soft--left"
  }, children));
};
ListGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  subtitle: PropTypes.string,
  testSection: PropTypes.string,
  title: PropTypes.string
};
ListGroup.defaultProps = {
  subtitle: '',
  testSection: '',
  title: ''
};
export var ListGroupItem = function ListGroupItem(_ref2) {
  var children = _ref2.children,
      testSection = _ref2.testSection,
      density = _ref2.density;
  var classes = classNames({
    'listgroup__item': true,
    'border--bottom': true,
    'soft--bottom soft--top': density === 'tight',
    'soft-double--bottom soft-double--top': density === 'loose'
  });
  return React.createElement("div", {
    className: classes,
    "data-test-section": testSection
  }, children);
};
ListGroupItem.propTypes = {
  children: PropTypes.node.isRequired,
  density: PropTypes.oneOf(['tight', 'loose']),
  testSection: PropTypes.string
};
ListGroupItem.defaultProps = {
  density: 'loose'
};
ListGroup.Item = ListGroupItem;
export default ListGroup;