"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ExampleComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ExampleComponent, _Component);

  function ExampleComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ExampleComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ExampleComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      name: ''
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputUpdate", function (event) {
      _this.setState({
        name: event.target.value
      });
    });

    return _this;
  }

  _createClass(ExampleComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          aString = _this$props.aString,
          aNumber = _this$props.aNumber,
          aBoolean = _this$props.aBoolean,
          _aFunction = _this$props.aFunction,
          anArray = _this$props.anArray,
          anObject = _this$props.anObject,
          children = _this$props.children;
      var name = this.state.name;
      return _react["default"].createElement("div", {
        className: "oui-example-component"
      }, children({
        handleInputUpdate: this.handleInputUpdate.bind(this),
        aString: "".concat(aString, " (with updates)"),
        aNumber: aNumber + 1,
        aBoolean: !aBoolean,
        aFunction: function aFunction() {
          _aFunction('updated');
        },
        anArray: anArray.concat([4, 5, 6]),
        anObject: Object.assign({}, anObject, {
          newKey: true
        }),
        name: name
      }));
    }
  }]);

  return ExampleComponent;
}(_react.Component);

_defineProperty(ExampleComponent, "propTypes", {
  /** A string prop */
  aBoolean: _propTypes["default"].bool,

  /** A number prop */
  aFunction: _propTypes["default"].func,

  /** A boolean prop */
  aNumber: _propTypes["default"].number,

  /** An array prop */
  aString: _propTypes["default"].string,

  /** An object prop */
  anArray: _propTypes["default"].array,

  /** A function prop */
  anObject: _propTypes["default"].object,

  /** This prop uses a Render Pattern, so requires a function as a child */
  children: _propTypes["default"].func.isRequired
});

_defineProperty(ExampleComponent, "defaultProps", {
  aString: 'initial string value',
  aNumber: 0,
  aBoolean: false,
  anArray: [],
  anObject: {},
  aFunction: function aFunction() {}
});

var _default = ExampleComponent;
exports["default"] = _default;