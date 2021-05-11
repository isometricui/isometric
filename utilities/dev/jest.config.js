module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-node',
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', './src/templates'],
};
