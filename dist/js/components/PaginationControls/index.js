"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _customPropTypes = require("../../utils/custom-prop-types");

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _Link = _interopRequireDefault(require("../Link"));

var _lodash = _interopRequireDefault(require("lodash"));

var _flatten = _interopRequireDefault(require("lodash/flatten"));

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

var ELLIPSES_PLACEHOLDER = null;

var PaginationControls =
/*#__PURE__*/
function (_Component) {
  _inherits(PaginationControls, _Component);

  function PaginationControls() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PaginationControls);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaginationControls)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handlePageChange", function (newPage) {
      return function () {
        var _this$props = _this.props,
            goToPage = _this$props.goToPage,
            isLoading = _this$props.isLoading;

        if (!isLoading) {
          goToPage(newPage);
        }
      };
    });

    return _this;
  }

  _createClass(PaginationControls, [{
    key: "getCoercedInputs",
    value: function getCoercedInputs() {
      var _this$props2 = this.props,
          currentPage = _this$props2.currentPage,
          totalSlots = _this$props2.totalSlots,
          totalPages = _this$props2.totalPages; // Ensure total pages is at least 2

      var sanitizedTotalPages = Math.max(totalPages, 2); // Ensure at least 7 slots

      var sanitizedTotalSlots = Math.min(Math.max(totalSlots, 7), sanitizedTotalPages); // Calculate number of numbers on either side of currentPage number
      // 5 represents the 5 guaranteed slots
      // (firstPage, beginning dots, currentPage, endingDots, lastPage)

      var buffer = Math.floor((sanitizedTotalSlots - 5) / 2); // Calculate max consecutive numbers (besides 1, lastPage, and ellipses)
      // 3 represents the 3 guaranteed slots when not in the middle state
      // (firstPage, endingDots, lastPage)

      var remainingSlotsToFill = sanitizedTotalSlots - 3; // Adjust current page to stay in range

      var sanitizedCurrentPage = Math.max(Math.min(currentPage, sanitizedTotalPages), 1);
      return {
        totalPages: sanitizedTotalPages,
        totalSlots: sanitizedTotalSlots,
        buffer: buffer,
        remainingSlotsToFill: remainingSlotsToFill,
        currentPage: sanitizedCurrentPage
      };
    }
  }, {
    key: "fillPageSlots",
    value: function fillPageSlots() {
      var _this$getCoercedInput = this.getCoercedInputs(),
          totalPages = _this$getCoercedInput.totalPages,
          totalSlots = _this$getCoercedInput.totalSlots,
          buffer = _this$getCoercedInput.buffer,
          remainingSlotsToFill = _this$getCoercedInput.remainingSlotsToFill,
          currentPage = _this$getCoercedInput.currentPage;

      var distanceFromCurrentPageToFront = currentPage - 1;
      var distanceFromCurrentPageToBack = totalPages - currentPage;
      var currentPageIsCloseToBack = distanceFromCurrentPageToBack + buffer <= remainingSlotsToFill;
      var currentPageIsCloseToFront = distanceFromCurrentPageToFront + buffer <= remainingSlotsToFill;
      var ellipsesRequired = totalPages > totalSlots;

      var pageNumbers = _lodash["default"] // Generate entire array of page numbers
      .times(totalPages, function (i) {
        return i + 1;
      }) // Filter down numbers to only the ones we want to show
      .filter(function (activePage) {
        var distanceBetweenCurrentAndActivePages = Math.abs(currentPage - activePage);
        var distanceBetweenActivePageAndFront = activePage - 1;
        var distanceBetweenActivePageAndBack = totalPages - activePage;

        if (activePage === 1 || activePage === currentPage || activePage === totalPages || !ellipsesRequired) {
          return true;
        }

        if (distanceBetweenCurrentAndActivePages <= buffer) {
          return true;
        }

        if (currentPageIsCloseToFront && distanceBetweenActivePageAndFront <= remainingSlotsToFill) {
          return true;
        }

        if (currentPageIsCloseToBack && distanceBetweenActivePageAndBack <= remainingSlotsToFill) {
          return true;
        }
      }) // Map over the number array and find spots to insert ellipses
      .map(function (val, idx, arr) {
        var frontEllipsesEligible = !currentPageIsCloseToFront && idx === 0;
        var backEllipsesEligible = !currentPageIsCloseToBack && idx === arr.length - 2;

        if (ellipsesRequired && (frontEllipsesEligible || backEllipsesEligible)) {
          return [val, ELLIPSES_PLACEHOLDER];
        }

        return val;
      });

      return (0, _flatten["default"])(pageNumbers);
    }
  }, {
    key: "renderPageNumbers",
    value: function renderPageNumbers() {
      var _this2 = this;

      var isLoading = this.props.isLoading;

      var _this$getCoercedInput2 = this.getCoercedInputs(),
          totalPages = _this$getCoercedInput2.totalPages,
          currentPage = _this$getCoercedInput2.currentPage;

      var controlSlots = this.fillPageSlots();
      return controlSlots.map(function (val, idx) {
        var ariaLabelString = 'Page ' + val;
        var ariaLabelSuffix = '';
        var isCurrent = val === currentPage;

        if (isCurrent) {
          ariaLabelSuffix = ', current page';
        } else if (val === totalPages) {
          ariaLabelSuffix = ', last page';
        }

        return _react["default"].createElement("li", {
          className: "push--sides",
          key: "link-".concat(idx)
        }, val === ELLIPSES_PLACEHOLDER ? _react["default"].createElement("span", null, "...") : _react["default"].createElement(_Link["default"], {
          ariaLabel: ariaLabelString + ariaLabelSuffix,
          style: isCurrent ? 'dark' : 'default',
          href: "javascript:void()",
          onClick: !isCurrent ? _this2.handlePageChange(val) : undefined,
          isDisabled: isLoading
        }, isCurrent ? _react["default"].createElement("strong", null, val) : val));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          isLoading = _this$props3.isLoading,
          testSection = _this$props3.testSection,
          currentPage = _this$props3.currentPage,
          totalPages = _this$props3.totalPages;
      var sanitizedTotalPages = Math.max(totalPages, 2);
      return _react["default"].createElement("nav", {
        className: "oui-pagination-controls",
        "data-test-section": testSection
      }, isLoading && _react["default"].createElement(_Spinner["default"], {
        size: "tiny"
      }), _react["default"].createElement("ul", {
        className: "flex flex-justified--center flex-align--center"
      }, _react["default"].createElement("li", {
        className: "push--sides"
      }, _react["default"].createElement(_Link["default"], {
        href: "javascript:void()",
        onClick: this.handlePageChange(Math.max(1, currentPage - 1)),
        isDisabled: currentPage <= 1 || isLoading,
        ariaLabel: "Previous Page"
      }, "Previous")), this.renderPageNumbers(), _react["default"].createElement("li", {
        className: "push--sides"
      }, _react["default"].createElement(_Link["default"], {
        ariaLabel: "Next Page",
        href: "javascript:void()",
        onClick: this.handlePageChange(Math.min(sanitizedTotalPages, currentPage + 1)),
        isDisabled: currentPage >= sanitizedTotalPages || isLoading
      }, "Next"))));
    }
  }]);

  return PaginationControls;
}(_react.Component);

PaginationControls.propTypes = {
  /** Sets the current page number */
  currentPage: _propTypes["default"].number.isRequired,

  /** Function that is called when a pagination link is clicked */
  goToPage: _propTypes["default"].func.isRequired,

  /** Sets the total number of pages */
  isLoading: _propTypes["default"].bool,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** Sets the total number of pages. Must be >=2 */
  totalPages: (0, _customPropTypes.checkPropIsGreaterThanOrEqualTo)(2, true),

  /**
   * Sets the total number of spots allowed
   * between the Previous and Next buttons.
   * Must be >= 7, default is 9
   */
  totalSlots: (0, _customPropTypes.checkPropIsGreaterThanOrEqualTo)(7, false)
};
PaginationControls.defaultProps = {
  goToPage: function goToPage() {},
  testSection: '',
  totalSlots: 9
};
var _default = PaginationControls;
exports["default"] = _default;