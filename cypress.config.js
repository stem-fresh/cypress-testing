const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.TEST_EMAIL = process.env.TEST_EMAIL;
      return config;
    },
  },
});
