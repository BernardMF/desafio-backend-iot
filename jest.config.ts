import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/**/*.ts'],
  rootDir: './src',
  coveragePathIgnorePatterns: ['<rootDir/__tests__/*'],
  testPathIgnorePatterns: ['__mocks__'],
  roots: [`<rootDir>/__tests__`]
}
export default config
