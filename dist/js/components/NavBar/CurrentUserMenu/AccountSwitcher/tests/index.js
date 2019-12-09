"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getTestSection = function getTestSection(component, testSection) {
  return component.find("[data-test-section=\"".concat(testSection, "\"]"));
};

var userAccounts = [{
  text: 'Account 1',
  url: '#',
  description: 'Account 1 Description',
  isCurrent: false
}, {
  text: 'Account 3',
  url: '#',
  description: 'Account 3 Description',
  isCurrent: false
}, {
  text: 'Account 5',
  url: '#',
  description: 'Account 5 Description',
  isCurrent: false
}, {
  text: 'Account 4',
  url: '#',
  description: 'Account 4 Description',
  isCurrent: false
}, {
  text: 'Account 2',
  url: '#',
  description: 'Account 2 Description',
  isCurrent: true
}];
var sortedUserAccounts = [{
  text: 'Account 1',
  url: '#',
  description: 'Account 1 Description',
  isCurrent: false
}, {
  text: 'Account 2',
  url: '#',
  description: 'Account 2 Description',
  isCurrent: true
}, {
  text: 'Account 3',
  url: '#',
  description: 'Account 3 Description',
  isCurrent: false
}, {
  text: 'Account 4',
  url: '#',
  description: 'Account 4 Description',
  isCurrent: false
}, {
  text: 'Account 5',
  url: '#',
  description: 'Account 5 Description',
  isCurrent: false
}];
describe('components/NavBar/CurrentUserMenu/AccountSwitcher', function () {
  var component;
  var handlerObj;
  beforeEach(function () {
    handlerObj = {
      accountSwitcherHandler: function accountSwitcherHandler() {}
    };
    spyOn(handlerObj, 'accountSwitcherHandler');
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      accountSwitcherItems: userAccounts,
      accountSwitcherHandler: handlerObj.accountSwitcherHandler
    }));
  });
  it('should render sorted user accounts', function () {
    expect(component.find('Category').length).toBe(5);
    var renderedUserAccountsNameList = getTestSection(component, 'switch-account-row-name');
    sortedUserAccounts.forEach(function (account, index) {
      expect(renderedUserAccountsNameList.at(index).text()).toBe(account.text);
    });
  });
  it('should call accountSwitcherHandler callback when non-active account is clicked', function () {
    component.find('Item').at(0).props().onClick();
    expect(handlerObj.accountSwitcherHandler).toBeCalled();
  });
  it('should not call accountSwitcherHandler callback when active account item is clicked', function () {
    expect(component.find('Item').at(1).props().onClick).toBe(false);
  });
});