import wait from "../waits/waits.js"

export default class BaseElement {
  constructor(locator, name) {
    this.locator = locator
    this.name = name
  }

  getElement() {
    return $(this.locator)
  }

  async getAttribute(attr) {
    return await this.getElement().getAttribute(attr)
  }

  async waitForDisplayed() {
    await wait.waitForDisplayed(this.getElement())
  }

  async isDisplayed() {
    return await this.getElement().isDisplayed()
  }
}