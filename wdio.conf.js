export const config = {
  randomStringLength: 10,
  runner: "local",
  specs: ["./test/specs/**/*.js"],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,
      browserName: process.env.BROWSER_NAME || "chrome",
      "goog:chromeOptions": {
        args: ["headless"]
      },
      "moz:firefoxOptions": {
        args: ['-headless']
      }
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
