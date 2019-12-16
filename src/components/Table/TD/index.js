import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TD = ({
  children,
  colSpan,
  isNumerical = false,
  testSection,
  textWrap = false,
  verticalAlign,
  width,
}) => {
  let classes = classNames({
    'oui-numerical': isNumerical,
    'nowrap': textWrap,
    [`vertical-align--${ verticalAlign }`]: verticalAlign,
  });

  const styles = {
    width: width,
  };

  return (
    <td
      className={ classes }
      data-test-section={ testSection }
      style={ styles }
      colSpan={ colSpan }>
      { children }
    </td>
  );
};

TD.propTypes = {
  /** Content within the `Table.TD` component */
  children: PropTypes.node,
  /** Number of columns that the cell should span */
  colSpan: PropTypes.number,
  /** Right-align the cell if the contents are numerical */
  isNumerical: PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** Right-align the cell if the contents are numerical */
  textWrap: PropTypes.bool,
  /** Apply a class that vertically aligns the cells within the children */
  verticalAlign: PropTypes.oneOf(['top', 'middle']),
  /** A number with a unit that becomes the width of the `Table` cell */
  width: PropTypes.string,
};

TD.displayName = 'Table.TD';

export default TD;
