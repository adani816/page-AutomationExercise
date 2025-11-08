import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { Locators } from "./locators";
import { TestDataGenerator } from "../utils/generateEmail";

export class LoginPage extends BasePage {

    private readonly titleNewUser: Locator;
    private readonly newName: Locator;
    private readonly newEmail: Locator;
    private readonly buttonSignup: Locator;
    private readonly loginEmail: Locator;
    private readonly loginPassword: Locator;
    private readonly buttonLogin: Locator;

    constructor(page:Page) {
        super(page);
        this.titleNewUser = page.locator(Locators.login.title_new_user);
        this.newName = page.locator(Locators.login.new_name);
        this.newEmail = page.locator(Locators.login.new_email);
        this.buttonSignup = page.locator(Locators.login.button_signup);
        this.loginEmail = page.locator(Locators.login.login_email);
        this.loginPassword = page.locator(Locators.login.login_password);
        this.buttonLogin = page.locator(Locators.login.button_login);
    }

    async titleVisible() {
        await this.expectVisible(this.titleNewUser)
    }

    async newUserSingup() {
        const userData = require('../utils/data/account.data.json')
        await this.typeField(this.newName, userData.name);
        await this.typeField(this.newEmail, TestDataGenerator.uniqueEmail());
    }

    async clickButtonSingup() {
        await this.clickOn(this.buttonSignup);
    }
}