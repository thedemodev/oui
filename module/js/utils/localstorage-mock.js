// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({
  adapter: new Adapter()
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