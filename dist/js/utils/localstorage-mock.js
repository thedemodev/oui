"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// setup file
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact["default"]()
});

var localStorageMock = function () {
  var store = {};
  return {
    getItem: function getItem(key) {
      return store[key];
    },
    setItem: function setItem(key, value) {
      store[key] = value.toString();
    },
    clear: function clear() {
      store = {};
    },
    removeItem: function removeItem(key) {
      delete store[key];
    }
  };
}();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});