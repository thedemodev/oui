import PropTypes from 'prop-types';
import React from 'react';
import ButtonRow from '../ButtonRow';
import classNames from 'classnames';

class DockedFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDocked: true,
    };
    this.shouldDock = this.shouldDock.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
    this.throttle = this.throttle.bind(this);
  }

  componentDidMount() {
    this.shouldDock();
    this.setEventListeners();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.footerToTop !== this.state.footerToTop) {
      this.shouldDock();
    } else if (prevState.viewableArea !== this.state.viewableArea) {
      this.shouldDock();
    }
  }

  shouldDock() {
    const parentElement = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');
    const footerElement = document.querySelector('[data-test-section="' + this.props.testSection + '"]')[0];
    if (footerElement !== undefined && parentElement !== undefined) {
      let shouldReDock = (footerElement.offsetTop) >= (parentElement.offsetHeight - footerElement.offsetHeight);
      this.setState({shouldDock: shouldReDock});
    }
    this.onScroll();
  }

  onScroll() {
    const parentElement = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');
    let atScrollBottom = parentElement.scrollHeight - parentElement.scrollTop === parentElement.clientHeight;
    this.setState({isDocked: !atScrollBottom});
  }

  throttle(delay, fn) {
    let lastCall = 0;
    return function(...args) {
      const now = (new Date()).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    };
  }

  setEventListeners() {
    const parentElement = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');
    window.addEventListener('resize', this.throttle(3, this.shouldDock));
    parentElement.addEventListener('click', this.shouldDock);
    parentElement.addEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <footer
        data-test-section={ this.props.testSection }
        className={ classNames({
          'oui-docked-footer': true,
          'oui-docked-footer--is-docked': this.state.isDocked,
          'push-double--top': this.props.includesMargin,
        }) }>
        <ButtonRow
          rightGroup={ this.props.children }
        />
      </footer>
    );
  }
}

DockedFooter.propTypes = {
  /**
   *  Button components to be included in the DockedFooter.
   */
  children: PropTypes.node,
  /**
  *  Used to determine if there should be top margin.
   */
  includesMargin: PropTypes.bool,
  /**
   * Identifier to check parent height and visible space for docked footer.
   */
  parentTestSection: PropTypes.string.isRequired,
  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: PropTypes.string.isRequired,
};

DockedFooter.defaultProps = {
  includesMargin: false,
  testSection: '',
  parentTestSection: '',
};

export default DockedFooter;
