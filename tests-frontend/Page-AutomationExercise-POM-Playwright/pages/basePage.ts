import { expect, Locator, Page } from "@playwright/test";

export class BasePage {

    protected readonly page: Page

    constructor(page:Page) {
        this.page = page
    }

    async navigateTo(url:string) {
        await this.page.goto(url);
    }

//----------------ACTION---------------------
    protected async getTitle() {
        return await this.page.title();
    }

    protected async clickOn(selector:Locator) {
        await selector.click();
    }

    protected async typeField(selector:Locator, text:string) {
        await selector.fill(text);
    }

    protected async selectOption(selector:Locator, option:string) {
        await selector.selectOption(option);
    }

    protected async getText(selector:Locator) {
        return await selector.textContent();
    }

    protected async pressSequentially(selector:Locator, text:string) {
        await selector.pressSequentially(text);
    }

    protected async focus(selector:Locator) {
        await selector.focus();
    }

//----------------ASSERTIONS---------------------
    protected async expectVisible(selector:Locator){
        await expect(selector).toBeVisible();
    }

    protected async matchesText(selector:Locator, text:string) {
        await expect(selector).toHaveText(text);
    }


}