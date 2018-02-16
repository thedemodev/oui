import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      overChildren: false,
    };
  }

  handleToggle = (event) => {
    this.setState({
      isOpen: !this.state.isOpen,
      overChildren: false,
    });
  }

  render() {
    const {
      children,
      headerStyle,
      childrenStyle,
      title,
    } = this.props;
    return (
      <div >
        <a onClick={ this.handleToggle }>
          <div style={{ fontWeight: 'bolder'}}>
            { title }
          </div>
        </a>
        <div style={{ marginLeft: 10 }} >
          { this.state.isOpen && children }
        </div>
      </div>
    );
  }
}

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  childrenStyle: PropTypes.string,
  headerStyle: PropTypes.string,
  noBorder: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default Collapse;