const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^components$': '<rootDir>/src/components',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^pages$': '<rootDir>/src/pages',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^svg$': '<rootDir>/src/tests/svg',
  },
  testEnvironment: 'jest-environment-jsdom',
  coveragePathIgnorePatterns: ['node_modules', 'test-config', 'index.js'],
};

module.exports = createJestConfig(customJestConfig);
