const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tqwjds',
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
