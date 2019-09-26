import PropTypes from 'prop-types';
import React from 'react';
import ButtonRow from '../ButtonRow';
import classNames from 'classnames';

/**
 * The DockedFooter renders dynamically based on the dimentions of it's parent container. 
 * It requires an ID for its parent container. This component uses the ID to select the container, 
 * make calculations, and determine whether or not it should be docked on the bottom of the window.
 */

class DockedFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDocked: true,
    };
    this.shouldDock = this.shouldDock.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
  }

  componentDidMount() {
    this.shouldDock();
    this.setEventListeners();
  }

  componentDidUpdate(prevProps, prevState) {
    //check the dimensions, if they changed, check to dock. 
    if (prevState.footerToTop !== this.state.footerToTop) {
      this.shouldDock();
    } else if ( prevState.viewableArea !== this.state.viewableArea ) {
      this.shouldDock();
    }
  }

  shouldDock() {
    let footerToTop, viewableArea;
    const footerEl = document.getElementsByClassName('oui-sheet__footer--dockable')[0];
    const parentEl = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');

    if (footerEl !== undefined && parentEl !== undefined) {
      footerToTop = footerEl.offsetTop;
      viewableArea = parentEl.offsetHeight - footerEl.offsetHeight;
    }

    if (footerToTop >= viewableArea) {
      this.setState({isDocked: true});
    } else {
      this.setState({isDocked: false});
    }
  }

  onScroll () {
    const parentEl = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');
    console.log(parentEl.scrollTop + parentEl.clientHeight === parentEl.scrollHeight);
    if (parentEl.scrollTop + parentEl.clientHeight === parentEl.scrollHeight) {
      this.setState({isDocked: false})
    } else {
      this.setState({isDocked: true })
    }
  }

  setEventListeners () {
    const parentEl = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');

    const throttle = (delay, fn) => {
      let lastCall = 0;
      return function (...args) {
        const now = (new Date).getTime();
        if (now - lastCall < delay) {
          return;
        }
        lastCall = now;
        return fn(...args);
      }
    }

    window.addEventListener('resize', throttle(100, this.shouldDock));
    parentEl.addEventListener('click', this.shouldDock);
    parentEl.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.shouldDock);
    parentEl.removeEventListener('click', this.shouldDock);
    parentEl.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <footer
        className={ classNames({
          'oui-sheet__footer--dockable': true,
          'is-docked': this.state.isDocked,
        }) }>
        <ButtonRow rightGroup={ this.props.children }/>
      </footer>
    );
  }
}

DockedFooter.propTypes = {
  /**
   *  The body of the sheet to request information and data from the user.
   */
  children: PropTypes.node,
  /**
   *  Used to determine if the sheet should have a close button.
   */
  isDocked: PropTypes.bool,
  /**
   * Identifier to check parent height and visible space for docked footer.
   */
  parentTestSection: PropTypes.string.isRequired,
  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: PropTypes.string,
};

DockedFooter.defaultProps = {
  isDocked: false,
  testSection: '',
  parentTestSection: '',
};

export default DockedFooter;
