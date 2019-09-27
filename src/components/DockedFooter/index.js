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
    let footerToTop;
    let viewableArea;
    const parentElement = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');
    const footerElement = document.getElementsByClassName('oui-dockedFooter')[0];

    if (footerElement !== undefined && parentElement !== undefined) {
      footerToTop = footerElement.offsetTop;
      viewableArea = parentElement.offsetHeight - footerElement.offsetHeight;
      // console.log(footerToTop);
      // console.log(viewableArea);
      if (footerToTop >= viewableArea) {
        this.setState({isDocked: true});
      } else {
        this.setState({isDocked: false});
      }
    }
  }

  onScroll() {
    const parentElement = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');
    const atBottom = parentElement.scrollTop === (parentElement.scrollHeight - parentElement.offsetHeight)
    console.log('dockedFooter:', parentElement.scrollTop, '=== (',  parentElement.scrollHeight, '-', parentElement.offsetHeight, ")")

    if (atBottom) {
      this.setState({isDocked: false});
    } else if(!atBottom) {
      this.setState({isDocked: true });
    }
  }

  setEventListeners() {
    const parentElement = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');

    const throttle = (delay, fn) => {
      let lastCall = 0;
      return function(...args) {
        const now = (new Date()).getTime();
        if (now - lastCall < delay) {
          return;
        }
        lastCall = now;
        return fn(...args);
      };
    };

    window.addEventListener('resize', throttle(10, this.shouldDock));
    window.addEventListener('scroll', this.onScroll)
    parentElement.addEventListener('click', this.shouldDock);
    parentElement.addEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <footer
        className={ classNames({
          'oui-dockedFooter': true,
          'is-docked': this.state.isDocked,
          'insideSheet': this.props.isInsideSheet,
          'push-double--top': this.props.includesMargin,
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
   *  Add top and bottom margins.
   */
  includesMargin: PropTypes.bool,
  /**
   *  Used to determine if the sheet should have a close button.
   */
  isDocked: PropTypes.bool,
  /**
   *  Changes width and other options when inside of Sheet component.
   */
  isInsideSheet: PropTypes.bool,
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
  isInsideSheet: false,
  includesMargin: true,
  testSection: '',
  parentTestSection: '',
};

export default DockedFooter;
