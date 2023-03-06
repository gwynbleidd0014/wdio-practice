/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    constructor(uniqueLocator, name) {
        this.uniqueLocator = uniqueLocator
        this.name = name
    }
    open (path) {
        return browser.url(`https://userinyerface.com/${path}`)
    }

    async isOpen() {
        const element = await $(this.uniqueLocator)
        return element ? true : false
    }
}
