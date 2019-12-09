"use strict";

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _Checkbox = _interopRequireDefault(require("../components/Checkbox"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _Input = _interopRequireDefault(require("../components/Input"));

var _Spinner = _interopRequireDefault(require("../components/Spinner"));

var _TextField = _interopRequireDefault(require("../components/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #a6a6a6 !important;\n  text-align: center;\n  color: #262626;\n  text-transform: uppercase;\n  margin: 15px auto;\n  position: relative;\n  &:before {\n    box-sizing: border-box;\n    content: '';\n    border-top: 1px dotted #e0e0e0;\n    width: 40%;\n    position: absolute;\n    left: 0;\n    top: 50%;\n  }\n  &:after {\n    content: '';\n    border-top: 1px dotted #e0e0e0;\n    width: 40%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Or = _styledComponents["default"].div(_templateObject());

var stories = (0, _react2.storiesOf)('Login', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "login"
  }, story());
});
stories.add('Default state', function () {
  return _react["default"].createElement("div", {
    style: styles.container
  }, _react["default"].createElement("div", {
    className: "signin-form lego-grid__cell soft-double flex flex--column"
  }, _react["default"].createElement("form", {
    className: "flex--1"
  }, _react["default"].createElement("ol", {
    className: "lego-form-fields"
  }, _react["default"].createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, _react["default"].createElement(_Input["default"], {
    label: "Email",
    type: "text",
    displayError: (0, _addonKnobs["boolean"])('displayError [email]', false)
  })), _react["default"].createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, _react["default"].createElement(_Input["default"], {
    label: "Password",
    type: "password",
    displayError: (0, _addonKnobs["boolean"])('displayError [pass]', false)
  })), _react["default"].createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, _react["default"].createElement("a", {
    href: "#"
  }, "Need help loggin in?")), _react["default"].createElement("li", {
    className: "lego-form-fields__item"
  }, _react["default"].createElement(_Checkbox["default"], {
    label: "Keep me logged in"
  }))), _react["default"].createElement("div", {
    style: {
      border: 'none'
    },
    className: "lego-form__footer text--center push-triple--top"
  }, _react["default"].createElement("div", {
    className: "position--relative height--50 flex flex--column flex-align--center"
  }, _react["default"].createElement(_Button["default"], {
    className: "lego-button lego-button--highlight lego-button--full push--bottom",
    style: "highlight",
    width: "full"
  }, "Log In")), _react["default"].createElement("a", {
    className: "display--block",
    href: "#",
    style: styles.center
  }, "Log in using SSO"))), _react["default"].createElement("div", {
    className: "flex--1"
  }, _react["default"].createElement(Or, null, "or"), _react["default"].createElement(_Button["default"], {
    className: "lego-button lego-button--outline lego-button--full",
    style: "outline",
    width: "full"
  }, "Try It Free"))));
});
stories.add('Loading', function () {
  return _react["default"].createElement("div", {
    style: styles.container
  }, _react["default"].createElement("div", {
    className: "signin-form lego-grid__cell soft-double flex flex--column"
  }, _react["default"].createElement("form", {
    className: "flex--1"
  }, _react["default"].createElement("ol", {
    className: "lego-form-fields"
  }, _react["default"].createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, _react["default"].createElement(_TextField["default"], {
    label: "Email",
    type: "text",
    value: "wrong@email.com"
  })), _react["default"].createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, _react["default"].createElement(_Input["default"], {
    label: "Password",
    type: "password",
    value: "12345678"
  })), _react["default"].createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, _react["default"].createElement("a", {
    href: "#"
  }, "Need help loggin in?")), _react["default"].createElement("li", {
    className: "lego-form-fields__item"
  }, _react["default"].createElement(_Checkbox["default"], {
    label: "Keep me logged in"
  }))), _react["default"].createElement("div", {
    style: {
      border: 'none'
    },
    className: "lego-form__footer text--center push-triple--top"
  }, _react["default"].createElement("div", {
    className: "position--relative height--50 flex flex--column flex-align--center"
  }, _react["default"].createElement(_Spinner["default"], {
    size: (0, _addonKnobs.select)('size', {
      small: 'small',
      tiny: 'tiny'
    }, 'small')
  })), _react["default"].createElement("a", {
    className: "display--block",
    href: "#",
    style: styles.center
  }, "Log in using SSO"))), _react["default"].createElement("div", {
    className: "flex--1"
  }, _react["default"].createElement(Or, null, "or"), _react["default"].createElement(_Button["default"], {
    className: "lego-button lego-button--outline lego-button--full",
    style: "outline",
    width: "full"
  }, "Try It Free"))));
});
stories.add('Error', function () {
  return _react["default"].createElement("div", {
    style: styles.container
  }, _react["default"].createElement("div", {
    className: "signin-form lego-grid__cell soft-double flex flex--column"
  }, _react["default"].createElement("form", {
    className: "flex--1"
  }, _react["default"].createElement("ol", {
    className: "lego-form-fields"
  }, _react["default"].createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, _react["default"].createElement(_TextField["default"], {
    label: "Email",
    type: "text",
    defaultValue: "wrong@email.com",
    note: "This is an invalid account address",
    displayError: true
  })), _react["default"].createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, _react["default"].createElement(_Input["default"], {
    label: "Password",
    type: "password",
    value: "12345678"
  })), _react["default"].createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, _react["default"].createElement("a", {
    href: "#"
  }, "Need help loggin in?")), _react["default"].createElement("li", {
    className: "lego-form-fields__item"
  }, _react["default"].createElement(_Checkbox["default"], {
    label: "Keep me logged in"
  }))), _react["default"].createElement("div", {
    style: {
      border: 'none'
    },
    className: "lego-form__footer text--center push-triple--top"
  }, _react["default"].createElement("div", {
    className: "position--relative height--50 flex flex--column flex-align--center"
  }, _react["default"].createElement(_Button["default"], {
    className: "lego-button lego-button--highlight lego-button--full push--bottom",
    style: "highlight",
    width: "full"
  }, "Log In")), _react["default"].createElement("a", {
    className: "display--block",
    href: "#",
    style: styles.center
  }, "Log in using SSO"))), _react["default"].createElement("div", {
    className: "flex--1"
  }, _react["default"].createElement(Or, null, "or"), _react["default"].createElement(_Button["default"], {
    className: "lego-button lego-button--outline lego-button--full",
    style: "outline",
    width: "full"
  }, "Try It Free"))));
});
var styles = {
  container: {
    margin: '0 auto',
    background: 'white',
    width: 300,
    height: 480
  }
};