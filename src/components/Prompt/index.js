import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-oui-icons';
import ButtonRow from '../ButtonRow';

const Prompt = props => (
  <div className="oui-prompt__wrapper">
    <div className="oui-prompt__overlay" />
    <div
      data-ui-component={ true }
      className="oui-prompt overflow-y--auto"
      data-test-section={ props.testSection }>
      {props.hasCloseButton && (
        <button className="oui-dialog__close" onClick={ props.onClose }>
          <Icon name="close" />
        </button>
      )}
      <div className="oui-prompt__header">
        <h2 className="push--bottom">{props.title}</h2>
      </div>
      <div className="oui-prompt__body">
        <p>
          {props.bodyText}
          {props.linkURL && (
            <a className="oui-prompt__link" href={ props.linkURL }>
              Learn more
            </a>
          )}
        </p>
      </div>
      <div className="oui-prompt__footer">
        <ButtonRow rightGroup={ props.footerButtonContent }/>
      </div>
    </div>
  </div>
);

Prompt.propTypes = {
  bodyText: PropTypes.node.isRequired,
  footerButtonContent: PropTypes.array.isRequired,
  hasCloseButton: PropTypes.bool,
  linkURL: PropTypes.string,
  onClose: PropTypes.func,
  testSection: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Prompt.defaultProps = {
  hasCloseButton: true,
};

export default Prompt;
