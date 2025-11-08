import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { Locators } from "./locators";


export class RegisterPage extends BasePage {

    private readonly titleEnterAccountInformation: Locator;
    private readonly titleMr: Locator;
    private readonly password: Locator;
    private readonly days: Locator;
    private readonly months: Locator;
    private readonly years: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly address1: Locator;
    private readonly country: Locator;
    private readonly state: Locator;
    private readonly city: Locator;
    private readonly zipcode: Locator;
    private readonly mobileNumber: Locator;
    private readonly buttonCreateAccount: Locator;


    constructor(page:Page) {
        super(page);
        this.titleEnterAccountInformation = page.locator(Locators.account_information.title_enter_account_information);
        this.titleMr = page.locator(Locators.account_information.title_mr);
        this.password = page.locator(Locators.account_information.password);
        this.days = page.locator(Locators.account_information.days);
        this.months = page.locator(Locators.account_information.months);
        this.years = page.locator(Locators.account_information.years);
        this.firstName = page.locator(Locators.account_information.first_name);
        this.lastName = page.locator(Locators.account_information.last_name);
        this.address1 = page.locator(Locators.account_information.address1);
        this.country = page.locator(Locators.account_information.country);
        this.state = page.locator(Locators.account_information.state);
        this.city = page.locator(Locators.account_information.city);
        this.zipcode = page.locator(Locators.account_information.zipcode);
        this.mobileNumber = page.locator(Locators.account_information.mobile_number);
        this.buttonCreateAccount = page.locator(Locators.account_information.button_create_account);
    }

    async titleVisible(){
        await this.expectVisible(this.titleEnterAccountInformation);
    }

    async enterUserData() {
        const userData = require('../utils/data/account.data.json')
        await this.clickOn(this.titleMr);
        await this.typeField(this.password, userData.password);
        await this.selectOption(this.days, userData.birthday.day);
        await this.selectOption(this.months, userData.birthday.month);
        await this.selectOption(this.years, userData.birthday.year);
        await this.typeField(this.firstName, userData.name);
        await this.typeField(this.lastName, userData.lastName);
        await this.typeField(this.address1, userData.addressOne);
        await this.selectOption(this.country, userData.country);
        await this.typeField(this.state, userData.state);
        await this.typeField(this.city, userData.city);
        await this.typeField(this.zipcode, userData.zipCode);
        await this.typeField(this.mobileNumber, userData.mobileNumber);
    }

    async clickButtonCreate() {
        await this.clickOn(this.buttonCreateAccount);
    }

}