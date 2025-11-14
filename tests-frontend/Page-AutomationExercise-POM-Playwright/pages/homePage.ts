import { Page, expect } from 'playwright/test';

export class HomePage {
    private readonly page: Page;

    constructor(page:Page) {
        this.page = page;
    }

    async navigateTo() {
        await this.page.goto('/');
    }

    async validateUrl(pathname: string) {
        const url = new URL(this.page.url());
        expect(url.pathname).toBe(`/${pathname}`);
    }

    async homePageVisible() {
        const titleHomeSlider = this.page.locator('#slider-carousel');
        await expect(titleHomeSlider).toBeVisible();
    }

    async optionMenuSignUpLogin()  {
        const menuOptionSignupLogin = this.page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a');
        await menuOptionSignupLogin.click();    
    }

    async optionMenuDeleteAccount(){
        const menuOptionDeletedAccount = this.page.getByRole('link', { name:' Delete Account' });
        menuOptionDeletedAccount.click();
    }

    async optionMenuLogout(){
        const menuOptionLogout = this.page.getByRole('link', { name:' Logout' });
        menuOptionLogout.click();
    }

    async userNameVisible() {
        const menuOptionUserName = this.page.locator('//div[2]/div/ul/li[10]/a/b');
        await expect(menuOptionUserName).toBeVisible();
    }
}