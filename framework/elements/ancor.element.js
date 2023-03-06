import Base from './base.element.js'

class Ancor extends Base {
  constructor(locator, name) {
    super(locator, name)
  }

  async click(){
    await this.getElement().click()
  }
}

export default Ancor