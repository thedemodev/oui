import classNames from 'classnames';
import Icon from 'react-oui-icons';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../Button';
import Link from '../../Link';
import Poptip from '../../Poptip';

const LINK = 'link';
const PUSH_STATE = 'pushstate';
const BUTTON = 'button';

// Should have a main component on its own.
class IconLink extends React.PureComponent {
  static propTypes = {
    /* Boolean, Should show a separator line before this link */
    hasSeparator: PropTypes.bool,
    href: PropTypes.string,
    /* String, name of Icon */
    iconName: PropTypes.string.isRequired,
    /* Boolean, whether the link is highlighted
     * blue as the current active nav link */
    isActive: PropTypes.bool,
    /* Boolean, whether navbar is open or closed */
    isNavOpen: PropTypes.bool,
    /* Boolean, whether link is primary or secondary */
    isSecondaryLink: PropTypes.bool,
    /* String, description of url */
    linkDescription: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    /* String, name of test data section */
    testSection: PropTypes.string.isRequired,
    type: PropTypes.oneOf([LINK, PUSH_STATE, BUTTON]),
  };

  static defaultProps = {
    hasSeparator: false,
    href: '',
    isActive: false,
    isNavOpen: true,
    isSecondaryLink: false,
    onClick: () => {},
    type: LINK,
  };

  renderNavLink = () => {
    const {
      isActive,
      iconName,
      isNavOpen,
      isSecondaryLink,
      hasSeparator,
      linkDescription,
    } = this.props;
    const iconSize = isSecondaryLink ? 'medium' : 'large';
    return (
      <React.Fragment>
        { hasSeparator &&
          <li className="spacer push-double">
            <hr className="sidebar-line"/>
          </li>
        }
        <Poptip
          content={ linkDescription }
          disable={ isNavOpen }
          isAnimated={ false }
          position="right">
          <div
            className={ classNames(
              'root-nav__link',
              {
                'is-active': isActive,
                'root-nav__link--primary': !isSecondaryLink,
                'root-nav__link--secondary truncate': isSecondaryLink,
              },
            ) }>
            <div className="flex">
              <Icon
                name={ iconName }
                size={ iconSize }
              />
            </div>
            <span className={ classNames('root-nav__link__text', { 'root-nav-fader': !isNavOpen }) }>
              { linkDescription }
            </span>
          </div>
        </Poptip>
      </React.Fragment>
    );
  };

  onAppRouteLinkClick = event => {
    const { href, onClick } = this.props;
    return onClick(href, event);
  };

  renderAppRouteLink = () => {
    const { testSection, href } = this.props;
    return (
      <Link
        style="reverse"
        href={ href }
        onClick={ this.onAppRouteLinkClick }
        testSection={ `${testSection}-internal-link` }>
        { this.renderNavLink() }
      </Link>
    );
  };

  renderExternalLink = () => {
    const { testSection, href } = this.props;
    return (
      <Link
        href={ href }
        style="reverse"
        testSection={ `${testSection}-external-link` }>
        { this.renderNavLink() }
      </Link>
    );
  };

  renderButton = () => {
    const { testSection, onClick } = this.props;
    return (
      <Button
        onClick={ onClick }
        style="unstyled"
        testSection={ `${testSection}-button` }>
        { this.renderNavLink() }
      </Button>
    );
  };

  render() {
    const { testSection, type } = this.props;
    let primaryLink;

    switch (type) {
      case PUSH_STATE:
        primaryLink = this.renderAppRouteLink();
        break;
      case LINK:
        primaryLink = this.renderExternalLink();
        break;
      case BUTTON:
        primaryLink = this.renderButton();
        break;
      default:
        // Should never reach here
        primaryLink = null;
    }

    return (
      <li data-test-section={ testSection }>
        { primaryLink }
      </li>
    );
  }
}

export default IconLink;
