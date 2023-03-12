export default class Page {
  constructor(uniqueElement, name) {
    this.uniqueElement = uniqueElement;
    this.name = name;
  }

  async isOpen() {
    return this.uniqueElement.isDisplayed();
  }
}
