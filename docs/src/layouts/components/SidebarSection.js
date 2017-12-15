import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SidebarSection extends Component {
  render() {
    const {
      children,
      title,
    } = this.props;
    return (
      <div >
        <a onClick={ this.handleToggle }>
          <div style={{ fontWeight: 'bolder', textTransform: 'uppercase'}}>
            { title }
          </div>
        </a>
        <div style={{ paddingLeft: 10 }}>
          { children }
        </div>
      </div>
    );
  }
}

SidebarSection.propTypes = {
  children: PropTypes.node.isRequired,
  childrenStyle: PropTypes.string,
  headerStyle: PropTypes.string,
  noBorder: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default SidebarSection;