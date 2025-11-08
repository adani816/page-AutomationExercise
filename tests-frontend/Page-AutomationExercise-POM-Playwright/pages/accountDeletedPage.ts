import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class AccountDeletedPage extends BasePage {

    private readonly titleAccountDeleted: Locator;
    private readonly buttonContinueDeleted: Locator;

    constructor(page:Page) {
        super(page);
        this.titleAccountDeleted = page.locator('//div/h2/b[text()="Account Deleted!"]');
        this.buttonContinueDeleted = page.locator('a[data-qa="continue-button"]');
    }

    async titleVisible(){
        await this.expectVisible(this.titleAccountDeleted);
    }

    async clicButtonContinue() {
        await this.clickOn(this.buttonContinueDeleted)
    }


}
