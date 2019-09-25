import PropTypes from 'prop-types';
import React from 'react';
import ButtonRow from '../ButtonRow';
import classNames from 'classnames';

class DockableFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDocked: true,
    };
    this.shouldDock = this.shouldDock.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    this.shouldDock(this.props.parentTestSection);
    this.onScroll();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.onFocusChange({focused: this.props.isFocused});
    }
  }

  // shouldComponentUpdate() {
  //   this.shouldDock(this.props.parentTestSection);
  //   console.log('updateed ' + this.props.parentTestSection);
  //   // this.setState({isDocked: this.props.isDocked});
  // }

  componentWillUnmount() {
    //window.removeEventListener('scroll', ...);
  }

  //https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
  onScroll () {
    // let ticking = false;

    // window.addEventListener('scroll', function(e) {
    //   //check to see if the footer is docked
    //   if ( !ticking && this.state.isDocked === false ) {
    //     //if it is not docked, check if it should dock in 2 seconds (after scrolling is complete)
    //     setTimeout(() => {shouldDock(this.props.testSection)}, 2000)
    //     ticking = false;
    //   }
    //   ticking = true;
    // });

  }

  shouldDock(parentTestSection) {
    var footerEl = document.getElementsByClassName('oui-sheet__footer--dockable')[0];
    var parentEl = document.querySelector('[data-test-section="' + parentTestSection + '"]');
    var footerTop = footerEl.offsetTop;
    var viewableArea = parentEl.offsetHeight - footerEl.offsetHeight;
    if (footerTop >= viewableArea) {
      this.setState({isDocked: true});
    } else {
      this.setState({isDocked: false});
    }
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

DockableFooter.propTypes = {
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

DockableFooter.defaultProps = {
  isDocked: false,
  testSection: '',
  parentTestSection: '',
};

export default DockableFooter;
