import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const {
      buttonContent,
      children,
      icon = true,
      isDisabled = false,
      fullWidth,
      style,
      testSection,
      width = 200,
      zIndex = 999,
    } = this.props;

    const buttonClass = classNames(
      'oui-button',
      { [`oui-button--${style}`]: style },
      { ['oui-button--full soft--left text--left']: fullWidth }
    );

    const iconClass = classNames(
      'push-half--left',
      {
        ['oui-arrow-inline--down']: icon,
      }
    );

    return (
      <div
        data-ui-component={ true }
        ref='dropdown'
        className='oui-dropdown-group'
        data-test-section={ testSection }>
        <button
          className={ buttonClass }
          disabled={ isDisabled }
          onClick={ this.toggle }
          style={{ marginBottom: 2 }}>
          <div className='flex'>
            <div className='flex--1 truncate'>{ buttonContent }</div>
            <div className='text--right'><span className={ iconClass }></span></div>
          </div>
        </button>
        <div style={{zIndex: zIndex, position: 'absolute', width: width}}>
          { this.state.isOpen && !isDisabled && children }
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  buttonContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  handleClick: PropTypes.func,
  icon: PropTypes.bool,
  isDisabled: PropTypes.bool,
  style: PropTypes.string,
  testSection: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  zIndex: PropTypes.number,
};

export default Dropdown;
