"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var requestAnimationFrame = global.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0);
};

var _default = requestAnimationFrame;
exports["default"] = _default;