import { Page, expect } from 'playwright/test';

export class AccountCreatePage {

    private readonly page: Page;

    constructor(page:Page) {
        this.page = page;
    }

    async titleVisible(){
        const titleAccountCreated = this.page.locator('//div/h2/b[text()="Account Created!"]');
        await expect(titleAccountCreated).toBeVisible();
    }

    async clicButtonContinue() {
        const buttonContinueCreated = this.page.locator('a[data-qa="continue-button"]');
        await buttonContinueCreated.click();
    }

}