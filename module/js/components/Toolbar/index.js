function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

var Toolbar = function Toolbar(props) {
  var toolbarContentClasses = classNames({
    toolbar__content: true,
    'background--white': props.isBottomToolbar,
    'border--top': props.isBottomToolbar,
    'no-border--bottom': props.isBottomToolbar,
    'hard--left': props.isBottomToolbar
  });
  return React.createElement("div", {
    "data-oui-component": true,
    className: "toolbar",
    "data-test-section": props.testSection
  }, React.createElement("div", {
    className: toolbarContentClasses
  }, props.children));
};

Toolbar.defaultProps = {
  isBottomToolbar: false
};
Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
  isBottomToolbar: PropTypes.bool,
  testSection: PropTypes.string
};

var Left = function Left(props) {
  return React.createElement("div", {
    className: "toolbar__left"
  }, props.children);
};

Left.propTypes = {
  children: PropTypes.node.isRequired
};

var Right = function Right(props) {
  return React.createElement("div", {
    className: "toolbar__right"
  }, props.children);
};

Right.propTypes = {
  children: PropTypes.node.isRequired
};

var ToolbarButtonContents = function ToolbarButtonContents(props) {
  return React.createElement("div", {
    className: "flex flex-align--center editor__select-size__text"
  }, props.icon && React.createElement("svg", {
    className: "lego-icon push--right vertical-align--middle"
  }, React.createElement("use", {
    xlinkHref: props.icon
  })), React.createElement("div", null, props.title && React.createElement("div", {
    className: "editor__select-size__value"
  }, props.title), React.createElement("span", null, props.label)), props.isDropdown && React.createElement("span", {
    className: "lego-arrow-inline--down push--left"
  }));
};

ToolbarButtonContents.propTypes = {
  icon: PropTypes.string,
  isDropdown: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.node.isRequired]).isRequired,
  title: PropTypes.string
};

var ToolbarLink = function ToolbarLink(props, context) {
  var _classNames;

  return React.createElement("a", {
    className: classNames((_classNames = {
      flex: true,
      toolbar__button: true,
      'is-active': props.isActive
    }, _defineProperty(_classNames, 'link--disabled', props.isDisabled), _defineProperty(_classNames, 'pointer-events--none', props.isDisabled), _classNames)),
    isDisabled: props.isDisabled,
    testSection: props.testSection,
    href: props.href
  }, ToolbarButtonContents(props));
};

ToolbarLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isDropdown: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.node.isRequired]).isRequired,
  onClick: PropTypes.func,
  testSection: PropTypes.string,
  title: PropTypes.string
};

var ToolbarButton = function ToolbarButton(props, context) {
  return React.createElement("button", {
    className: classNames({
      toolbar__button: true,
      'is-active': props.isActive
    }),
    type: "button",
    disabled: props.isDisabled,
    "data-test-section": props.testSection,
    "data-track-id": props.testSection,
    onClick: props.onClick
  }, ToolbarButtonContents(props));
};

ToolbarButton.propTypes = {
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isDropdown: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string.isRequired]).isRequired,
  onClick: PropTypes.func,
  testSection: PropTypes.string,
  title: PropTypes.string
};
ToolbarButton.defaultProps = {
  isDropdown: false,
  isActive: false,
  isDisabled: false
};
Toolbar.Button = ToolbarButton;
Toolbar.Link = ToolbarLink;
Toolbar.Right = Right;
Toolbar.Left = Left;
export default Toolbar;