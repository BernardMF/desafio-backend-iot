import type { Config } from '@jest/types'
// module.exports = {
//   preset: 'ts-jest',
//   clearMocks: true,
//   collectCoverage: true,
//   collectCoverageFrom: ['./src/**/.ts'],
//   coverageDirectory: 'coverage',
//   coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/'],
//   //coverageThreshold: 100,
//   moduleFileExtensions: ['js', 'ts', 'json'],
//   testMatch: ['<rootdir>/__tests__/**/*.ts'],
//   testPathIgnorePatterns: ['/node_modules/'],
//   verbose: true
// }
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/**/*.ts'],
  rootDir: './src',
  coveragePathIgnorePatterns: ['<rootDir/__tests__/*'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/__mocks__'],
  roots: [`<rootDir>/__tests__`]
}
export default config
