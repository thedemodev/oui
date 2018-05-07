import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Manager, Popper, Target } from 'react-popper';
import { withState } from 'recompose';
import { withToggle } from '../../utils/recompose-utils';

@withState('overChildren', 'setOverChildren', false)
class Dropdown extends React.Component {
  handleOnBlur = () => {
    if (!this.props.overChildren) {
      this.props.hide();
    }
  };

  handleToggle = () => {
    this.props.setOverChildren(false);
    this.props.toggle();
  };

  onMouseOver = () => this.props.setOverChildren(true);

  onMouseLeave = () => this.props.setOverChildren(false);

  render() {
    const {
      arrowIcon,
      buttonContent,
      children,
      isDisabled = false,
      isOpen,
      displayError = false,
      fullWidth,
      placement = 'bottom-start',
      style,
      testSection,
      width = 200,
      zIndex = 999,
    } = this.props;

    const groupClass = classNames(
      'oui-dropdown-group',
      {['width--1-1']: fullWidth},
      {['oui-form-bad-news']: displayError}
    );

    const buttonClass = classNames(
      'oui-button',
      {[`oui-button--${style}`]: style},
      {['oui-button--full soft--left text--left']: fullWidth}
    );

    const iconClass = classNames(
      'push-half--left',
      {
        ['oui-arrow-inline--down']: arrowIcon === true || arrowIcon === 'down',
        ['oui-arrow-inline--left']: arrowIcon === 'left',
        ['oui-arrow-inline--right']: arrowIcon === 'right',
        ['oui-arrow-inline--up']: arrowIcon === 'up',
      }
    );

    return (
      <Manager
        data-ui-component={ true }
        className={ groupClass }
        data-test-section={ testSection }>
        <Target>
          <button
            type='button'
            className={ buttonClass }
            disabled={ isDisabled }
            onClick={ this.handleToggle }
            onBlur={ this.handleOnBlur }>
            <div className='flex'>
              <div className='flex--1 truncate'>{ buttonContent }</div>
              {
                !!arrowIcon && arrowIcon !== 'none' && (
                  <div className='text--right'><span className={ iconClass }/></div>
                )
              }
            </div>
          </button>
        </Target>
        <Popper
          placement={ placement }
          className='oui-dropdown-children'
          style={{
            zIndex: zIndex,
            position: 'absolute',
            width: width,
            marginTop: 2,
            marginBottom: 2,
            boxShadow: '0 2px 3px rgba(0,0,0,.1)',
          }}
          onMouseOver={ this.onMouseOver }
          onMouseLeave={ this.onMouseLeave }
          onClick={ this.handleToggle }>
          { isOpen && !isDisabled && children }
        </Popper>
      </Manager>
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
  /** Show error state. */
  displayError: PropTypes.bool,
  /** Button width is either full or inline-block. */
  fullWidth: PropTypes.bool,
  /** Unused... */
  handleClick: PropTypes.func,
  hide: PropTypes.func,
  /** Disable button. */
  isDisabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  /* Whether or not the children are currently moused over */
  overChildren: PropTypes.bool,
  /** Popper placement property */
  placement: PropTypes.oneOf([
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
  ]),
  /* Control for overChildren value */
  setOverChildren: PropTypes.bool,
  /** Button style, e.g. highlight, danger, outline. */
  style: PropTypes.string,
  /** For automated testing only. */
  testSection: PropTypes.string,
  /** Toggle control for isOpen. */
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

export default withToggle(Dropdown);
