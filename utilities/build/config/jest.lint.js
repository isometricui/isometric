const jestLintConfig = {
  ...require('./jest.common'),
  runner: 'jest-runner-eslint',
  testMatch: [
    '<rootDir>/**/*.ts',
    '<rootDir>/**/*.tsx',
    '!<rootDir>/**/__tests__/*.ts',
    '!<rootDir>/**/__tests__/*.tsx',
  ],
};

module.exports = jestLintConfig;
