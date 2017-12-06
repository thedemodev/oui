import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Table from '../components/Table';

class CollapseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      overChildren: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    this.setState({
      isOpen: !this.state.isOpen,
      overChildren: false,
    });
  }

  render() {
    const {
      children,
      columns,
    } = this.props;
    const elements = children[0].props.children.map((item, index) => {
      return <Table.TD key={ index }> {item} </Table.TD>;
    });
    const content = this.state.isOpen ?
      <Table.TR>
        { children[1] }
      </Table.TR> :
      null;
    return [
      <Table.TR onClick={ this.handleToggle }>
          { elements }
      </Table.TR>,
      content
    ];
  }
}

CollapseTable.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.string,
  headings: PropTypes.array,
};

export default CollapseTable;
