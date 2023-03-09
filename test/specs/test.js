import HomePage from "../../framework/pageobjects/home.page.js";
import CardOne from "../../framework/pageobjects/cardOne.page.js";
import CardTwo from "../../framework/pageobjects/cardTwo.page.js";
import Browser from "../../framework/utils/browser.util.js";
import data from "../../data/ui/ui.data.json" assert { type: "json" };
import { assert } from "chai";

describe("userinyerface", () => {
  it("Check for correct notification", async () => {
    await Browser.open();
    const homePageIsOpen = await HomePage.isOpen();
    assert.isTrue(homePageIsOpen, "Home Page is Opened");
    await HomePage.clickOnHere();
    const card1PageIsOpen = await CardOne.isOpen();
    assert.isTrue(card1PageIsOpen, "Card 1 Page is Open");
    await CardOne.hideHelpForm();
    await CardOne.fillForm();
    await CardOne.clickNext();
    const card2PageIsOpen = await CardTwo.isOpen();
    assert.isTrue(card2PageIsOpen, "Card 2 Page is Open");
    await CardTwo.selectInsterests();
    await CardTwo.clickNext();
    const notification = await CardTwo.getNotificationText();
    const color = await CardTwo.getNotificationColor();
    assert.strictEqual(
      notification,
      data.case1.notificationText,
      "Check if notification matches"
    );
    assert.strictEqual(
      color.value,
      data.case1.notificationTextColor,
      "Chek if notification text color matches"
    );
  });

  it("Help form is hidden", async () => {
    await Browser.open();
    const homePageIsOpen = await HomePage.isOpen();
    assert.isTrue(homePageIsOpen, "Home Page is Opened");
    await HomePage.clickOnHere();
    const card1PageIsOpen = await CardOne.isOpen();
    assert.isTrue(card1PageIsOpen, "Card 1 Page is Open");
    await CardOne.hideHelpForm();
    const helpFormIsPresent = await CardOne.helpForIsDisplayed();
    assert.isFalse(helpFormIsPresent, "Help form is hidden");
  });

  it("Form is closed", async () => {
    await Browser.open();
    const homePageIsOpen = await HomePage.isOpen();
    assert.isTrue(homePageIsOpen, "Home Page is Opened");
    await HomePage.clickOnHere();
    const card1PageIsOpen = await CardOne.isOpen();
    assert.isTrue(card1PageIsOpen, "Card 1 Page is Open");
    await CardOne.acceptCookies();
    const cockiesPresent = await CardOne.coockiesPresent();
    assert.isFalse(cockiesPresent, "Form is closed");
  });

  it(`Timer starts on ${data.case4.timerStart}}`, async () => {
    await Browser.open();
    const homePageIsOpen = await HomePage.isOpen();
    assert.isTrue(homePageIsOpen, "Home Page is Opened");
    await HomePage.clickOnHere();
    const card1PageIsOpen = await CardOne.isOpen();
    assert.isTrue(card1PageIsOpen, "Card 1 Page is Open");

    const timerTime = await CardOne.getTimerText();
    assert.strictEqual(
      timerTime,
      `${data.case4.timerStart}`,
      `Timer starts on ${data.case4.timerStart}`
    );
  });
});
