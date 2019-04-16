import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Col from './Col';
import Row from './Row';
import Container from './Container';

class Grid extends React.Component {
  static displayName = 'Dropdown';

  handleOnBlur = () => {
    if (!this.props.overChildren) {
      this.props.hide();
    }
  };

  handleToggle = () => {
    if (this.props.isDisabled) {
      return;
    }
    this.props.setOverChildren(false);
    this.props.toggle();
  };

  onMouseOver = () => this.props.setOverChildren(true);

  onMouseLeave = () => this.props.setOverChildren(false);

  render() {
    const {
      activator,
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
      {['oui-form-bad-news']: displayError},
      {['is-active']: isOpen},
    );

    const buttonClass = classNames(
      'oui-button',
      {[`oui-button--${style}`]: style},
      {['oui-button--full soft--left text--left']: fullWidth}
    );

    const iconClass = classNames(
      'push-half--left',
      {
        ['oui-arrow-inline--down']: arrowIcon === 'down',
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
          {
            buttonContent && (
              <button
                type='button'
                className={ buttonClass }
                disabled={ isDisabled }
                onClick={ this.handleToggle }
                onBlur={ this.handleOnBlur }>
                <div className='flex flex-align--center'>
                  <div className='flex--1 truncate'>{ buttonContent }</div>
                  {
                    !!arrowIcon && arrowIcon !== 'none' && (
                      <div className='text--right'><span className={ iconClass }/></div>
                    )
                  }
                </div>
              </button>
            )
          }
          {
            activator && React.cloneElement(activator, {
              // trigger the dropdown if the child element is clicked on
              onClick: this.handleToggle,
              onBlur: this.handleOnBlur,
            })
          }
        </Target>
        {isOpen && !isDisabled &&
          <Popper
            placement={ placement }
            className='oui-dropdown-children'
            style={{
              zIndex: zIndex,
              position: 'absolute',
              width: width,
              marginTop: 2,
              marginBottom: 2,
              borderRadius: 'var(--border-radius)',
              boxShadow: '0 2px 3px rgba(0,0,0,.1)',
            }}
            onMouseOver={ this.onMouseOver }
            onMouseLeave={ this.onMouseLeave }
            onClick={ this.handleToggle }>
            {children}
          </Popper>
        }
      </Manager>
    );
  }
}

Grid.propTypes = {
  /** React element that when clicked activates the dropdown
   * Either this prop OR buttonContent should be used, not both
   */
  activator: PropTypes.node,
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
  /** For automated testing only. */
  isOpen: PropTypes.bool,
  /** For automated testing only. */
  testSection: PropTypes.string,
};

Grid.defaultProps = {
  arrowIcon: 'none',
};

Grid.Container = Container;
Grid.Row = Row;
Grid.Col = Col;

export default Grid;
