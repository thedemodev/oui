import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Button from '../Button';
import Icon from 'react-oui-icons';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 * @private
 */

const CopyButton = ({
  testSection,
  text,
}) => {
  return (
    <CopyToClipboard
      text={ text }>
      <Button
        style="plain"
        ariaLabel="Copy code snippet"
        testSection={ testSection }>
        <Icon name='clipboard' />
      </Button>
    </CopyToClipboard>
  );
};

CopyButton.propTypes = {
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** The text or code that will be copied */
  text: PropTypes.string.isRequired,
};

export default CopyButton;
