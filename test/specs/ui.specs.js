import HomePage from '../../framework/pageobjects/home.page.js'
import CardOne from '../../framework/pageobjects/cardOne.page.js'
import CardTwo from '../../framework/pageobjects/cardTwo.page.js'

import {assert} from "chai"

describe('userinyerface', () => {
    it('Check for correct notification', async () => {
        await HomePage.open()
        const homePageIsOpen = await HomePage.isOpen()
        assert.isTrue(homePageIsOpen, "Home Page is Opened")
        await HomePage.clickOnHere()
        const card1PageIsOpen = await CardOne.isOpen()
        assert.isTrue(card1PageIsOpen, "Card 1 Page is Open")
        await CardOne.hideHelpForm()
        await CardOne.fillForm()
        await CardOne.clickNext()
        const card2PageIsOpen = await CardTwo.isOpen()
        assert.isTrue(card2PageIsOpen, "Card 2 Page is Open")
        await CardTwo.selectInsterests()
        await CardTwo.clickNext()
        const notification = await CardTwo.getNotificationText()
        assert.strictEqual(notification, "Please upload a picture", "Check if notification matches")
    })

    it('Help form is hidden', async () => {
        await HomePage.open()
        const homePageIsOpen = await HomePage.isOpen()
        assert.isTrue(homePageIsOpen, "Home Page is Opened")
        await HomePage.clickOnHere()
        const card1PageIsOpen = await CardOne.isOpen()
        assert.isTrue(card1PageIsOpen, "Card 1 Page is Open")
        await CardOne.hideHelpForm()
        const style = await CardOne.getHelpFormDisplayStyle()
        assert.strictEqual(style, "display: none;", "Form content is hidden")
    })

    it('Form is closed', async () => {
        await HomePage.open()
        const homePageIsOpen = await HomePage.isOpen()
        assert.isTrue(homePageIsOpen, "Home Page is Opened")
        await HomePage.clickOnHere()
        const card1PageIsOpen = await CardOne.isOpen()
        assert.isTrue(card1PageIsOpen, "Card 1 Page is Open")
        await CardOne.acceptCookies()
        const cockiesPresent = await CardOne.coockiesPresent()
        assert.isFalse(cockiesPresent, "Form is closed") 
    })

    it('Timer starts on 00:00', async () => {
        await HomePage.open()
        const homePageIsOpen = await HomePage.isOpen()
        assert.isTrue(homePageIsOpen, "Home Page is Opened")
        await HomePage.clickOnHere()
        const card1PageIsOpen = await CardOne.isOpen()
        assert.isTrue(card1PageIsOpen, "Card 1 Page is Open")
  
        const timerTime = await CardOne.getTimerText()
        assert.strictEqual(timerTime, "00:00:00","Timer starts on 00:00") 
    })
})


