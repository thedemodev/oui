import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import Button from '../Button';
import Dropdown from '../Dropdown';
import Input from '../Input';
import Spinner from '../Spinner';

class SelectDropdown extends React.Component {
  static propTypes = {
    /**
     * The dropdown options will show a spinner overlayed if this is true.
     */
    areItemsLoading: PropTypes.bool,
    /**
     * Style value that is passed to the OUI button that controls the dropdown.
     */
    buttonStyle: PropTypes.string,
    /**
     * Show error by default.
     */
    displayError: PropTypes.bool,
    /**
     * Dropdown direction.
     */
    dropdownDirection: PropTypes.oneOf(['right', 'left']),
    /**
     * If provided, an input box will be displayed to enable
     * filtering props.items by these fields.
     * This prop is ignored if props.renderInput is provided.
     */
    filterFields: PropTypes.arrayOf(PropTypes.string),
    /**
     * Header text to display above all items in the list.
     */
    headerText: PropTypes.string,
    /**
     * An initial value for the dropdown before anything is selected
     */
    initialPlaceholder: PropTypes.node,
    /**
     * The activator will show a spinner overlayed if this is true.
     */
    isActivatorLoading: PropTypes.bool,
    /**
     * The select is greyed out if it is disabled.
     */
    isDisabled: PropTypes.bool,
    /**
     * Dropdown items that can be selected from the select dropdown.
     */
    items: PropTypes.arrayOf(PropTypes.shape({
      activatorLabel: PropTypes.node,
      description: PropTypes.string,
      label: PropTypes.node.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
    })).isRequired,
    /**
     * Max width of the activator container.
     */
    maxWidth: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    /**
     * The minimum width of the dropdown list; any valid CSS width value.
     */
    minDropdownWidth: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    /**
     * Function that is called when user selects
     * an item from dropdown list.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * A render method to display an input box above the selected items,
     * allowing consumers to implement their own search/filter functionality.
     * If provided, this prop overrides props.filterFields.
     */
    renderInput: PropTypes.func,
    /**
     * Identifier used to create data-test-section attributes for testing.
     */
    testSection: PropTypes.string,
    /**
     * Identifier used to create data-track-id attributes for Heap testing.
     */
    trackId: PropTypes.string,
    /**
     * Value of currently selected item.
     */
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    /**
     * The field in each props.items which corresponds to the props.value
     * Used to determine if the item is selected.
     */
    valueField: PropTypes.string,
    /**
     * Width of the activator container.
     */
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    /**
     * zIndex of dropdown group
     */
    zIndex: PropTypes.number,
  };

  static defaultProps = {
    areItemsLoading: false,
    buttonStyle: 'outline',
    displayError: false,
    dropdownDirection: 'right',
    filterFields: null,
    isActivatorLoading: false,
    initialPlaceholder: '',
    headerText: null,
    renderInput: null,
    testSection: '',
    trackId: '',
    value: '',
    valueField: 'value',
    width: '100%',
  };

  state = {
    filterTerm: '',
  };

  spinnerRef = React.createRef();

  childrenRef = React.createRef();

  shouldComponentUpdate(nextProps, nextState) {
    const stateChanged = !_.isEqual(this.state, nextState);
    const propsChanged = !_.isEqual(this.props, nextProps);
    return propsChanged || stateChanged;
  }

  componentDidMount() {
    this.setSpinnerHeight();
  }

  componentDidUpdate() {
    this.setSpinnerHeight();
  }

  filter = (event) => {
    this.setState({
      filterTerm: event.target.value,
    });
  };

  setSpinnerHeight = () => {
    if (this.spinnerRef.current && this.childrenRef.current) {
      const spinnerTopOffset = this.spinnerRef.current.offsetTop;
      const visibleContentHeight = this.childrenRef.current.clientHeight;
      this.spinnerRef.current.style.height = `${ visibleContentHeight - spinnerTopOffset}px`;
    }
  }

  handleOnClick = (value) => this.props.onChange(value);

  getActivator = (activatorLabel, outerClass) => {
    const {
      buttonStyle,
      isActivatorLoading,
      maxWidth,
      trackId,
      width,
    } = this.props;
    return ({ buttonRef, isDisabled, onClick, onBlur, testSection }) => (
      <div
        style={{ width: width, maxWidth: maxWidth}}
        className={ outerClass }>
        <Button
          isLoading={ isActivatorLoading }
          title={ activatorLabel }
          loadingText={ activatorLabel }
          isDisabled={ isDisabled }
          style={ buttonStyle }
          size="narrow"
          testSection={ `${testSection}-activator` }
          width="full"
          buttonRef={ buttonRef }
          onClick={ onClick }
          onBlur={ onBlur }>
          <div className="flex flex-align--center" data-track-id={ trackId }>
            <span className="oui-dropdown-group__activator-label flex--1">{ activatorLabel }</span>
            <span className="push--left oui-arrow-inline--down" />
          </div>
        </Button>
      </div>
    );
  };

  getFilterFunction = () => {
    const { filterTerm } = this.state;
    const { filterFields } = this.props;
    return (item) => {
      if (!filterFields) {
        return true;
      }
      return !!filterFields.find(field => {
        const value = item[field];
        return value && typeof value === 'string' && value.includes(filterTerm);
      });
    };
  };

  maybeRenderInputBox = () => {
    const { filterFields, renderInput } = this.props;
    const { filterTerm } = this.state;
    if (renderInput || filterFields) {
      return (
        <Dropdown.ListItem ignoreToggle={ true }>
          { renderInput ? renderInput() : (
            <Input
              value={ filterTerm }
              onChange={ this.filter }
              isFilter={ true }
              type="search"
            />
          )}
        </Dropdown.ListItem>
      );
    }
  };

  renderItems = () => {
    const { items, headerText, value, valueField } = this.props;
    const selectOptions = items
      .filter(this.getFilterFunction())
      .map((entry) => {
        const thisEntryValue = entry[valueField];
        return (
          <Dropdown.ListItem key={ thisEntryValue }>
            <Dropdown.BlockLink
              value={ thisEntryValue }
              onClick={ this.handleOnClick }
              isLink={ thisEntryValue !== value }
              testSection={ 'dropdown-block-link-' + thisEntryValue }>
              { entry.label }
              { entry.description && (
                <div className="micro muted">
                  { entry.description }
                </div>
              )}
            </Dropdown.BlockLink>
          </Dropdown.ListItem>
        );
      });

    if (headerText) {
      selectOptions.unshift(
        <Dropdown.ListItem ignoreToggle={ true } key={ headerText }>
          <span className="muted micro soft--sides">{ headerText }</span>
        </Dropdown.ListItem>
      );
    }
    return selectOptions;
  };

  renderContents = () => {
    let { areItemsLoading, minDropdownWidth, dropdownDirection } = this.props;
    areItemsLoading = true;
    return (
      <Dropdown.Contents
        ref={ this.childrenRef }
        isLoading={ areItemsLoading }
        direction={ dropdownDirection }
        minWidth={ minDropdownWidth }
        renderHeader={ this.maybeRenderInputBox }>
        { this.renderItems() }
        { areItemsLoading && <Spinner ref={ this.spinnerRef } hasOverlay={ areItemsLoading } /> }
      </Dropdown.Contents>
    );
  };

  render() {
    const {
      value,
      valueField,
      zIndex,
      isDisabled,
      initialPlaceholder,
    } = this.props;
    let selectedItem;
    this.props.items.forEach(item => {
      if (item[valueField] === value) {
        selectedItem = item;
      }
    });

    const outerClass = classNames(
      {['oui-form-bad-news']: this.props.displayError,
        'oui-dropdown-group__activator': true}
    );

    let activatorLabel = '';
    if (selectedItem) {
      activatorLabel = selectedItem.activatorLabel || selectedItem.label;
    } else if (initialPlaceholder) {
      activatorLabel = initialPlaceholder;
    }

    return (
      <Dropdown
        { ...(zIndex ? { zIndex } : {}) }
        isDisabled={ isDisabled }
        Activator={ this.getActivator(activatorLabel, outerClass) }>
        { this.renderContents() }
      </Dropdown>
    );
  }
}

export default SelectDropdown;
