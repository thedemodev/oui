import React from 'react';
import PropTypes from 'prop-types';

var EmptyDashboard = function EmptyDashboard(_ref) {
  var button = _ref.button,
      imageHeight = _ref.imageHeight,
      imagePath = _ref.imagePath,
      imageWidth = _ref.imageWidth,
      headline = _ref.headline,
      description = _ref.description,
      descriptionMaxWidth = _ref.descriptionMaxWidth,
      showButtonBelow = _ref.showButtonBelow,
      testSection = _ref.testSection;
  return React.createElement("div", {
    "data-oui-component": true,
    className: "flex flex--column overflow-y--scroll flex--1",
    "data-test-section": "layers-empty-state"
  }, button && !showButtonBelow && React.createElement("div", {
    className: "flex push-quad--sides oui-empty-dashboard__button-row flex-justified--end"
  }, button), React.createElement("div", {
    className: "anchor--middle height--1-1 flex flex--row flex-align--center"
  }, React.createElement("div", {
    "data-oui-component": true,
    className: "text--center soft-quad",
    "data-test-section": testSection
  }, imagePath && React.createElement("div", {
    className: "push-double--bottom"
  }, React.createElement("img", {
    src: imagePath,
    className: "svg--non-scaling-stroke display--inline",
    style: {
      maxWidth: '450px',
      maxHeight: '290px',
      height: imageHeight,
      width: imageWidth
    },
    "data-test-section": testSection && "".concat(testSection, "-image"),
    alt: ""
  })), headline && React.createElement("h1", {
    className: "alpha push--bottom",
    "data-test-section": testSection && "".concat(testSection, "-headline")
  }, headline), description && React.createElement("div", {
    className: "muted push--bottom anchor--middle",
    style: {
      maxWidth: descriptionMaxWidth
    },
    "data-test-section": testSection && "".concat(testSection, "-description")
  }, description), button && showButtonBelow && React.createElement("div", {
    className: "push-double--top"
  }, button))));
};

EmptyDashboard.propTypes = {
  /** A button, link, or other element that is actionable */
  button: PropTypes.node,

  /** A string or `div` containing longer text that describes the empty state */
  description: PropTypes.element,

  /** Max width of description. Accepts any valid CSS width value. */
  descriptionMaxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Short text about the empty state */
  headline: PropTypes.string.isRequired,

  /** String to set the max image height */
  imageHeight: PropTypes.string,

  /** Path to an image representing the empty state */
  imagePath: PropTypes.string,

  /** String to set the max image width */
  imageWidth: PropTypes.string,

  /**
   * Boolean used to show the button below the image
   * instead of top right corner of the empty state
   */
  showButtonBelow: PropTypes.bool,

  /** Identifier used to create data-test-section attributes for testing */
  testSection: PropTypes.string
};
EmptyDashboard.getDefaultProps = {
  descriptionMaxWidth: '450px',
  imageHeight: 'inherit',
  imageWidth: 'inherit',
  showButtonBelow: false,
  testSection: 'empty-hello'
};
export default EmptyDashboard;