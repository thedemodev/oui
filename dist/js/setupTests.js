"use strict";

var _tempPollyfills = _interopRequireDefault(require("./tempPollyfills.js"));

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _tempPollyfills["default"])();
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact["default"](),
  disableLifecycleMethods: true
});