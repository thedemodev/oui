import React from 'react';
import PropTypes from 'prop-types';

import Table from '../Table';
import Row from './Row';

let DiscloseTable = ({
    children,
    density,
    shouldAddHover,
    style,
    tableLayoutAlgorithm,
    testSection,
  }) => {
    return (
        <Table
            data-oui-component={ true }
            data-test-section={ 'testSection' }
            shouldAddHover={ true }
            style={ 'auto' }>
            { children }
        </Table>
    );
  };

DiscloseTable.Row = Row;

export default DiscloseTable;