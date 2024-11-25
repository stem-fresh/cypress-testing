const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.TEST_EMAIL = process.env.TEST_EMAIL;
      return config;
    },
  },
});

module.exports = {
  e2e: {
    supportFile: false, // Disable the support file
  },
};
