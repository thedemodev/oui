/**
 * Switch Accounts with in the user
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Badge from '../../../Badge';
import BlockList from '../../../BlockList';

var sortAscending = function sortAscending(a, b) {
  if (a.text > b.text) {
    return 1;
  }

  if (b.text > a.text) {
    return -1;
  }

  return 0;
};

var AccountSwitcher = function AccountSwitcher(props) {
  var accountSwitcherItems = props.accountSwitcherItems,
      accountSwitcherHandler = props.accountSwitcherHandler;
  return accountSwitcherItems.sort(sortAscending).map(function (account) {
    function onAccountSelect() {
      accountSwitcherHandler(account);
    }

    return React.createElement(BlockList.Category, {
      key: account.text,
      testSection: "switch-account-row"
    }, React.createElement(BlockList.Item, {
      href: "".concat(!account.isCurrent ? account.url : ''),
      onClick: !account.isCurrent && onAccountSelect
    }, React.createElement("div", {
      "data-test-section": "switch-account-row-name",
      className: classNames({
        'color--base': account.isCurrent,
        'color--brand': !account.isCurrent
      })
    }, account.text), React.createElement("div", {
      className: "micro muted"
    }, account.description), account.isCurrent && React.createElement(Badge, {
      color: "primary"
    }, "CURRENT ACCOUNT")));
  });
};

AccountSwitcher.propTypes = {
  /** Function Called to Switch Account */
  accountSwitcherHandler: PropTypes.func.isRequired,

  /* User account list */
  accountSwitcherItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isCurrent: PropTypes.bool.isRequired
  })).isRequired
};
export default AccountSwitcher;