const { createJestConfig } = require('./test/createJestConfig');

module.exports = createJestConfig({
  displayName: 'repocheck',
  projects: ['<rootDir>', '<rootDir>/packages/*'],
});
