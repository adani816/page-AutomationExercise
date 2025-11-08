import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { Locators } from "./locators";


export class AccountCreatePage extends BasePage {

    private readonly titleAccountCreated: Locator;
    private readonly buttonContinueCreated: Locator;

    constructor(page:Page) {
        super(page);
        this.titleAccountCreated = page.locator(Locators.account_created.title_account_created);
        this.buttonContinueCreated = page.locator(Locators.account_created.button_continue_created);
    }

    async titleVisible(){
        await this.expectVisible(this.titleAccountCreated);
    }

    async clicButtonContinue() {
        await this.clickOn(this.buttonContinueCreated)
    }

}