import PropTypes from 'prop-types';
import React from 'react';

import { debounce, noop } from 'lodash';

import { listIndexTracker } from 'utils/accessibilty';

import Input from '../Input';

const INITIAL_SEARCH_PAGE_SIZE = 5;

@listIndexTracker
class SearchPicker extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,

    /**
     * Which index in the list is currently selected.
     * via @listIndexTracker
     */
    currentFauxFocusIndex: PropTypes.number.isRequired,

    /**
     * The element ref to use for capturing keyboard input.
     * via @listIndexTracker
     */
    keyboardRef: PropTypes.shape({ current: PropTypes.elementType }),

    onCreateSelected: PropTypes.func,

    onItemSelected: PropTypes.func.isRequired,

    projectId: PropTypes.number.isRequired,

    /**
     * The function to invoke to execute an authenticated public API search.
     * Different consumers will have different methods of authenticating.
     *
     * @param {Object} requestConfig
     * @return {Promise}
     */
    searchFunction: PropTypes.func.isRequired,

    selectedEntityIds: PropTypes.array,

    /**
     * Sets the number of items for the list index tracker.
     * via @listIndexTracker
     */
    setItemCount: PropTypes.func,

    /**
     * Sets the item select callback fn for the list index tracker.
     * via @listIndexTracker
     */
    setOnItemSelect: PropTypes.func,

    /* The entity types we should query search for. */
    type: PropTypes.array.isRequired,
  };

  static defaultProps = {
    selectedEntityIds: [],
    setItemCount: noop,
    setOnItemSelect: noop,
  };

  constructor(props) {
    super(props);

    this.ref = props.keyboardRef || React.createRef();

    const { projectId, searchFunction, type } = props;
    const query = '';

    searchFunction({
      projectId,
      type,
      query,
      per_page: INITIAL_SEARCH_PAGE_SIZE,
    }).then(results => {
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
    const { onCreateSelected, onItemSelected } = this.props;
    const { searchQuery } = this.state;
    const availableItems = this.getAvailableEntities();
    if (!!searchQuery && index === 0) {
      if (onCreateSelected) {
        onCreateSelected(searchQuery);
      }
    } else if (onItemSelected) {
      const item = availableItems[searchQuery ? index - 1 : index];
      onItemSelected(item, index, searchQuery);
    }
  };

  handleSearchInput = event => {
    const { value } = event.target;
    this.setState({
      searchQuery: value,
      currentFauxFocusIndex: 0,
    });

    if (value) {
      this._debouncedHandleSearchInput(value);
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

  setInputFocus = searchFocused => this.setState({ searchFocused });

  _debouncedHandleSearchInput = debounce(searchQuery => {
    this.executeSearch(searchQuery);
  }, 150);

  executeSearch = query => {
    new Promise((resolve, reject) => {
      const { projectId, searchFunction, type } = this.props;
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
      searchFunction({
        projectId,
        type,
        query: query.toLowerCase(),
      }).then(resolve, reject);
    }).then(results => {
      const { searchQuery } = this.state;
      this.setState({
        isLoading: false,
        currentSearch: null,
      });
      // Ensure the query wasn't killed during the debounce period.
      if (searchQuery) {
        this.setState({
          results,
        });
      }
    });
  };

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

  getAvailableEntities = () => {
    const { selectedEntityIds } = this.props;
    return this.getResultSet().filter(result => !selectedEntityIds.includes(result.id));
  };

  getResultSet = () => {
    const { results, defaultResults } = this.state;
    return results || defaultResults;
  };

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

  render() {
    const { children, currentFauxFocusIndex } = this.props;
    const { searchQuery, isLoading, searchFocused } = this.state;
    const { renderInput } = this;
    const availableEntities = this.getAvailableEntities();
    return (
      <div ref={ this.ref }>
        {children({
          availableEntities,
          isLoading,
          renderInput,
          searchQuery,
          currentFauxFocusIndex,
          shouldDisplayResults: searchFocused,
          shouldDisplayCreate: !!searchQuery,
          resultsText: this.getResultsText(),
        })}
      </div>
    );
  }
}

export default SearchPicker;
