const jestConfig = require('@shopgate/pwa-unit-test/jest.config');

module.exports = {
  ...jestConfig,
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@shopgate/pwa-core|@shopgate/pwa-common|@shopgate/pwa-common-commerce|@shopgate/pwa-ui-ios|@shopgate/pwa-ui-material|@shopgate/pwa-ui-shared|@shopgate/engage|@shopgate/pwa-benchmark|css-spring|swiper|dom7)/).+\\.js$',
  ],
  setupFiles: [
    ...jestConfig.setupFiles,
  ],
};
