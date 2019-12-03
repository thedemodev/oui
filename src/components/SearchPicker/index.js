import { debounce, noop } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import { keyboardTracker } from '../../utils/accessibility';

import Input from '../Input';

const INITIAL_SEARCH_PAGE_SIZE = 5;

@keyboardTracker
class SearchPicker extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,

    /**
     * Which index in the list is currently selected.
     * via @keyboardTracker
     */
    currentFauxFocusIndex: PropTypes.number.isRequired,

    /**
     * The element ref to use for capturing keyboard input.
     * via @keyboardTracker
     */
    keyboardRef: PropTypes.shape({ current: PropTypes.elementType }),

    /**
     * Handler to call when an item is selected via the keyboard.
     */
    onItemSelected: PropTypes.func.isRequired,

    /**
     * The function to invoke to execute an authenticated public API search.
     * Different consumers will have different methods of authenticating.
     *
     * @param {Object} requestConfig
     * @return {Promise}
     */
    searchFunction: PropTypes.func.isRequired,

    /**
     * Additional options to pass to the search function when a search is
     * executed. Type and query will be overridden by this componend.
     */
    searchOptions: PropTypes.object,

    /**
     * An optional list of ids which should be considered "selected".
     * If provided, these ids will be filtered out of the list.
     */
    selectedEntityIds: PropTypes.array,

    /**
     * Sets the number of items for the list index tracker.
     * via @keyboardTracker
     */
    setItemCount: PropTypes.func,

    /**
     * Sets the item select callback fn for the list index tracker.
     * via @keyboardTracker
     */
    setOnItemSelect: PropTypes.func,

    /* The entity types we should query search for. */
    type: PropTypes.array.isRequired,
  };

  static defaultProps = {
    searchOptions: {},
    selectedEntityIds: [],
    setItemCount: noop,
    setOnItemSelect: noop,
  };

  constructor(props) {
    super(props);

    this.ref = props.keyboardRef || React.createRef();
    props.setOnItemSelect(() => this.handleItemSelected);

    const { searchFunction, searchOptions, type } = props;
    const query = '';

    searchFunction(
      Object.assign({}, searchOptions, {
        type,
        query,
        per_page: INITIAL_SEARCH_PAGE_SIZE,
      })
    ).then(results => {
      const { searchQuery } = this.state;
      this.setState({
        defaultResults: results,
      });
      if (!searchQuery) {
        this.setState({
          isLoading: false,
        });
      }
    });
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleGlobalClick);
  };

  componentDidUpdate = () => {
    const items = this.getAvailableEntities();
    this.props.setItemCount(items.length);
  };

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleGlobalClick);
  };

  state = {
    currentSearch: null,
    currentFauxFocusIndex: 0,
    defaultResults: [],
    isLoading: true,
    results: null,
    searchFocused: false,
    searchQuery: '',
  };

  handleGlobalClick = event => {
    this.setInputFocus(this.ref.current.contains(event.target));
  };

  handleItemSelected = index => {
    const { onItemSelected } = this.props;
    const { searchQuery } = this.state;
    onItemSelected(index, this.getAvailableEntities(), searchQuery);
  };

  handleSearchInput = event => {
    const { value } = event.target;
    this.setState({
      searchQuery: value,
      currentFauxFocusIndex: 0,
    });

    if (value) {
      this.handleSearchInputDebounced(value);
    } else {
      const { currentSearch } = this.state;
      if (currentSearch) {
        currentSearch.reject('Search interrupted by empty search query.');
      }
      this.setState({
        isLoading: false,
        results: null,
        currentSearch: null,
      });
    }
  };

  /**
   * Execute the search function in a way that is cancelleable by storing
   * the Promise resolution methods in state.
   * This enables subsequent invocations to cancel an in progress
   * search in favor of a new one.
   * @param {string} query - The term to search for.
   * @returns {Promise<Array>}
   */
  executeNewSearch = query =>
    new Promise((resolve, reject) => {
      const { searchFunction, searchOptions, type } = this.props;
      const { currentSearch } = this.state;
      if (currentSearch) {
        currentSearch.reject(`Search interrupted by new search query: ${query}`);
      }
      this.setState({
        currentSearch: {
          resolve,
          reject,
        },
        isLoading: true,
      });
      searchFunction(
        Object.assign({}, searchOptions, {
          type,
          query: query.toLowerCase(),
        })
      ).then(resolve, reject);
    });

  /**
   * A debounced method to invoke the search and store the result in state.
   * @param {string} query - The term to search for.
   */
  handleSearchInputDebounced = debounce(query => {
    this.executeNewSearch(query).then(results => {
      const { searchQuery } = this.state;
      this.setState({
        isLoading: false,
        currentSearch: null,
      });
      // Ensure the query wasn't killed while waiting for the result.
      if (searchQuery) {
        this.setState({
          results,
        });
      }
    });
  }, 150);

  setInputFocus = searchFocused => this.setState({ searchFocused });

  /**
   * Filter the current result set to exclude selected entities.
   * @returns {Array<Object>}
   */
  getAvailableEntities = () => {
    const { selectedEntityIds } = this.props;
    return this.getResultSet().filter(result => !selectedEntityIds.includes(result.id));
  };

  /**
   * Helper method to return the current result set,
   * falling back to the default.
   * @returns {Array<Object>}
   */
  getResultSet = () => {
    const { results, defaultResults } = this.state;
    return results || defaultResults;
  };

  /**
   * Compute a human readable result text.
   * @returns {Object}
   */
  getResultsText = () => {
    const { type } = this.props;
    const { isLoading, searchQuery } = this.state;
    const resultCount = this.getResultSet().length;
    const summaryNoun = type.length > 1 ? 'entities' : `${type[0]}s`;
    let summary = `Recently created ${summaryNoun}`;

    if (isLoading) {
      summary = `Searching for "${summaryNoun}" matching "${searchQuery}"`;
    } else if (searchQuery) {
      if (resultCount) {
        summary = `Found ${resultCount} ${summaryNoun} matching "${searchQuery}"`;
      } else {
        summary = `No ${summaryNoun} found matching "${searchQuery}"`;
      }
    }

    return {
      summary,
    };
  };

  /**
   * A render method passed to children so that they can render the search
   * input component wherever they like.
   * @param {Object} props - Any additional props to pass to the <Input>.
   * @returns {React.Component}
   */
  renderInput = props => {
    const { type } = this.props;
    const { searchQuery } = this.state;
    const { handleSearchInput } = this;
    const placeholderNoun = type.map(i => `${i}s`).join(',');
    return (
      <Input
        isFilter={ true }
        onInput={ handleSearchInput }
        placeholder={ `Search for ${placeholderNoun}` }
        testSection={ `filter-${placeholderNoun}-input` }
        type="search"
        value={ searchQuery }
        { ...props }
      />
    );
  };

  /**
   * A simple render method that passes relevant state and controls to the
   * children. It is wrapped in a <div> to ensure a reference to the
   * rendered DOM node is available
   * @returns {React.Component}
   */
  render() {
    const { children, currentFauxFocusIndex } = this.props;
    const { searchQuery, isLoading, searchFocused } = this.state;
    const { renderInput } = this;
    const availableEntities = this.getAvailableEntities();
    return (
      <div ref={ this.ref } className="flex">
        {children({
          availableEntities,
          isLoading,
          renderInput,
          searchQuery,
          currentFauxFocusIndex,
          shouldDisplayResults: searchFocused,
          resultsText: this.getResultsText(),
        })}
      </div>
    );
  }
}

export default SearchPicker;
