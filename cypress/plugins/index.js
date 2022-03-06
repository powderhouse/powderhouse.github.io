/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const browserify = require("@cypress/browserify-preprocessor");

const htmlvalidate = require("cypress-html-validate/dist/plugin");

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("file:preprocessor", browserify()); // TODO: Workaround to make sure Cypress's browserlist is updated, via https://github.com/cypress-io/cypress/issues/2983#issuecomment-570616682
  htmlvalidate.install(on, {
    extends: ["html-validate:standard"],
  });
};
