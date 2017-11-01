import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      overChildren: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleMouseOverChildren = this.handleMouseOverChildren.bind(this);
    this.handleMouseLeavingChildren = this.handleMouseLeavingChildren.bind(this);
  }

  handleMouseOverChildren() {
    this.setState({
      overChildren: true,
    });
  }

  handleMouseLeavingChildren() {
    this.setState({
      overChildren: false,
    });
  }

  handleOnBlur() {
    if (!this.state.overChildren) {
      this.setState({
        isOpen: false,
      });
    }
  }

  handleToggle(event) {
    this.setState({
      isOpen: !this.state.isOpen,
      overChildren: false,
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

    const groupClass = classNames(
      'oui-dropdown-group',
      { ['width--1-1']: fullWidth }
    );

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
        className={ groupClass }
        data-test-section={ testSection }>
        <button
          type='button'
          className={ buttonClass }
          disabled={ isDisabled }
          onClick={ this.handleToggle }
          onBlur={ this.handleOnBlur }>
          <div className='flex'>
            <div className='flex--1 truncate'>{ buttonContent }</div>
            <div className='text--right'><span className={ iconClass }></span></div>
          </div>
        </button>
        <div
          className='oui-dropdown-children'
          style={{zIndex: zIndex, position: 'absolute', width: width}}
          onMouseOver={ this.handleMouseOverChildren }
          onMouseLeave={ this.handleMouseLeavingChildren }
          onClick={ this.handleToggle } >
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
