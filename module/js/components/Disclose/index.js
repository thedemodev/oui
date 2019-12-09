function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { toClass } from 'recompose';
import { withToggle } from '../../utils/recompose-utils';

var Disclose = function Disclose(_ref) {
  var _classNames, _classNames2;

  var children = _ref.children,
      childrenStyle = _ref.childrenStyle,
      headerStyle = _ref.headerStyle,
      isOpen = _ref.isOpen,
      indented = _ref.indented,
      title = _ref.title,
      toggle = _ref.toggle;
  var contentClass = classNames('oui-disclose__content', (_classNames = {}, _defineProperty(_classNames, 'border--sides border--bottom', childrenStyle === 'border'), _defineProperty(_classNames, 'border--bottom', childrenStyle === 'divider' && isOpen), _classNames));
  var linkClass = classNames('oui-disclose__link link--dark soft-half flush', (_classNames2 = {}, _defineProperty(_classNames2, 'background--faint display--block', headerStyle === 'header'), _defineProperty(_classNames2, 'border--all background--faint display--block', headerStyle === 'header-bordered'), _defineProperty(_classNames2, 'hard--left', !indented), _classNames2));
  var arrowClass = classNames('oui-disclose', _defineProperty({}, 'is-active', isOpen));
  return React.createElement("div", {
    className: arrowClass,
    style: {
      marginTop: '-1px'
    }
  }, React.createElement("a", {
    onClick: toggle,
    className: linkClass
  }, React.createElement("div", {
    className: "oui-disclose__arrow"
  }, React.createElement("span", {
    className: "oui-disclose__symbol push-half--right"
  }), title)), React.createElement("div", {
    className: contentClass
  }, isOpen && children));
};

Disclose.propTypes = {
  children: PropTypes.node.isRequired,
  childrenStyle: PropTypes.string,
  headerStyle: PropTypes.string,
  indented: PropTypes.bool,
  isOpen: PropTypes.bool,
  noBorder: PropTypes.bool,
  title: PropTypes.string.isRequired,
  toggle: PropTypes.func
};
Disclose.defaultProps = {
  indented: true
};
export default withToggle(toClass(Disclose));