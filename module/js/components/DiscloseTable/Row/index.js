function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { toClass } from 'recompose';
import { withToggle } from '../../../utils/recompose-utils';

var DiscloseRow = function DiscloseRow(_ref) {
  var isOpen = _ref.isOpen,
      children = _ref.children,
      rowContents = _ref.rowContents,
      toggle = _ref.toggle;
  var linkClass = classNames('oui-disclose-table--row__toggle', _defineProperty({}, 'is-active', isOpen));
  return React.createElement(React.Fragment, null, React.createElement("tr", {
    onClick: toggle,
    className: linkClass
  }, React.createElement("td", {
    className: "soft--left vertical-align--middle"
  }, React.createElement("span", {
    className: "oui-disclose__symbol push-half--right"
  })), rowContents), isOpen && React.createElement("tr", {
    className: "oui-disclose-table--row__content"
  }, React.createElement("td", {
    colSpan: rowContents.length + 1
  }, children)));
};

DiscloseRow.propTypes = {
  /** Can be any valid HTML node */
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  rowContents: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};
export default withToggle(toClass(DiscloseRow));