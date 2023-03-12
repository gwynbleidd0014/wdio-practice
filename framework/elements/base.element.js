import { config } from "../../wdio.conf.js";

export default class BaseElement {
  constructor(locator, name) {
    this.locator = locator;
    this.name = name;
  }

  getElement() {
    return $(this.locator);
  }
  async getAttribute(attr) {
    return this.getElement().getAttribute(attr);
  }

  async isDisplayed() {
    return this.getElement().isDisplayed();
  }

  async click() {
    await this.getElement().click();
  }

  async waitForDisplayed(timeout = config.waitforTimeout) {
    await this.getElement().waitForDisplayed({ timeout });
  }

  async getStyle(property) {
    return this.getElement().getCSSProperty(property);
  }
}
