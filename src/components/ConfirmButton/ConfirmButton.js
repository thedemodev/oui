import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import Button from '../Button';
import ButtonRow from '../ButtonRow';

/**
 * ConfirmButton
 * This component render a cancel/confirm button group
 */

const ConfirmButton = (props) => {
  const {
    cancelStyle,
    cancelText,
    confirmStyle,
    confirmText,
    disableCancel,
    disableConfirm,
    isSubmit,
    onCancel,
    onConfirm,
  } = props;

  return (
    <ButtonRow
      rightGroup={ [
        <Button
          key='1'
          onMouseDown={ onCancel }
          testSection='confirm-button-cancel-button'
          isDisabled={ disableCancel }
          style={ cancelStyle }>
          { cancelText }
        </Button>,
        <Button
          key='2'
          onMouseDown={ onConfirm }
          isDisabled={ disableConfirm }
          isSubmit={ isSubmit }
          testSection='confirm-button-confirm-button'
          style={ confirmStyle }>
          { confirmText }
        </Button>,
      ] }
    />
  );
};

ConfirmButton.defaultProps = {
  disableCancel: false,
  disableConfirm: false,
  cancelStyle: 'plain',
  confirmStyle: 'highlight',
  cancelText: 'Cancel',
  confirmText: 'Save',
  isSubmit: true,
  onCancel: noop,
  onConfirm: noop,
};

ConfirmButton.propTypes = {
  /** Sets style of cancel button */
  cancelStyle: PropTypes.oneOf([
    'highlight',
    'danger',
    'danger-outline',
    'outline',
    'outline-reverse',
    'plain',
    'toggle',
    'underline',
    'unstyled',
  ]),
  /** Cancel button text */
  cancelText: PropTypes.string,
  /** Sets style of confirm button */
  confirmStyle: PropTypes.oneOf([
    'highlight',
    'danger',
    'danger-outline',
    'outline',
    'outline-reverse',
    'plain',
    'toggle',
    'underline',
    'unstyled',
  ]),
  /** Confirm button text */
  confirmText: PropTypes.string,
  /** Determines if the cancel button is disabled */
  disableCancel: PropTypes.bool,
  /** Determines if the confirm button is disabled */
  disableConfirm: PropTypes.bool,
  /** Determines if confirm button is a submit button */
  isSubmit: PropTypes.bool,
  /** Function that is called when cancel button is clicked */
  onCancel: PropTypes.func,
  /** Function that is called when confirm button is clicked */
  onConfirm: PropTypes.func,
};

export default ConfirmButton;
