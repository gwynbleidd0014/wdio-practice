import Page from "./page.js";
import Ancor from "../elements/ancor.element.js";
import Button from "../elements/button.element.js";

class Home extends Page {
  constructor() {
    super(new Button(`//button[@class="start__button"]`), "Home Page");
  }

  get hereLink() {
    return new Ancor(`//*[@id="app"]//a[@class="start__link"]`, "Here Link");
  }

  async clickOnHere() {
    await this.hereLink.click();
  }
}

export default new Home();
