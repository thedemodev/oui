"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TokensInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTagsinput = _interopRequireDefault(require("react-tagsinput"));

var _Token = _interopRequireDefault(require("../Token"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @typedef {Object} TokenWrapper
 * @property {String} name - The text display for the token.
 * @property {String=} style - The style to use for displaying via <Token>
 *            Indicates how to style the token.
 */

/**
 * Key codes which should be interpreted as an
 * indication to add the current text as a new token.
 */
var ADD_KEYS = [
/** TAB   */
{
  keyCode: 9,
  match: '\t'
},
/** ENTER */
{
  keyCode: 13,
  match: '\n'
},
/** COMMA */
{
  keyCode: 188,
  match: ','
}];
/**
 * Tokens Input Component
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var TokensInput = function TokensInput(_ref) {
  var addOnBlur = _ref.addOnBlur,
      addOnPaste = _ref.addOnPaste,
      extraAddKeys = _ref.extraAddKeys,
      maxTags = _ref.maxTags,
      onChange = _ref.onChange,
      onInputBlur = _ref.onInputBlur,
      onInputChange = _ref.onInputChange,
      onInputFocus = _ref.onInputFocus,
      placeholder = _ref.placeholder,
      tokens = _ref.tokens;

  /**
   * Wrap the layout in a flexed <div>
   * https://github.com/olahol/react-tagsinput#renderlayout
   * @param {Array<ReactElement>} tokenComponents - Token components
   * @param {ReactElement} inputComponent - Input component
   * @returns {ReactElement}
   */
  function renderLayout(tokenComponents, inputComponent) {
    return _react["default"].createElement("div", {
      className: "flex flex-1 flex-wrap"
    }, tokenComponents, inputComponent);
  }
  /**
   * Render an OUI Token to display each token.
   * https://github.com/olahol/react-tagsinput#rendertag
   *
   * @param {Object} renderOptions - Values to render token
   * @returns {ReactElement}
   */


  function renderToken(_ref2) {
    var tag = _ref2.tag,
        key = _ref2.key,
        onRemove = _ref2.onRemove;

    // eslint-disable-line react/prop-types
    function onDismiss() {
      onRemove(key);
    }

    var name = tag.name,
        style = tag.style;
    return _react["default"].createElement(_Token["default"], {
      key: key,
      hasSnugWrap: true,
      isDismissible: true,
      onDismiss: onDismiss,
      name: name,
      style: style,
      showWell: false,
      testSection: "token"
    });
  }
  /**
   * Handler for when a string is pasted into the input.
   * Splits the string on all the addKeys and extraAddKeys.
   * https://github.com/olahol/react-tagsinput#pastesplit
   *
   * @param {string} str - The pasted string.
   * @returns {Array<string>}
   */


  function pasteSplit(str) {
    return ADD_KEYS.map(function (k) {
      return k.match;
    }).concat(extraAddKeys) // Split the string by all our addKeys by joining with a
    // \n, which we will use as the final split operator.
    .reduce(function (acc, value) {
      return acc.split(value).join('\n');
    }, str).split('\n').filter(function (k) {
      return !!k;
    });
  }
  /**
   * When the list of tokens changes, convert any string tokens
   * to object form and ensure there are no duplicates.
   * @param {Array.<TokenWrapper|String>} allTokens - All tokens
   */


  function __onChange(allTokens) {
    var updatedTokens = allTokens.reduce(function (acc, token) {
      // A newly typed token will be in string form
      if (typeof token === 'string') {
        token = {
          name: token
        };
      }

      if (!acc.find(function (item) {
        return item.name === token.name;
      })) {
        acc.push(token);
      }

      return acc;
    }, []).filter(function (token) {
      return !!token.name;
    });
    onChange(updatedTokens);
  }

  var addKeys = ADD_KEYS.map(function (k) {
    return k.keyCode;
  }).concat(extraAddKeys);
  var isNumberOfTokensMoreThanOrEqualToMaxTags = tokens.length >= maxTags && maxTags !== -1;
  var minWidth = isNumberOfTokensMoreThanOrEqualToMaxTags ? '' : 'min-width--150';
  return _react["default"].createElement("div", {
    className: "oui-text-input text--left flush height--auto"
  }, _react["default"].createElement(_reactTagsinput["default"], {
    addKeys: addKeys,
    addOnBlur: addOnBlur,
    addOnPaste: addOnPaste,
    inputProps: {
      className: "flex flex--1 ".concat(minWidth, " no-border soft-half--ends soft--sides border-radius push-half--left"),
      onBlur: onInputBlur,
      onChange: onInputChange,
      onFocus: onInputFocus,
      placeholder: isNumberOfTokensMoreThanOrEqualToMaxTags ? '' : placeholder,
      readOnly: isNumberOfTokensMoreThanOrEqualToMaxTags
    },
    maxTags: maxTags,
    onChange: __onChange,
    onlyUnique: true,
    pasteSplit: pasteSplit,
    renderTag: renderToken,
    renderLayout: renderLayout,
    value: tokens
  }));
};

exports.TokensInput = TokensInput;
TokensInput.propTypes = {
  /**
   * Adds a new tag on input blur
   */
  addOnBlur: _propTypes["default"].bool,

  /**
   * Adds a new tag on input paste
   */
  addOnPaste: _propTypes["default"].bool,

  /**
   * Additional keycodes which should be considered
   * an intent to enter the current string as a new Token.
   * See ADD_KEYS above.
   */
  extraAddKeys: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),

  /**
   * Maximum number of allowed tokens (pass-through to <ReactTagsInput>)
   */
  maxTags: _propTypes["default"].number,

  /**
   * Handler to invoke when the token list changes.
   */
  onChange: _propTypes["default"].func.isRequired,

  /**
   * Handler to invoke when the token input is blurred
   */
  onInputBlur: _propTypes["default"].func,

  /**
   * Handler to invoke when the token input changes
   */
  onInputChange: _propTypes["default"].func,

  /**
   * Handler to invoke when the token input is focused
   */
  onInputFocus: _propTypes["default"].func,

  /**
   * Placeholder text for the input box.
   */
  placeholder: _propTypes["default"].string,

  /**
   * @type {Array.<TokenWrapper>}
   */
  tokens: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired
};
TokensInput.defaultProps = {
  addOnBlur: true,
  addOnPaste: true,
  extraAddKeys: [],
  maxTags: -1,
  onInputBlur: function onInputBlur() {},
  onInputChange: function onInputChange() {},
  onInputFocus: function onInputFocus() {},
  placeholder: 'enter tokens'
};
var _default = TokensInput;
exports["default"] = _default;