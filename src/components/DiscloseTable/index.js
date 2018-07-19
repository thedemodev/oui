import React from 'react';
import PropTypes from 'prop-types';

import DiscloseRow from './Row';
import DiscloseHead from './Head';
import Table from '../Table';

let DiscloseTable = ({
    children,
    testSection,
  }) => {
    return (
        <div className={ 'oui-disclose-table' }>
            <Table tableLayoutAlgorithm={ 'auto' }>
                { children }
            </Table>
        </div>
    );
  };

DiscloseTable.Row = DiscloseRow;
DiscloseTable.Head = DiscloseHead;

export default DiscloseTable;