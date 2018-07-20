import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { toClass } from 'recompose';
import { withToggle } from '../../../utils/recompose-utils';
import Table from '../../Table';

const DiscloseRow = ({
  isOpen,
  children,
  rowContents,
  toggle,
}) => {
  const contentClass = classNames(
    {
      ['border--sides border--bottom']: isOpen,
      ['is-hidden']: !isOpen,
    }
  );
  const linkClass = classNames(
    'oui-disclose link--dark soft-half--ends soft--sides',
    {
      ['is-active border--top border--sides']: isOpen,
    },
  );
  const borderStyle = isOpen ? 'ends' : 'none';
  const backgroundColor = isOpen ? 'faint' : null;
  return (
    <React.Fragment>
      <Table.TR onClick={toggle} className={linkClass} borderStyle={borderStyle} backgroundColor={backgroundColor}>
        <Table.TD className='oui-disclose__arrow soft--left'>
          <span className="oui-disclose__symbol push-half--right"></span>
        </Table.TD>
        {rowContents}
      </Table.TR>
      {
        isOpen && (
          <Table.TR className={contentClass}>
            <Table.TD colSpan={rowContents.length + 1}>
              {children}
            </Table.TD>
          </Table.TR>
        )
      }
    </React.Fragment>
  );
}

DiscloseRow.propTypes = {
  isOpen: PropTypes.bool,
  /** Can be any valid HTML node */
  children: PropTypes.node,
  rowContents: PropTypes.array,
  toggle: PropTypes.func,
};

export default withToggle(toClass(DiscloseRow));