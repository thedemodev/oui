import PropTypes from 'prop-types';
import React from 'react';

import { debounce } from 'lodash';

import Input from '../Input';

const INITIAL_SEARCH_PAGE_SIZE = 5;

export default class SearchPicker extends React.Component {
  static propTypes = {

    children: PropTypes.func.isRequired,

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

    /* The entity types we should query search for. */
    type: PropTypes.array.isRequired,
  }

  static defaultProps = {
    selectedEntityIds: [],
  }

  constructor(props) {
    super(props);

    const { projectId, searchFunction, type } = props;
    const query = '';

    searchFunction({
      projectId,
      type,
      query,
      per_page: INITIAL_SEARCH_PAGE_SIZE,
    })
      .then((results) => {
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
    this.setupInput();
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleGlobalClick);
    if (this.removeInputListener) this.removeInputListener();
  }

  ref = React.createRef();

  setupInput = () => {
    this.ref.current.addEventListener('keydown', this.handleKeydown);
    this.removeInputListener = this.ref.current.removeEventListener.bind(null, 'keydown', this.handleKeydown);
  }

  state = {
    currentSearch: null,
    currentFauxFocusIndex: 0,
    defaultResults: [],
    isLoading: true,
    results: null,
    searchFocused: false,
    searchQuery: '',
  }

  handleKeydown = (event) => {
    const { onCreateSelected, onItemSelected } = this.props;
    const { searchQuery, currentFauxFocusIndex } = this.state;
    const availableItems = this.getAvailableEntities();
    const availableItemsCount = availableItems.length + (searchQuery ? 1 : 0);
    switch (event.key) {
      case 'ArrowUp':
        if (currentFauxFocusIndex > 0) {
          this.setState({ currentFauxFocusIndex: currentFauxFocusIndex - 1 });
        }
        event.preventDefault();
        break;
      case 'ArrowDown':
        if (currentFauxFocusIndex < availableItemsCount - 1) {
          this.setState({ currentFauxFocusIndex: currentFauxFocusIndex + 1 });
        }
        event.preventDefault();
        break;
      case 'Enter':
        // Select the item for currentFauxFocusIndex
        if (!!searchQuery && currentFauxFocusIndex === 0) {
          if (onCreateSelected) {
            onCreateSelected(searchQuery);
          }
        } else if (onItemSelected) {
          const item = availableItems[searchQuery ? currentFauxFocusIndex - 1 : currentFauxFocusIndex];
          onItemSelected(item, currentFauxFocusIndex, searchQuery);
        }
        event.preventDefault();
        break;
      default:
        // No op
        break;
    }
  }

  handleGlobalClick = (event) => {
    this.setInputFocus(this.ref.current.contains(event.target));
  }

  handleSearchInput = (event) => {
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

  _debouncedHandleSearchInput = debounce((searchQuery) => {
    this.executeSearch(searchQuery);
  }, 150);

  executeSearch = (query) => {
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
      })
        .then(resolve, reject);
    })
      .then(
        (results) => {
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
        },
        (err) => {
          console.log(err);
        },
      );
  }

  renderInput = (props) => {
    const { type } = this.props;
    const { searchQuery, searchFocused } = this.state;
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
  }

  getAvailableEntities = () => {
    const { selectedEntityIds } = this.props;
    return this.getResultSet().filter(result => !selectedEntityIds.includes(result.id));
  }

  getResultSet = () => {
    const { results, defaultResults } = this.state;
    return results || defaultResults;
  }

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
  }

  render() {
    const { children } = this.props;
    const { searchQuery, isLoading, searchFocused, currentFauxFocusIndex } = this.state;
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
