import Base from "./base.element.js";

class Label extends Base {
  constructor(locator, name) {
    super(locator, name);
  }

  async getText() {
    return this.getElement().getText();
  }
}

export default Label;
