import Page from "./page.js";
import random from "../utils/random.util.js";
import { config } from "../../wdio.conf.js";
import Input from "../elements/input.element.js";
import Button from "../elements/button.element.js";
import Ancor from "../elements/ancor.element.js";
import Label from "../elements/label.element.js";
import Form from "../elements/form.element.js";
import Div from "../elements/div.element.js";

class CardOne extends Page {
  constructor() {
    super(new Div(`//*[@id="app"]//div[@class="password-check"]`), "Card 1");
  }

  get passwordInput() {
    return new Input(
      `//*[@id="app"]//input[@placeholder="Choose Password"]`,
      "Password Input"
    );
  }

  get emailInput() {
    return new Input(
      `//*[@id="app"]//input[@placeholder="Your email"]`,
      "Email Input"
    );
  }

  get domainInput() {
    return new Input(
      `//*[@id="app"]//input[@placeholder="Domain"]`,
      "Domain Input"
    );
  }

  get dropdownButton() {
    return new Button(
      `//*[@id="app"]//div[contains(@class, "dropdown--gray")]`,
      "Dropdown Button"
    );
  }

  get drowpdownItem() {
    return new Label(
      `//*[@id="app"]//div[contains(@class, "dropdown__list-item") and contains(text(), ".org")]`,
      ".org Item"
    );
  }

  get nextButton() {
    return new Ancor(`//*[@id="app"]//a[text()="Next"]`, "Next Link");
  }

  get termsLabel() {
    return new Label(
      `//*[@id="app"]//label[@for="accept-terms-conditions"]`,
      "Terms Label"
    );
  }

  get helpForm() {
    return new Form(`//*[@id="app"]//div[@class="help-form"]`, "Help Form");
  }

  get acceptCoockiesButton() {
    return new Button(
      `//*[@id="app"]//button[text()="Not really, no"]`,
      "Accept Coockies Button"
    );
  }

  get timer() {
    return new Label(
      `//*[@id="app"]//div[contains(@class, "timer")]`,
      "Timer Label"
    );
  }

  async fillForm() {
    await this.passwordInput.inputText(
      random.randomString(config.randomStringLength)
    );
    await this.emailInput.inputText(
      random.randomString(config.randomStringLength)
    );
    await this.domainInput.inputText(
      random.randomString(config.randomStringLength)
    );
    await this.dropdownButton.click();
    await this.drowpdownItem.click();
    await this.termsLabel.click();
  }

  async clickNext() {
    await this.nextButton.click();
  }

  async hideHelpForm() {
    await browser.execute(() => {
      const element = document.querySelector(".help-form");
      element.style.display = "none";
    });
  }

  async helpForIsDisplayed() {
    return await this.helpForm.isDisplayed();
  }

  async acceptCookies() {
    await this.acceptCoockiesButton.waitForDisplayed();
    await this.acceptCoockiesButton.click();
  }

  async coockiesPresent() {
    return this.acceptCoockiesButton.isDisplayed();
  }

  async getTimerText() {
    return await this.timer.getText();
  }
}

export default new CardOne();
