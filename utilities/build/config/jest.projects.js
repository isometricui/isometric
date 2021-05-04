const jestConfig = {
  projects: [
    { ...require('./jest.react.js'), displayName: 'react' },
    { ...require('./jest.lint.js'), displayName: 'lint' },
  ],
};

module.exports = jestConfig;
