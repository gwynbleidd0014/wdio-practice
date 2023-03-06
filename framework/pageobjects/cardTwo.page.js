import Page from "./page.js"
import Label from "../elements/label.element.js"
import Button from "../elements/button.element.js"
class CardTwo extends Page {
  constructor() {
    super(`//*[@id="app"]//div[@class="avatar-and-interests__form"]`, "Card 1")
  }

  get unselectAll() {
    return new Label(`//*[@id="app"]//label[@for="interest_unselectall"]//span[@class="checkbox__box"]`, "Unselect all label")
  }

  get checkboxes() {
      const rawElements = $$(`//*[@id="app"]//label[@class="checkbox__label"]`)
      const labels = rawElements.map((el, i)=> {
        return new Label(`//*[@id="app"]//div[@class="avatar-and-interests__interests-list"]/div[${i+1}]//label[@class="checkbox__label"]`)
      })
      return labels
  }

  get errofNotification() {
    return new Label(`//*[@id="app"]//li[@class="avatar-and-interests__error"]`, "Error notification")
  }

  get nextButton() {
    return new Button(`//*[@id="app"]//button[text()="Next"]`, "Next Button")
  }

  async selectInsterests() {
    await this.unselectAll.click()
    const inputs = this.checkboxes
    for(let i = 0; i < 3; i++) {
      await inputs[i].click()
    }
  }

  async clickNext() {
    await this.nextButton.click()
  }

  async getNotificationText() {
   await this.errofNotification.waitForDisplayed()
    return await this.errofNotification.getText()
  }

}

export default new CardTwo()