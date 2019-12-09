"use strict";

var _ = require('lodash');

var generateComment = function generateComment(description, isDeprecated) {
  var comments = [];

  if (description) {
    comments.push("// ".concat(description));
  }

  if (isDeprecated) {
    comments.push('// @deprecated');
  }

  if (comments.length > 0) {
    return "\n".concat(comments.join('\n'));
  }

  return '';
};

var toCJS = function toCJS(memo, _ref) {
  var id = _ref.id,
      value = _ref.value,
      description = _ref.description,
      deprecated = _ref.deprecated;

  if (!id) {
    throw new Error('An `id` must be provided.');
  }

  if (!value) {
    throw new Error('A `value` must be provided.');
  }

  var formattedName = _.camelCase(id);

  var formattedValue = _.isNumber(value) ? value : "'".concat(value, "'");
  var comment = generateComment(description, deprecated);
  return "".concat(memo).concat(comment, "\nexports.").concat(formattedName, " = ").concat(formattedValue, ";");
};

module.exports = toCJS;