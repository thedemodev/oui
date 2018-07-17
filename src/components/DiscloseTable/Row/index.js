import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { toClass } from 'recompose';
import { withToggle } from '../../../utils/recompose-utils';
import Table from '../../Table';
import TBody from '../../Table/TBody';

const Row = ({
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
    return(
        <a onClick={ toggle } className={ linkClass }>
        {[ rowContents ]}
        </a>
    );
    // return(
    //     <div className={ arrow } style={{marginTop: '-1px'}}>
    //     <a onClick={ toggle } className={ linkClass }>
    //         <div className='oui-disclose__arrow'>
    //         <span className="oui-disclose__symbol push-half--right"></span>
    //             <Table><Table.TBody>
    //             { rowContents }
    //             </Table.TBody></Table>
    //         </div>
    //     </a>
    //     <div className={ contentClass }>
    //         { isOpen && children }
    //     </div>
    //     </div>
    // );
  }

  export default withToggle(toClass(Row));