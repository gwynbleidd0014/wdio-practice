class Wait {
  async waitForDisplayed(element) {
    await element.waitForDisplayed()
  }
}

export default new Wait()