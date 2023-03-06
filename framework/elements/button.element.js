import Base from './base.element.js'

class Button extends Base {
  constructor(locator, name) {
    super(locator, name)
  }

  async click(){
    await this.getElement().click()
  }
}

export default Button