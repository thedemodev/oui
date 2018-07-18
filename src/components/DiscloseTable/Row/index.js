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
        'oui-disclose__content',
        {
          ['border--sides border--bottom']: childrenStyle === 'border',
          ['border--bottom']: childrenStyle === 'divider' && isOpen,
        }
      );
    const linkClass = classNames(
        'oui-disclose__link link--dark soft-half flush',
        {
          ['background--faint display--block']: headerStyle === 'header',
          ['border--all background--faint display--block']: headerStyle === 'header-bordered',
        }
      );
    const arrow = isOpen ? 'oui-disclose is-active' : 'oui-disclose';
    const borderStyle = isOpen ?  'ends' : '';
    const backgroundColor = isOpen ? 'faint' : '';
    return(
      <div className={ arrow } style={{marginTop: '-1px'}}>
      <a onClick={ toggle } className={ linkClass }>
        <Table tableLayoutAlgorithm="auto" shouldAddHover={ true }>
          <Table.TBody>
            <Table.TR  borderStyle={ borderStyle } backgroundColor={ backgroundColor }>
            { rowContents }
            </Table.TR>
          </Table.TBody>
        </Table>
      </a>
      <div className={ contentClass }>
        { isOpen && children }
      </div>
      </div>
    );
  }

  export default withToggle(toClass(DiscloseRow));