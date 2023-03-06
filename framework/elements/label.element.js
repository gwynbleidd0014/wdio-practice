import Base from './base.element.js'

class Label extends Base {
  constructor(locator, name) {
    super(locator, name)
  }

  async click(){
    await this.getElement().click()
  }

  async getText() {
    return await this.getElement().getText()
  }
}

export default Label