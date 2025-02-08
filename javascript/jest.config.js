module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/javascript/**/*.test.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  verbose: true
};