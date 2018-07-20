import React from 'react';
import PropTypes from 'prop-types';

import DiscloseRow from './Row';
import Table from '../Table';

let DiscloseTable = ({
	children,
	testSection,
}) => {
	return (
		<div className={'oui-disclose-table'} data-test-section={ testSection }>
			<Table tableLayoutAlgorithm={'auto'} style={'rule'} shouldAddHover={true}>
				{children}
			</Table>
		</div>
	);
};

DiscloseTable.propTypes = {
	/** Should be a `Table.THead` or `Table.TBody` */
	children: PropTypes.node.isRequired,
	/** Hook for automated JavaScript tests */
	testSection: PropTypes.string,
};

DiscloseTable.Row = DiscloseRow;

export default DiscloseTable;