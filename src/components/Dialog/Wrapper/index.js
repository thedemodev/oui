import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-oui-icons';

const Wrapper = props => (
  <div className="oui-dialog__wrapper">
    <button className="oui-dialog__close">
      <Icon name="close" />
    </button>
    <div className="oui-dialog__container">
      <div
        data-ui-component={ true }
        className="oui-dialog"
        data-test-section={ props.testSection }>
        {props.children}
      </div>
    </div>
  </div>
);

Wrapper.propTypes = {
  /**
   * Contents of the dialog - usually a title, body, and footer.
   */
  children: PropTypes.node.isRequired,
  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: PropTypes.string,
};

export default Wrapper;
