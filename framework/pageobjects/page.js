import Browser from "../utils/browser.util.js";

export default class Page {
  constructor(uniqueElement, name, path) {
    this.uniqueElement = uniqueElement;
    this.name = name;
    this.path = path;
  }

  async navigate() {
    await Browser.open(this.path);
  }
  async isOpen() {
    return await this.uniqueElement.isDisplayed();
  }
}
