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
  }

  handleMouseOverChildren = () => {
    this.setState({
      overChildren: true,
    });
  };

  handleMouseLeavingChildren = () => {
    this.setState({
      overChildren: false,
    });
  };

  handleOnBlur = () => {
    if (!this.state.overChildren) {
      this.setState({
        isOpen: false,
      });
    }
  };

  handleToggle = (event) => {
    this.setState({
      isOpen: !this.state.isOpen,
      overChildren: false,
    });
  };

  render() {
    const {
      arrowIcon,
      buttonContent,
      children,
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
        ['oui-arrow-inline--down']: arrowIcon === 'none' || arrowIcon === 'down',
        ['oui-arrow-inline--left']: arrowIcon === 'left',
        ['oui-arrow-inline--right']: arrowIcon === 'right',
        ['oui-arrow-inline--up']: arrowIcon === 'up',
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
  /** Arrow icon direction:
    * - Defaults to 'none', which hides the arrow
    * - passing a prop value of false also hides the arrow
    * - passing a prop value of true uses down arrow
    */
  arrowIcon: PropTypes.oneOf([
    'down',
    'left',
    'none',
    'right',
    'up',
  ]),
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
  hide: PropTypes.func,
  /** Disable button. */
  isDisabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  /** Button style, e.g. highlight, danger, outline. */
  style: PropTypes.string,
  /** For automated testing only. */
  testSection: PropTypes.string,
  toggle: PropTypes.func,
  /** Dropdown menu width, in pixels. */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** Override default dropdown menu z-index. */
  zIndex: PropTypes.number,
};

Dropdown.defaultProps = {
  arrowIcon: 'none',
};

export default Dropdown;
