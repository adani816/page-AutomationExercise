import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { TestDataGenerator } from "../utils/generateEmail";

export class LoginPage extends BasePage {

    private readonly titleNewUser: Locator;
    private readonly titleRegUser: Locator;
    private readonly newName: Locator;
    private readonly newEmail: Locator;
    private readonly buttonSignup: Locator;
    private readonly loginEmail: Locator;
    private readonly loginPassword: Locator;
    private readonly buttonLogin: Locator;
    private readonly alertIncorrectLogin: Locator

    constructor(page:Page) {
        super(page);
        this.titleNewUser = page.locator('//div[3]/div/h2[text()="New User Signup!"]');
        this.titleRegUser = page.locator('//*[@id="form"]/div/div/div[1]/div/h2');
        this.newName = page.locator('[data-qa="signup-name"]');
        this.newEmail = page.locator('[data-qa="signup-email"]');
        this.buttonSignup = page.locator('[data-qa="signup-button"]');
        this.loginEmail = page.locator('[data-qa="login-email"]');
        this.loginPassword = page.locator('[data-qa="login-password"]');
        this.buttonLogin = page.locator('[data-qa="login-button"]');
        this.alertIncorrectLogin = page.locator('//*[@id="form"]/div/div/div[1]/div/form/p');
    }

    async titleVisibleNewUser() {
        await this.expectVisible(this.titleNewUser);
    }

    async titleVisibleRegUser() {
        await this.expectVisible(this.titleRegUser);
    }

    async newUserSingup() {
        const userData = require('../utils/data/account.data.json')
        await this.typeField(this.newName, userData.name);
        await this.typeField(this.newEmail, TestDataGenerator.uniqueEmail());
    }

    async loginToYourAccount(email:string, password:string) {
        await this.typeField(this.loginEmail, email);
        await this.typeField(this.loginPassword, password);
    }

    async clickButtonSingup() {
        await this.clickOn(this.buttonSignup);
    }

    async clickButtonLogin() {
        await this.clickOn(this.buttonLogin);
    }

    async alertIncorrectLoginVisible() {
        await this.expectVisible(this.alertIncorrectLogin);
    }

    
}