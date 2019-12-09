"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Badge = _interopRequireDefault(require("../../../Badge"));

var _BlockList = _interopRequireDefault(require("../../../BlockList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Switch Accounts with in the user
 */
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

    return _react["default"].createElement(_BlockList["default"].Category, {
      key: account.text,
      testSection: "switch-account-row"
    }, _react["default"].createElement(_BlockList["default"].Item, {
      href: "".concat(!account.isCurrent ? account.url : ''),
      onClick: !account.isCurrent && onAccountSelect
    }, _react["default"].createElement("div", {
      "data-test-section": "switch-account-row-name",
      className: (0, _classnames["default"])({
        'color--base': account.isCurrent,
        'color--brand': !account.isCurrent
      })
    }, account.text), _react["default"].createElement("div", {
      className: "micro muted"
    }, account.description), account.isCurrent && _react["default"].createElement(_Badge["default"], {
      color: "primary"
    }, "CURRENT ACCOUNT")));
  });
};

AccountSwitcher.propTypes = {
  /** Function Called to Switch Account */
  accountSwitcherHandler: _propTypes["default"].func.isRequired,

  /* User account list */
  accountSwitcherItems: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    text: _propTypes["default"].string.isRequired,
    description: _propTypes["default"].string.isRequired,
    url: _propTypes["default"].string.isRequired,
    isCurrent: _propTypes["default"].bool.isRequired
  })).isRequired
};
var _default = AccountSwitcher;
exports["default"] = _default;