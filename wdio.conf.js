export const config = {
  baseUrl: "https://userinyerface.com/",
  randomStringLength: 10,
  runner: "local",
  specs: ["./test/specs/**/*.js"],

  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: process.env.BROWSER_NAME || "firefox",
      "goog:chromeOptions": {
        args: ["--headless", "--no-sandbox", "--disable-dev-shm-usage"],
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
  services:
    process.env.BROWSER_NAME === "chrome"
      ? ["chromedriver"]
      : ["selenium-standalone"],
  framework: "mocha",
  reporters: [
    "spec",
    [
      "junit",
      {
        outputDir: "./",
        outputFileFormat: function (options) {
          return `./reports/results-${options.cid}.${new Date().getDate()}.xml`;
        },
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
