import classNames from 'classnames';
import Icon from 'react-oui-icons';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../Button';
import Link from '../../Link';
import Poptip from '../../Poptip';

/**
 * Possible active tabs for the global navbar.
 */
const LinkActionTypes = {
  PUSH_STATE_HREF: 'PUSH_STATE_HREF',
  LINK_HREF: 'LINK_HREF',
  FUNCTION: 'FUNCTION',
};

class IconLink extends React.PureComponent {
  static propTypes = {
    /* String, name of Icon */
    iconName: PropTypes.string.isRequired,
    /* Boolean, whether the link is highlighted
     * blue as the current active nav link */
    isActive: PropTypes.bool,
    /* Boolean, whether navbar is open or closed */
    isNavOpen: PropTypes.bool,
    /* Boolean, whether link is primary or secondary */
    isSecondaryLink: PropTypes.bool,
    /* Object, { type: '', action: '', pushStateHandler: '' } */
    /* type key value can be pushStateHref, linkHref, function */
    /* if key is pushStateHref, action is string,
     * pushStateHandler is a function */
    /* if key is linkHref, action is string */
    /* if key is function, action is function */
    linkAction: PropTypes.object.isRequired,
    /* String, description of url */
    linkDescription: PropTypes.string.isRequired,
    /* String, name of test data section */
    testSection: PropTypes.string.isRequired,
  };

  static defaultProps = {
    isActive: false,
    isNavOpen: true,
    isSecondaryLink: false,
  };

  renderNavLink = () => {
    const {
      isActive,
      iconName,
      isNavOpen,
      isSecondaryLink,
      linkDescription,
    } = this.props;
    const iconSize = isSecondaryLink ? 'medium' : 'large';
    return (
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
    );
  };

  onAppRouteLinkClick = event => {
    const { linkAction } = this.props;
    return linkAction.pushStateHandler(linkAction.action, event);
  };

  renderAppRouteLink = () => {
    const { linkAction, testSection } = this.props;
    return (
      <Link
        style="reverse"
        href={ linkAction.action }
        onClick={ this.onAppRouteLinkClick }
        testSection={ `${testSection}-internal-link` }>
        { this.renderNavLink() }
      </Link>
    );
  };

  renderExternalLink = () => {
    const { linkAction, testSection } = this.props;
    return (
      <Link
        href={ linkAction.action }
        style="reverse"
        testSection={ `${testSection}-external-link` }>
        { this.renderNavLink() }
      </Link>
    );
  };

  renderButton = () => {
    const { linkAction, testSection } = this.props;
    return (
      <Button
        onClick={ linkAction.action }
        style="unstyled"
        testSection={ `${testSection}-button` }>
        { this.renderNavLink() }
      </Button>
    );
  };

  render() {
    const { linkAction, testSection } = this.props;
    let primaryLink;

    switch (linkAction.type) {
      case LinkActionTypes.PUSH_STATE_HREF:
        primaryLink = this.renderAppRouteLink();
        break;
      case LinkActionTypes.LINK_HREF:
        primaryLink = this.renderExternalLink();
        break;
      case LinkActionTypes.FUNCTION:
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
