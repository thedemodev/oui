import { withState, withHandlers, compose } from 'recompose';
export var withToggle = compose(withState('isOpen', 'toggle', function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen || false;
}), withHandlers({
  show: function show(_ref2) {
    var toggle = _ref2.toggle;
    return function (e) {
      return toggle(true);
    };
  },
  hide: function hide(_ref3) {
    var toggle = _ref3.toggle;
    return function (e) {
      return toggle(false);
    };
  },
  toggle: function toggle(_ref4) {
    var _toggle = _ref4.toggle;
    return function (e) {
      return _toggle(function (current) {
        return !current;
      });
    };
  }
}));