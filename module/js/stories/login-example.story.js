function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #a6a6a6 !important;\n  text-align: center;\n  color: #262626;\n  text-transform: uppercase;\n  margin: 15px auto;\n  position: relative;\n  &:before {\n    box-sizing: border-box;\n    content: '';\n    border-top: 1px dotted #e0e0e0;\n    width: 40%;\n    position: absolute;\n    left: 0;\n    top: 50%;\n  }\n  &:after {\n    content: '';\n    border-top: 1px dotted #e0e0e0;\n    width: 40%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean, select } from '@storybook/addon-knobs';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import Input from '../components/Input';
import Spinner from '../components/Spinner';
import TextField from '../components/TextField';
var Or = styled.div(_templateObject());
var stories = storiesOf('Login', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "login"
  }, story());
});
stories.add('Default state', function () {
  return React.createElement("div", {
    style: styles.container
  }, React.createElement("div", {
    className: "signin-form lego-grid__cell soft-double flex flex--column"
  }, React.createElement("form", {
    className: "flex--1"
  }, React.createElement("ol", {
    className: "lego-form-fields"
  }, React.createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, React.createElement(Input, {
    label: "Email",
    type: "text",
    displayError: _boolean('displayError [email]', false)
  })), React.createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, React.createElement(Input, {
    label: "Password",
    type: "password",
    displayError: _boolean('displayError [pass]', false)
  })), React.createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, React.createElement("a", {
    href: "#"
  }, "Need help loggin in?")), React.createElement("li", {
    className: "lego-form-fields__item"
  }, React.createElement(Checkbox, {
    label: "Keep me logged in"
  }))), React.createElement("div", {
    style: {
      border: 'none'
    },
    className: "lego-form__footer text--center push-triple--top"
  }, React.createElement("div", {
    className: "position--relative height--50 flex flex--column flex-align--center"
  }, React.createElement(Button, {
    className: "lego-button lego-button--highlight lego-button--full push--bottom",
    style: "highlight",
    width: "full"
  }, "Log In")), React.createElement("a", {
    className: "display--block",
    href: "#",
    style: styles.center
  }, "Log in using SSO"))), React.createElement("div", {
    className: "flex--1"
  }, React.createElement(Or, null, "or"), React.createElement(Button, {
    className: "lego-button lego-button--outline lego-button--full",
    style: "outline",
    width: "full"
  }, "Try It Free"))));
});
stories.add('Loading', function () {
  return React.createElement("div", {
    style: styles.container
  }, React.createElement("div", {
    className: "signin-form lego-grid__cell soft-double flex flex--column"
  }, React.createElement("form", {
    className: "flex--1"
  }, React.createElement("ol", {
    className: "lego-form-fields"
  }, React.createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, React.createElement(TextField, {
    label: "Email",
    type: "text",
    value: "wrong@email.com"
  })), React.createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, React.createElement(Input, {
    label: "Password",
    type: "password",
    value: "12345678"
  })), React.createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, React.createElement("a", {
    href: "#"
  }, "Need help loggin in?")), React.createElement("li", {
    className: "lego-form-fields__item"
  }, React.createElement(Checkbox, {
    label: "Keep me logged in"
  }))), React.createElement("div", {
    style: {
      border: 'none'
    },
    className: "lego-form__footer text--center push-triple--top"
  }, React.createElement("div", {
    className: "position--relative height--50 flex flex--column flex-align--center"
  }, React.createElement(Spinner, {
    size: select('size', {
      small: 'small',
      tiny: 'tiny'
    }, 'small')
  })), React.createElement("a", {
    className: "display--block",
    href: "#",
    style: styles.center
  }, "Log in using SSO"))), React.createElement("div", {
    className: "flex--1"
  }, React.createElement(Or, null, "or"), React.createElement(Button, {
    className: "lego-button lego-button--outline lego-button--full",
    style: "outline",
    width: "full"
  }, "Try It Free"))));
});
stories.add('Error', function () {
  return React.createElement("div", {
    style: styles.container
  }, React.createElement("div", {
    className: "signin-form lego-grid__cell soft-double flex flex--column"
  }, React.createElement("form", {
    className: "flex--1"
  }, React.createElement("ol", {
    className: "lego-form-fields"
  }, React.createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, React.createElement(TextField, {
    label: "Email",
    type: "text",
    defaultValue: "wrong@email.com",
    note: "This is an invalid account address",
    displayError: true
  })), React.createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, React.createElement(Input, {
    label: "Password",
    type: "password",
    value: "12345678"
  })), React.createElement("li", {
    className: "lego-form-fields__item push--bottom"
  }, React.createElement("a", {
    href: "#"
  }, "Need help loggin in?")), React.createElement("li", {
    className: "lego-form-fields__item"
  }, React.createElement(Checkbox, {
    label: "Keep me logged in"
  }))), React.createElement("div", {
    style: {
      border: 'none'
    },
    className: "lego-form__footer text--center push-triple--top"
  }, React.createElement("div", {
    className: "position--relative height--50 flex flex--column flex-align--center"
  }, React.createElement(Button, {
    className: "lego-button lego-button--highlight lego-button--full push--bottom",
    style: "highlight",
    width: "full"
  }, "Log In")), React.createElement("a", {
    className: "display--block",
    href: "#",
    style: styles.center
  }, "Log in using SSO"))), React.createElement("div", {
    className: "flex--1"
  }, React.createElement(Or, null, "or"), React.createElement(Button, {
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