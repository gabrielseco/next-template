module.exports = {
  modulePathIgnorePatterns: ['cypress'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@config(.*)$': '<rootDir>/src/config$1',
    '^@modules(.*)$': '<rootDir>/src/modules$1',
    '^@shared(.*)$': '<rootDir>/src/shared$1',
    '^@std(.*)$': '<rootDir>/src/std$1',
    '^@locales(.*)$': '<rootDir>/locales$1',
    '^@routes(.*)$': '<rootDir>/src/routes$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
};
