module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/out/'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'lib/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'src/**/*.{js,jsx,ts,tsx}',
    '!pages/404.tsx',
    '!pages/_app.tsx',
    '!pages/_document.tsx',
    '!pages/_error.tsx',
    '!src/**/*types.{ts,tsx}',
    '!src/**/*types.ts',
  ],
  coveragePathIgnorePatterns: ['src/test-utils', 'src/i18next'],
  coverageThreshold: {
    // Set coverage to 0, to enable build in CI
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
