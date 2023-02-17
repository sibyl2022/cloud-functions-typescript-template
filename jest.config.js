/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots: [
    '<rootDir>'
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [ 'json', 'js', 'jsx', 'ts', 'tsx', 'cjs' ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      'lines': 80,
      'branches': 80,
      'functions': 80,
      'statements': 80
    }
  }
};