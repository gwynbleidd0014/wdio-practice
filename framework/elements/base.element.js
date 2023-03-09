export default class BaseElement {
  constructor(locator, name) {
    this.locator = locator;
    this.name = name;
  }

  getElement() {
    return $(this.locator);
  }
  async getAttribute(attr) {
    return await this.getElement().getAttribute(attr);
  }

  async waitForDisplayed() {
    await wait.waitForDisplayed(this.getElement());
  }

  async isDisplayed() {
    return await this.getElement().isDisplayed();
  }

  async click() {
    await this.getElement().click();
  }

  async waitForDisplayed(timeout = null) {
    const options = timeout ? { timeout } : {};
    await this.getElement().waitForDisplayed(options);
  }

  async getStyle(property) {
    return await this.getElement().getCSSProperty(property);
  }
}
