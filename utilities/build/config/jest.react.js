const jestReactConfig = {
  ...require('./jest.common'),
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};

module.exports = jestReactConfig;
