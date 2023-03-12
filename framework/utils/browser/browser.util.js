import { assert } from "chai";

class Browser {
  open(path = "") {
    return browser.url(`${path}`);
  }
}

export default new Browser();
