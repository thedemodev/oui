import React from 'react';
import PropTypes from 'prop-types';

var Category = function Category(props) {
  return React.createElement("li", {
    className: "oui-block-list__category",
    "data-test-section": props.testSection
  }, props.header && React.createElement("div", {
    className: "oui-block-list__category__name soft-half--ends soft--sides",
    style: {
      wordBreak: 'break-word'
    }
  }, props.header), props.children && React.createElement("ul", null, props.children));
};

Category.propTypes = {
  /** Items that appears within the category */
  children: PropTypes.node.isRequired,

  /** Node or component that appears above the `children` */
  header: PropTypes.node,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
Category.displayName = 'BlockList.Category';
export default Category;