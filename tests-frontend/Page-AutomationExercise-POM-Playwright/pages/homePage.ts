import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { Locators } from "./locators";


export class HomePage extends BasePage {

    private readonly titleHomeSlider: Locator;
    private readonly menuOptionSignupLogin: Locator;
    private readonly menuOptionDeletedAccount: Locator;
    private readonly menuOptionUserName: Locator;

    constructor(page:Page) {
        super(page);
    
        this.titleHomeSlider = page.locator(Locators.home.titleHomeSlider);
        this.menuOptionSignupLogin = page.locator(Locators.home.menuOptionSignupLogin);
        this.menuOptionDeletedAccount = page.locator(Locators.home.menuOptionDeleteAccount);
        this.menuOptionUserName = page.locator(Locators.home.menuOptionUserName);
    }

    async homePageVisible() {
        await this.expectVisible(this.titleHomeSlider);
    }

    async optionMenuSignUpLogin()  {
        await this.clickOn(this.menuOptionSignupLogin);      
    }

    async optionMenuDeleteAccount(){
        //PENDIENTE AJUSTAR ESTE LOCALIZADOR 
        await this.page.getByRole('link', { name: ' Delete Account' }).click();
    }

    async userNameVisible() {
        await this.expectVisible(this.menuOptionUserName);
    }
}