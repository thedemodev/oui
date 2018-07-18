import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { toClass } from 'recompose';
import { withToggle } from '../../../utils/recompose-utils';
import Table from '../../Table';

const DiscloseRow = ({
    isOpen,
    children,
    headerStyle,
    childrenStyle,
    rowContents,
    toggle,
  }) => {
    const contentClass = classNames(
        {
          ['border--sides border--bottom']: isOpen,
        }
      );
    const linkClass = classNames(
        'oui-disclose link--dark soft-half flush',
        {
          'is-active border--top border--sides': isOpen
        },
      );
    const borderStyle = isOpen ?  'ends' : '';
    const backgroundColor = isOpen ? 'faint' : '';
    return(
      <React.Fragment>
        <Table.TR onClick={ toggle } className={ linkClass } borderStyle={ borderStyle } backgroundColor={ backgroundColor }>
          <Table.TD className='oui-disclose__arrow'>
            <span className="oui-disclose__symbol push-half--right"></span>
          </Table.TD>
          { rowContents }
        </Table.TR>
        <Table.TR className={contentClass}>
          <Table.TD colSpan={ rowContents.length + 1 }>
            <div>
              { isOpen && children }
            </div>
          </Table.TD>
        </Table.TR>
      </React.Fragment>
    );
  }

  export default withToggle(toClass(DiscloseRow));