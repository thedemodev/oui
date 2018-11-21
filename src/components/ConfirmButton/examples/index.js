/* eslint-disable react/jsx-key */
import React from 'react';
import ConfirmButton from '../index';

export default [
  {
    examples: [
      <ConfirmButton
        disableCancel={ false }
        disableConfirm={ false }
        cancelStyle='plain'
        cancelText='Cancel'
        confirmStyle='highlight'
        confirmText='Save'
      />,
    ],
  },
];
