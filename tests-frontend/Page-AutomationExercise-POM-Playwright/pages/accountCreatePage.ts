import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class AccountCreatePage extends BasePage {

    private readonly titleAccountCreated: Locator;
    private readonly buttonContinueCreated: Locator;

    constructor(page:Page) {
        super(page);
        this.titleAccountCreated = page.locator('//div/h2/b[text()="Account Created!"]');
        this.buttonContinueCreated = page.locator('a[data-qa="continue-button"]');
    }

    async titleVisible(){
        await this.expectVisible(this.titleAccountCreated);
    }

    async clicButtonContinue() {
        await this.clickOn(this.buttonContinueCreated)
    }

}