import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {

    private readonly titleHomeSlider: Locator;
    private readonly menuOptionSignupLogin: Locator;
    private readonly menuOptionDeletedAccount: Locator;
    private readonly menuOptionUserName: Locator;

    constructor(page:Page) {
        super(page);
    
        this.titleHomeSlider = page.locator('#slider-carousel');
        this.menuOptionSignupLogin = page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a');
        this.menuOptionDeletedAccount = page.locator(`getByRole('link', { name:' Delete Account' })`);
        this.menuOptionUserName = page.locator('//div[2]/div/ul/li[10]/a/b');
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