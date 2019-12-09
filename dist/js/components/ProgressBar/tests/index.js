"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/ProgressBar', function () {
  it('should render a progressbar with a top label', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      topLabel: "this is a top label"
    }));
    expect(component.props().topLabel).toEqual('this is a top label');
  });
  it('should render a progressbar with left and right bottom ', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      leftLabel: "this is a left bottom label"
    }));
    expect(component.props().leftLabel).toEqual('this is a left bottom label');
  });
  it('should render a progressbar with left and right bottom label', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      rightLabel: "this is a right bottom label"
    }));
    expect(component.props().rightLabel).toEqual('this is a right bottom label');
  });
  it('should render a progressbar with prop min equal to 0', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      min: "0"
    }));
    expect(component.props().min).toEqual('0');
  });
  it('should render a progressbar with prop max equals to 100', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      max: "100"
    }));
    expect(component.props().max).toEqual('100');
  });
  it('should render a progressbar with progress prop equal to 60', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      progress: "60"
    }));
    expect(component.props().progress).toEqual('60');
  });
  it('should render a progressbar with min, max and progress props', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      progress: "60"
    }));
    expect(component.props().progress).toEqual('60');
  });
  it('should render a progressbar with error have displayError set to true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      displayError: true
    }));
    expect(component.props().displayError).toEqual(true);
  });
  it('should render text based on progress prop', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      displayError: true,
      progress: "60"
    }));
    expect(component.text()).toEqual('60%');
  });
  it('should render text for bottom labels and not in the bar', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      displayError: true,
      progress: "60",
      leftLabel: "left label",
      rightLabel: "right label"
    }));
    expect(component.text()).toEqual('left label: 60%right label: 40%');
  });
});