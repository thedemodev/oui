import React from 'react';
import PropTypes from 'prop-types';

import DiscloseRow from './Row';
import DiscloseHead from './Head';
import Table from '../Table';

let DiscloseTable = ({
    children,
    density,
    shouldAddHover,
    style,
    tableLayoutAlgorithm,
    testSection,
  }) => {
    return (
        <Table>
            { children }
        </Table>
    );
  };

DiscloseTable.Row = DiscloseRow;
DiscloseTable.Head = DiscloseHead;

export default DiscloseTable;