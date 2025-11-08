import { expect, Locator, Page } from "@playwright/test";

export class BasePage {

    protected readonly page: Page

    constructor(page:Page) {
        this.page = page
    }

    async navigateTo() {
        await this.page.goto('/');
    }

//----------------ACTION---------------------
    protected async getTitle() {
        return await this.page.title();
    }

    protected async clickOn(selector:Locator) {
        await selector.isVisible();
        await selector.click();
    }

    protected async typeField(selector:Locator, text:string) {
        await selector.isVisible();
        await selector.fill(text);
    }

    protected async selectOption(selector:Locator, option:string) {
        await selector.isVisible();
        await selector.selectOption(option);
    }

    protected async getText(selector:Locator) {
        await selector.isVisible();
        return await selector.textContent();
    }

    protected async pressSequentially(selector:Locator, text:string) {
        await selector.isVisible();
        await selector.pressSequentially(text);
    }

    protected async focus(selector:Locator) {
        await selector.isVisible();
        await selector.focus();
    }

//----------------ASSERTIONS---------------------
    protected async expectVisible(selector:Locator, options?: { timeout?: number; message?: string }){
        const timeout = options?.timeout ?? 5000;
        await selector.waitFor({ state: 'visible', timeout });
        await expect(selector).toBeVisible(  { timeout });
    }

    protected async matchesText(selector:Locator, text:string) {
        await selector.isVisible();
        await expect(selector).toHaveText(text);
    }


}