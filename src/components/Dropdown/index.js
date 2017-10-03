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
          onBlur={ this.toggleOnBlur }>
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
  /** Button text, can be a string or element. */
  buttonContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /** Dropdown contents, typically using the <Blocklist> component. */
  children: PropTypes.node.isRequired,
  /** Button width is either full or inline-block. */
  fullWidth: PropTypes.bool,
  /** Unused... */
  handleClick: PropTypes.func,
  /** Show a dropdown arrow, true/false. */
  icon: PropTypes.bool,
  /** Disable button. */
  isDisabled: PropTypes.bool,
  /** Button style, e.g. highlight, danger, outline. */
  style: PropTypes.string,
  /** For automated testing only. */
  testSection: PropTypes.string,
  /** Dropdown menu width, in pixels. */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** Override default dropdown menu z-index. */
  zIndex: PropTypes.number,
};

export default Dropdown;
