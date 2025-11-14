import { Page, expect } from 'playwright/test';

export class LoginPage {

    private readonly page: Page;

    constructor(page:Page) {
        this.page = page;
    }

    async titleVisibleNewUser() {
        const titleNewUser = this.page.locator('//div[3]/div/h2[text()="New User Signup!"]');
        await expect(titleNewUser).toBeVisible();
    }

    async titleVisibleRegUser() {
        const titleRegUser = this.page.locator('//*[@id="form"]/div/div/div[1]/div/h2');
        await expect(titleRegUser).toBeVisible();
    }

    async newUserSingup(name:string, email:string) {
        const newName = this.page.locator('[data-qa="signup-name"]');
        const newEmail = this.page.locator('[data-qa="signup-email"]');
        await newName.fill(name);
        await newEmail.fill(email);
    }

    async loginToYourAccount(email:string, password:string) {
        const loginEmail = this.page.locator('[data-qa="login-email"]');
        const loginPassword = this.page.locator('[data-qa="login-password"]');
        await loginEmail.fill(email);
        await loginPassword.fill(password);
    }

    async clickButtonSingup() {
        const buttonSignup = this.page.locator('[data-qa="signup-button"]');
        await buttonSignup.click();
    }

    async clickButtonLogin() {
        const buttonLogin = this.page.locator('[data-qa="login-button"]');
        await buttonLogin.click();
    }

    async alertIncorrectLoginVisible() {
        const alertIncorrectLogin = this.page.locator('//*[@id="form"]/div/div/div[1]/div/form/p');
        await expect(alertIncorrectLogin).toBeVisible();
    }

    
}