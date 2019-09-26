import PropTypes from 'prop-types';
import React from 'react';
import ButtonRow from '../ButtonRow';
import classNames from 'classnames';

/**
 * Add thorough documentation here explaining the requirement of the parent scrollable container id in order for this component to work as expected. 
 */

class DockedFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDocked: true,
      footerToTop: 0,
      viewableArea: 0,
      initFooterOffsetTop: 0,
      initParentScrollTop: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.shouldDock = this.shouldDock.bind(this);
    this.shouldUnDock = this.shouldUnDock.bind(this);
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

  //set state with most current dimientions of parent and window
  updateDimensions () {
    const footerEl = document.getElementsByClassName('oui-sheet__footer--dockable')[0];
    const parentEl = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');

    if (footerEl !== undefined && parentEl !== undefined) {
      const footerToTop = footerEl.offsetTop;
      const viewableArea = parentEl.offsetHeight - footerEl.offsetHeight;
      this.setState({
        footerToTop: footerToTop,
        viewableArea: viewableArea,
      })
    }
  }

  shouldDock() {
    this.updateDimensions();
    if (this.state.footerToTop >= this.state.viewableArea) {
      this.setState({isDocked: true});
    } else {
      this.setState({isDocked: false});
    }
  }

  shouldUnDock () {
    const parentEl = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');
    console.log(parentEl.scrollTop + parentEl.clientHeight === parentEl.scrollHeight);
    if (parentEl.scrollTop + parentEl.clientHeight === parentEl.scrollHeight) {
      this.setState({isDocked: false})
    } else {
      this.setState({isDocked: true })
    }
  }

  setEventListeners () {
    
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

    const parentEl = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');
    window.addEventListener('resize', throttle(100, this.shouldDock));
     parentEl.addEventListener('click', this.shouldDock);
     parentEl.addEventListener('scroll', this.shouldUnDock);
  }

  componentWillUnmount() {
    //clean up and remove all listeners

  }

  render() {
    console.log('state', this.state)
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
