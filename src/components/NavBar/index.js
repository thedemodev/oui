import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../Link';
import Badge from '../Badge';
import IconLink from './IconLink';

const LINK = 'link';
const PUSH_STATE = 'pushstate';
const BUTTON = 'button';

const linkPropTypes = {
  /** Should show a separator line before this link. */
  hasSeparator: PropTypes.bool,
  /** Url to Navigate to when type is link. */
  href: PropTypes.string,
  /** Name of Icon. */
  iconName: PropTypes.string.isRequired,
  /** Whether the link is highlighted blue as the current active nav link. */
  isActive: PropTypes.bool,
  /** Condition in which this link is visible. */
  isVisible: PropTypes.bool,
  /** Description of url. */
  linkDescription: PropTypes.string,
  /** Handler called when link is clicked. */
  onClick: PropTypes.func,
  /** Name of test data section. */
  testSection: PropTypes.string,
  /** Type of Link. */
  type: PropTypes.oneOf([LINK, PUSH_STATE, BUTTON]),
};

const linkDefaultProps = {
  href: '',
  isActive: false,
  isVisible: true,
  linkDescription: '',
  testSection: null,
  hasSeparator: false,
  onClick: () => {},
  type: LINK,
};

const PrimaryLink = props => <IconLink { ...props } isSecondaryLink={ false } />;
PrimaryLink.propTypes = linkPropTypes;
PrimaryLink.defaultProps = linkDefaultProps;

const SecondaryLink = props => <IconLink { ...props } isSecondaryLink={ true } />;
SecondaryLink.propTypes = linkPropTypes;
SecondaryLink.defaultProps = linkDefaultProps;

// TODO: Implement CurrentUser Component
const CurrentUser = props => <div />;

const renderPrimaryLinks = children => React.Children.toArray(children).filter(child => child.type === PrimaryLink);
const renderSecondaryLinks = children => React.Children.toArray(children).filter(child => child.type === SecondaryLink);
const renderCurrentUser = children => React.Children.toArray(children).filter(child => child.type === CurrentUser);

const NavBar = (props) => {
  const {
    isOpen,
    homeUrl,
    logo,
    trialContent,
    title,
    badgeText,
    children,
  } = props;
  return (
    <ul
      className={ classNames({
        'root-nav': true,
        'root-nav--open': isOpen,
      }) }
      data-test-section="p13n-root-navbar">
      <div data-test-section="navbar-header">
        <li className="root-nav__logo push-double--bottom">
          <Link href={ homeUrl }>
            { logo }
          </Link>
        </li>
        { trialContent }
        <li
          className={ classNames({
            'root-nav__project': true,
            'root-nav-fader': !isOpen,
          }) }>
          <div
            className="epsilon truncate"
            data-test-section="project-name">
            { title }
          </div>
          <Badge color="primary">
            { badgeText }
          </Badge>
        </li>
      </div>
      <li className="push-double--ends">
        <ul>
          { renderPrimaryLinks(children) }
        </ul>
      </li>
      <li className="anchor--bottom">
        <ul>
          <li className="push-double--ends">
            <ul>
              { renderSecondaryLinks(children) }
            </ul>
          </li>
          <li>
            <ul>
              { renderCurrentUser(children) }
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
};

NavBar.propTypes = {
  /** Text to appear below title in a badge. */
  badgeText: PropTypes.string,
  /* Allowed Children are <PrimaryLink>, <SecondaryLink>, <CurrentUser>. */
  children: (props, propName) => {
    const prop = props[propName];
    let error = null;
    React.Children.forEach(prop, (child) => {
      if (![SecondaryLink, PrimaryLink, CurrentUser].includes(child.type)) {
        error = new Error('Children should be of type PrimaryLink, SecondaryLink, or CurrentUser.');
      }
    });
    if (!error && React.Children.toArray(prop).filter(child => child.type === CurrentUser).length > 1) {
      error = new Error('There should be only one instance of `CurrentUser`');
    }
    return error;
  },
  /** Url to navigate to when Brand Logo is clicked. */
  homeUrl: PropTypes.string,
  /** Is Navigation Bar open or closed. */
  isOpen: PropTypes.bool,
  /** Component containing brand logo. */
  logo: PropTypes.node,
  /** Title of navigation bar */
  title: PropTypes.string,
  /** Component to appear above title and below brand logo. */
  trialContent: PropTypes.node,
};

NavBar.defaultProps = {
  badgeText: '',
  homeUrl: '',
  isOpen: true,
  logo: null,
  title: '',
  trialContent: null,
};

NavBar.PrimaryLink = PrimaryLink;
NavBar.SecondaryLink = SecondaryLink;
NavBar.CurrentUser = CurrentUser;

export default NavBar;
