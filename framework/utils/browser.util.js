import { assert } from "chai";
import data from "../../data/ui/ui.data.json" assert { type: "json" };

class Browser {
  open(path="") {
    return browser.url(`${data.baseURL}${path}`);
  }
}

export default new Browser();
