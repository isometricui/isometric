const path = require('path');

const jestCommonConfig = {
  moduleDirectories: ['node_modules', path.resolve(__dirname, '../node_modules')],
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

module.exports = jestCommonConfig;
