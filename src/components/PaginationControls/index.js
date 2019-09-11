/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { checkPropIsGreaterThanOrEqualTo } from '../../utils/custom-prop-types';
import Spinner from '../Spinner';
import Link from '../Link';
import _ from 'lodash';
import flatten from 'lodash/flatten';

const ELLIPSES_PLACEHOLDER = null;
class PaginationControls extends Component {

  handlePageChange = (newPage) => {
    return () => {
      const { goToPage, isLoading } = this.props;
      if (!isLoading) {
        goToPage(newPage);
      }
    };
  }

  getCoercedInputs() {
    const { currentPage, totalSlots, totalPages } = this.props;
    // Ensure total pages is at least 2
    let sanitizedTotalPages = Math.max(totalPages, 2);
    // Ensure at least 7 slots
    let sanitizedTotalSlots = Math.min(Math.max(totalSlots, 7), sanitizedTotalPages);
    // Calculate number of numbers on either side of currentPage number
    // 5 represents the 5 guaranteed slots
    // (firstPage, beginning dots, currentPage, endingDots, lastPage)
    let buffer = Math.floor((sanitizedTotalSlots - 5) / 2);
    // Calculate max consecutive numbers (besides 1, lastPage, and ellipses)
    // 3 represents the 3 guaranteed slots when not in the middle state
    // (firstPage, endingDots, lastPage)
    let remainingSlotsToFill = sanitizedTotalSlots - 3;
    // Adjust current page to stay in range
    let sanitizedCurrentPage = Math.max(Math.min(currentPage, sanitizedTotalPages), 1);

    return {
      totalPages: sanitizedTotalPages,
      totalSlots: sanitizedTotalSlots,
      buffer,
      remainingSlotsToFill,
      currentPage: sanitizedCurrentPage,
    };
  }

  fillPageSlots() {
    const { totalPages, totalSlots, buffer, remainingSlotsToFill, currentPage } = this.getCoercedInputs();
    const distanceFromCurrentPageToFront = currentPage - 1;
    const distanceFromCurrentPageToBack = totalPages - currentPage;

    const currentPageIsCloseToBack = distanceFromCurrentPageToBack + buffer <= remainingSlotsToFill;
    const currentPageIsCloseToFront = distanceFromCurrentPageToFront + buffer <= remainingSlotsToFill;

    const ellipsesRequired = totalPages > totalSlots;

    const pageNumbers = _
      // Generate entire array of page numbers
      .times(totalPages, i => i + 1)

      // Filter down numbers to only the ones we want to show
      .filter((activePage) => {
        let distanceBetweenCurrentAndActivePages = Math.abs(currentPage - activePage);
        let distanceBetweenActivePageAndFront = activePage - 1;
        let distanceBetweenActivePageAndBack = totalPages - activePage;

        if (activePage === 1 || activePage === currentPage || activePage === totalPages || !ellipsesRequired) {
          return true;
        }
        if (distanceBetweenCurrentAndActivePages <= buffer) {
          return true;
        }
        if (currentPageIsCloseToFront && distanceBetweenActivePageAndFront <= remainingSlotsToFill) {
          return true;
        }
        if (currentPageIsCloseToBack && distanceBetweenActivePageAndBack <= remainingSlotsToFill) {
          return true;
        }
      })

      // Map over the number array and find spots to insert ellipses
      .map((val, idx, arr) => {
        const frontEllipsesEligible = !currentPageIsCloseToFront && idx === 0;
        const backEllipsesEligible = !currentPageIsCloseToBack && idx === arr.length - 2;

        if (ellipsesRequired && (frontEllipsesEligible || backEllipsesEligible)) {
          return [val, ELLIPSES_PLACEHOLDER];
        }
        return val;
      });

    return flatten(pageNumbers);

  }

  renderPageNumbers() {
    const { isLoading } = this.props;
    const { totalPages, currentPage } = this.getCoercedInputs();

    const controlSlots = this.fillPageSlots();

    return controlSlots.map((val, idx) => {
      const ariaLabelString = 'Page ' + val;
      let ariaLabelSuffix = '';
      let isCurrent = val === currentPage;
      if (isCurrent) {
        ariaLabelSuffix = ', current page';
      } else if (val === totalPages) {
        ariaLabelSuffix = ', last page';
      }

      return (
        <li className="push--sides" key={ `link-${idx}` }>
          { val === ELLIPSES_PLACEHOLDER ?
            <span>...</span> :
            <Link
              ariaLabel={ ariaLabelString + ariaLabelSuffix }
              style={ isCurrent ? 'dark' : 'default' }
              href='javascript:void()'
              onClick={ !isCurrent ? this.handlePageChange(val) : undefined }
              isDisabled={ isLoading }>
              {isCurrent ? <strong>{val}</strong> : val}
            </Link>
          }
        </li>
      );
    });
  }

  render() {
    const { isLoading, testSection, currentPage, totalPages } = this.props;
    let sanitizedTotalPages = Math.max(totalPages, 2);

    return (
      <nav className="oui-pagination-controls" data-test-section={ testSection }>
        {isLoading && <Spinner size="tiny"/>}
        <ul className="flex flex-justified--center flex-align--center">
          <li className="push--sides">
            <Link
              href='javascript:void()'
              onClick={ this.handlePageChange(Math.max(1, currentPage - 1)) }
              isDisabled={ currentPage <= 1 || isLoading }
              ariaLabel="Previous Page">
              Previous
            </Link>
          </li>
          {this.renderPageNumbers()}
          <li className="push--sides">
            <Link
              ariaLabel="Next Page"
              href='javascript:void()'
              onClick={ this.handlePageChange(Math.min(sanitizedTotalPages, currentPage + 1)) }
              isDisabled={ currentPage >= sanitizedTotalPages || isLoading }>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}


PaginationControls.propTypes = {
  /** Sets the current page number */
  currentPage: PropTypes.number.isRequired,
  /** Function that is called when a pagination link is clicked */
  goToPage: PropTypes.func.isRequired,
  /** Sets the total number of pages */
  isLoading: PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** Sets the total number of pages. Must be >=2 */
  totalPages: checkPropIsGreaterThanOrEqualTo(2, true),
  /**
   * Sets the total number of spots allowed
   * between the Previous and Next buttons.
   * Must be >= 7, default is 9
   */
  totalSlots: checkPropIsGreaterThanOrEqualTo(7, false),
};

PaginationControls.defaultProps = {
  goToPage: () => {},
  testSection: '',
  totalSlots: 9,
};

export default PaginationControls;
