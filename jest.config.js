export default {
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.test.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!src/index.ts',
  ],
  testMatch: ['<rootDir>/test/**/*.(test|spec).{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost'
  },
};
