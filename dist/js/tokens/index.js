#!/usr/bin/env node
"use strict";

var _ = require('lodash');

var path = require('path');

var glob = require('glob');

var fse = require('fs-extra');

var formatToES = require('./formatters/javascript-es');

var formatToCJS = require('./formatters/javascript-cjs');

var formatToScss = require('./formatters/scss');

var clean = function clean() {
  var outputDir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : './forimport';
  // Clean `dist` directory before starting.
  fse.removeSync(outputDir);
};

var processFiles = function processFiles() {
  var globPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : path.resolve(__dirname, './src/*.json');
  var files = glob.sync(globPath);

  if (files.length === 0) {
    throw new Error("No files were found in ".concat(globPath, "\u2026"));
  } else {
    // eslint-disable-next-line no-console
    console.log("Processing (".concat(files.length, ") files..."));
  }

  var contents = {
    cjs: [],
    es: [],
    scss: []
  };

  _.forEach(files, function (file) {
    var fileText = fse.readFileSync(file).toString();
    var fileJSON = JSON.parse(fileText);

    var cjs = _.trim(_.reduce(fileJSON.tokens, formatToCJS, ''));

    var es = _.trim(_.reduce(fileJSON.tokens, formatToES, ''));

    var scss = _.trim(_.reduce(fileJSON.tokens, formatToScss, ''));

    contents.cjs.push(cjs);
    contents.es.push(es);
    contents.scss.push(scss);
  });

  return {
    cjs: contents.cjs.join('\n'),
    es: contents.es.join('\n'),
    scss: contents.scss.join('\n')
  };
};

var saveFiles = function saveFiles(contents) {
  var dist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : path.resolve(__dirname, './forimport');

  if (process.env.NODE_ENV !== 'test') {
    /* eslint-disable no-console */
    var file = "".concat(dist, "/index.cjs.js");
    fse.outputFileSync(file, contents.cjs + '\n');
    console.log("Saved: ".concat(file, "."));
    file = "".concat(dist, "/index.es.js");
    fse.outputFileSync(file, contents.es + '\n');
    console.log("Saved: ".concat(file, "."));
    file = "".concat(dist, "/_index.scss");
    fse.outputFileSync(file, contents.scss);
    console.log("Saved: ".concat(file, "."));
    /* eslint-enable no-console */
  }
}; // Execute the code here.


clean();
var contents = processFiles();
saveFiles(contents); // Export functions for testing.

module.exports = {
  clean: clean,
  processFiles: processFiles,
  saveFiles: saveFiles
};