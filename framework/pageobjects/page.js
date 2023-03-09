import Browser from "../utils/browser.util.js";

export default class Page {
  constructor(uniqueElement, name) {
    this.uniqueElement = uniqueElement;
    this.name = name;
  }
  async isOpen() {
    return await this.uniqueElement.isDisplayed();
  }
}
