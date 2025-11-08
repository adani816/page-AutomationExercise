import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { Locators } from "./locators";


export class AccountDeletedPage extends BasePage {

    private readonly titleAccountDeleted: Locator;
    private readonly buttonContinueDeleted: Locator;

    constructor(page:Page) {
        super(page);
        this.titleAccountDeleted = page.locator(Locators.account_deleted.title_account_deleted);
        this.buttonContinueDeleted = page.locator(Locators.account_deleted.button_continue_deleted);
    }

    async titleVisible(){
        await this.expectVisible(this.titleAccountDeleted);
    }

    async clicButtonContinue() {
        await this.clickOn(this.buttonContinueDeleted)
    }


}
