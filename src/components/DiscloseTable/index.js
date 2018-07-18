import React from 'react';
import PropTypes from 'prop-types';

import DiscloseRow from './Row';
import DiscloseHead from './Head';

let DiscloseTable = ({
    children,
    density,
    shouldAddHover,
    style,
    tableLayoutAlgorithm,
    testSection,
  }) => {
    return (
        <div>
            { children }
        </div>
    );
  };

DiscloseTable.Row = DiscloseRow;
DiscloseTable.Head = DiscloseHead;

export default DiscloseTable;