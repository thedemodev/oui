import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TR = ({
  isActive,
  noBorder,
  testSection,
  children,
}) => {
  let classes = classNames({
    'oui-table-row--active': isActive,
    'no-border': noBorder,
  });
  return (
    <tr
      className={ classes }
      data-test-section={ testSection }>
      { children }
    </tr>
  );
};

TR.propTypes = {
  /** Expects a `Table.TD` or `Table.TH` component */
  children: PropTypes.node,
  /** If true, add active class */
  isActive: PropTypes.bool,
  /** If true, add class to remove border */
  noBorder: PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

TR.displayName = 'Table.TR';

export default TR;
