import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Collapse extends Component {
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
      return <div key={ index }> {item} </div>;
    });
    return (
      <div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: columns ? columns : `repeat(${children[0].props.children.length}, 1fr)`,
            height: 50,
            padding: '15px 5px 15px 15px',
            borderBottom: '1px solid #f6f6f6',
          }}
          onClick={ this.handleToggle }>
          { elements }
        </div>
        <div>
          { this.state.isOpen && children[1] }
        </div>
      </div>
    );
  }
}

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.string,
  headings: PropTypes.array,
};

export default Collapse;
