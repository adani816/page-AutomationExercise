import { Page, expect } from 'playwright/test';

export class AccountDeletedPage {

    private readonly page: Page;

    constructor(page:Page) {
        this.page = page;
    }

    async titleVisible(){
        const titleAccountDeleted = this.page.locator('//div/h2/b[text()="Account Deleted!"]');
        await expect(titleAccountDeleted).toBeVisible();
    }

    async clicButtonContinue() {
        const buttonContinueDeleted = this.page.locator('a[data-qa="continue-button"]');
        await buttonContinueDeleted.click();
    }

}
