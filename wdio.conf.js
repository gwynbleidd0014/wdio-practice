export const config = {
  baseUrl: "https://userinyerface.com/",
  randomStringLength: 10,
  runner: "local",
  specs: ["./test/specs/**/*.js"],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,
      browserName: process.env.BROWSER_NAME,
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: ["headless", "disable-gpu"],
      },
      "moz:firefoxOptions": {
        args: ["-headless"],
      },
    },
  ],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["selenium-standalone"],
  framework: "mocha",
  reporters: [
    "spec",
    [
      "junit",
      {
        outputDir: "./",
        outputFileFormat: function (options) {
          return `results-${options.cid}.${new Date().getDate}.xml`;
        },
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
