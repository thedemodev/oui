"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

var _Table = _interopRequireDefault(require("../Table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('DiscloseTable', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], null, _react["default"].createElement(_Table["default"].THead, null, _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TH, {
    isCollapsed: true
  }), _react["default"].createElement(_Table["default"].TH, null, "Experiment Name"), _react["default"].createElement(_Table["default"].TH, {
    isNumerical: true
  }, "Start Date"), _react["default"].createElement(_Table["default"].TH, {
    isNumerical: true
  }, "End Date"), _react["default"].createElement(_Table["default"].TH, {
    isNumerical: true
  }, "Visitors"), _react["default"].createElement(_Table["default"].TH, null, "Status"), _react["default"].createElement(_Table["default"].TH, null, "Project"), _react["default"].createElement(_Table["default"].TH, {
    isNumerical: true
  }, _react["default"].createElement("div", {
    className: "push-half--right"
  }, "Type")))), _react["default"].createElement(_Table["default"].TBody, null, _react["default"].createElement(_index["default"].Row, {
    rowContents: [_react["default"].createElement(_Table["default"].TD, {
      key: 'exp_name',
      verticalAlign: "middle"
    }, "Experiment 1"), _react["default"].createElement(_Table["default"].TD, {
      key: 'exp_start_date',
      isNumerical: true,
      verticalAlign: "middle"
    }, "May 5, 2018"), _react["default"].createElement(_Table["default"].TD, {
      key: 'exp_end_date',
      isNumerical: true,
      verticalAlign: "middle"
    }, "June 1, 2018"), _react["default"].createElement(_Table["default"].TD, {
      key: 'exp_visiors',
      isNumerical: true,
      verticalAlign: "middle"
    }, "358"), _react["default"].createElement(_Table["default"].TD, {
      key: 'exp_status',
      verticalAlign: "middle"
    }, "Running"), _react["default"].createElement(_Table["default"].TD, {
      key: 'exp_project',
      verticalAlign: "middle"
    }, "Optimizely App - Web long name contains a long list of characters which is totally unexpetected"), _react["default"].createElement(_Table["default"].TD, {
      key: 'exp_type',
      isNumerical: true,
      verticalAlign: "middle"
    }, _react["default"].createElement("div", {
      className: "push-half--right"
    }, "A/B"))]
  }, _react["default"].createElement("div", {
    className: "flex soft-double--sides"
  }, _react["default"].createElement("div", null, _react["default"].createElement(_Table["default"], null, _react["default"].createElement(_Table["default"].THead, null, _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TH, null, "Variations"), _react["default"].createElement(_Table["default"].TH, null, "Recorded Results"))), _react["default"].createElement(_Table["default"].TBody, null, _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TD, null, _react["default"].createElement("span", {
    className: "soft--right muted"
  }, "A"), "Variation name short"), _react["default"].createElement(_Table["default"].TD, null, "Not Analyzed")), _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TD, null, _react["default"].createElement("span", {
    className: "soft--right muted"
  }, "B"), "Variation name long contains a lot of characters as you can see here as well."), _react["default"].createElement(_Table["default"].TD, null, "Win")), _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TD, null, _react["default"].createElement("span", {
    className: "soft--right muted"
  }, "C"), "Variation name short"), _react["default"].createElement(_Table["default"].TD, null, "Baseline"))))), _react["default"].createElement("div", {
    className: "soft-double--right"
  }, _react["default"].createElement(_Table["default"], null, _react["default"].createElement(_Table["default"].THead, null, _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TH, null, "Idea"))), _react["default"].createElement(_Table["default"].TBody, null, _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TD, null, _react["default"].createElement("a", null, "Rollout MGMT to specific users"))))), _react["default"].createElement(_Table["default"], null, _react["default"].createElement(_Table["default"].THead, null, _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TH, null, "Analysis"))), _react["default"].createElement(_Table["default"].TBody, null, _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TD, null, _react["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora.")))))))), _react["default"].createElement(_index["default"].Row, {
    rowContents: [_react["default"].createElement(_Table["default"].TD, {
      key: 'exp_name'
    }, "Experiment 2 has a very long name as you can see as well here that its a really long name"), _react["default"].createElement(_Table["default"].TD, {
      key: 'exp_start_date',
      isNumerical: true,
      verticalAlign: "middle"
    }, "May 5, 2018"), _react["default"].createElement(_Table["default"].TD, {
      key: 'exp_end_date',
      isNumerical: true,
      verticalAlign: "middle"
    }, "June 1, 2018"), _react["default"].createElement(_Table["default"].TD, {
      key: 'exp_visiors',
      isNumerical: true,
      verticalAlign: "middle"
    }, "358"), _react["default"].createElement(_Table["default"].TD, {
      key: 'exp_status',
      verticalAlign: "middle"
    }, "Paused"), _react["default"].createElement(_Table["default"].TD, {
      key: 'exp_project',
      verticalAlign: "middle"
    }, "Optimizely App - Web long name..."), _react["default"].createElement(_Table["default"].TD, {
      key: 'exp_type',
      isNumerical: true,
      verticalAlign: "middle"
    }, _react["default"].createElement("div", {
      className: "push-half--right"
    }, "A/B"))]
  }, _react["default"].createElement("p", {
    className: "soft--sides"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora.")))));
});