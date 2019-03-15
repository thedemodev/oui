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
  children: PropTypes.node.isRequired,
  testSection: PropTypes.string,
};

export default Wrapper;
