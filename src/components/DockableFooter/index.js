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
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    this.onScroll()
  }

  onScroll () {
    //TODO: logic to answer: Should I be pinned at this moment or not?

    //this logic should return a boolean:
    const yes = true;
    const no = false;

    //setState will trigger a re-render.
    if (yes) {
      this.setState({isDocked: true})
    } else {
      this.setState({isDocked: false})
    }
  }

  render() {
    return (
    <footer
      className={ classNames({
        'oui-sheet__footer--dockable': true,
        'is-docked': this.state.isDocked,
      }) }>
      <ButtonRow rightGroup={ props.children }/>
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
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: PropTypes.string,
};

DockableFooter.defaultProps = {
  isDocked: false,
  testSection: '',
};

export default DockableFooter;