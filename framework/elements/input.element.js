import Base from "./base.element.js";

class Input extends Base {
  constructor(locator, name) {
    super(locator, name);
  }

  async inputText(value) {
    await this.getElement().setValue(value);
  }
}

export default Input;
