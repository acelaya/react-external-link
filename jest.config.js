module.exports = {
  roots: [ '<rootDir>/src' ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '/test/.*(test|spec))\\.tsx?$',
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx' ],
};
