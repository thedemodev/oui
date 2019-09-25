import PropTypes from 'prop-types';
import React from 'react';
import ButtonRow from '../ButtonRow';
import classNames from 'classnames';

class DockableFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDocked: true,
      footerToTop: 0,
      viewableArea: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.shouldDock = this.shouldDock.bind(this);
    this.setListeners = this.setListeners.bind(this);
  }

  componentDidMount() {
    this.shouldDock();
    this.setListeners();
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

    const footerToTop = footerEl.offsetTop;
    const viewableArea = parentEl.offsetHeight - footerEl.offsetHeight;

    this.setState({
      footerToTop: footerToTop,
      viewableArea: viewableArea,
    })
  }

  shouldDock() {
    this.updateDimensions();
    if (this.state.footerToTop >= this.state.viewableArea) {
      this.setState({isDocked: true});
    } else {
      this.setState({isDocked: false});
    }
  }

  //Add event listeners
  setListeners () {
    const parentEl = document.querySelector('[data-test-section="' + this.props.parentTestSection + '"]');
    //listen for window resize 
    window.addEventListener('resize', this.shouldDock);
    //listen for Form click 
     parentEl.addEventListener('click', this.shouldDock)
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
