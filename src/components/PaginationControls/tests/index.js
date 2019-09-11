import React from 'react';
import { mount } from 'enzyme';

import PaginationControls from '../index';

describe('components/PaginationControls', () => {
  it('should render a default controls', () => {
    const component = mount(
      <PaginationControls
        currentPage={ 5 }
        totalPages={ 10 }
      />
    );
    expect(component.find('.oui-pagination-controls').exists()).toBe(true);
    expect(component.find('li').length).toBe(11);
  });

  it('should adjust slots when totalSlots is passed in', () => {
    const component = mount(
      <PaginationControls
        currentPage={ 14 }
        totalPages={ 40 }
        totalSlots={ 11 }
      />
    );
    expect(component.find('li').length).toBe(13);
  });

  it('should render properly when current page is in the middle', () => {
    const component = mount(
      <PaginationControls
        currentPage={ 20 }
        totalPages={ 40 }
      />
    );
    expect(component.find('li span').length).toBe(2);
  });

  it('should render properly when current page is at the end', () => {
    const component = mount(
      <PaginationControls
        currentPage={ 36 }
        totalPages={ 40 }
      />
    );
    expect(component.find('li span').length).toBe(1);
  });

  it('should render properly when current page is out of bounds', () => {
    const component = mount(
      <PaginationControls
        currentPage={ 36 }
        totalPages={ 10 }
      />
    );
    expect(component.find('a[aria-label="Page 10, current page"]').exists()).toBe(true);
  });

  it('should render properly when number of pages is less than slots', () => {
    const component = mount(
      <PaginationControls
        currentPage={ 1 }
        totalPages={ 5 }
      />
    );
    expect(component.find('li').length).toBe(7);
  });

  it('should indicate the current page for screen readers', () => {
    const component = mount(
      <PaginationControls
        currentPage={ 2 }
        totalPages={ 20 }
        totalSlots={ 11 }
      />
    );
    expect(component.find('a[aria-label="Page 2, current page"]').exists()).toBe(true);
  });

  it('should disable the previous button when currentPage is 1', () => {
    const component = mount(
      <PaginationControls
        currentPage={ 1 }
        totalPages={ 20 }
      />
    );

    expect(component.find('a[aria-label="Previous Page"]').getDOMNode().attributes.getNamedItem('disabled').value).not.toBe(null);
  });

  it('should disable the next button then currentPage is last page', () => {
    const component = mount(
      <PaginationControls
        currentPage={ 10 }
        totalPages={ 10 }
      />
    );
    expect(component.find('a[aria-label="Previous Page"]').getDOMNode().attributes.getNamedItem('disabled')).toBe(null);
    expect(component.find('a[aria-label="Next Page"]').getDOMNode().attributes.getNamedItem('disabled').value).not.toBe(null);
  });

  it('should add a spinner and disable all links if isLoading is true', () => {
    const component = mount(
      <PaginationControls
        currentPage={ 1 }
        totalPages={ 10 }
        isLoading={ true }
      />
    );
    expect(component.find('a[disabled]').length).toBe(10);
    expect(component.find('.oui-spinner').exists()).toBe(true);
  });

  it('should call goToPage when link is clicked', () => {
    const goToPageSpy = jest.fn();
    const component = mount(
      <PaginationControls
        currentPage={ 1 }
        totalPages={ 10 }
        goToPage={ goToPageSpy }
      />
    );
    component.find('a[aria-label="Page 2"]').simulate('click');

    expect(goToPageSpy).toHaveBeenCalled();
  });

  it('should not call goToPage when link is "clicked" but controls are loading', () => {
    const goToPageSpy = jest.fn();
    const component = mount(
      <PaginationControls
        currentPage={ 1 }
        totalPages={ 10 }
        isLoading={ true }
        goToPage={ goToPageSpy }
      />
    );
    component.find('a[aria-label="Page 2"]').simulate('click');

    expect(goToPageSpy).not.toHaveBeenCalled();
  });
});
