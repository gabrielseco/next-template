/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = (on, config) => {
  // enable code coverage collection
  /*  require('@cypress/code-coverage/task')(on, config); */
  require('cypress-fail-fast/plugin')(on, config);

  return config;
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};
