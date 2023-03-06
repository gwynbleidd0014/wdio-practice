import Page from "./page.js"
import Ancor from "../elements/ancor.element.js"
class Home extends Page {
  constructor() {
    super(`//button[@class="start__button"]`, "Home Page")
  }

  get hereLink() {
    return new Ancor(`//*[@id="app"]//a[@class="start__link"]`, "Here Link")
  }

  open() {
    return super.open("")
  }

  async clickOnHere() {
    await this.hereLink.click()
  }
}

export default new Home()