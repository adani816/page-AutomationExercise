import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import userData from '../utils/data/account.data.json';

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
        this.titleEnterAccountInformation = page.locator('//div/h2/b[text()="Enter Account Information"]');
        this.titleMr = page.locator('//*[@id="id_gender1"]');
        this.password = page.locator('[data-qa="password"]');
        this.days = page.locator('[data-qa="days"]');
        this.months = page.locator('[data-qa="months"]');
        this.years = page.locator('[data-qa="years"]');
        this.firstName = page.locator('[data-qa="first_name"]');
        this.lastName = page.locator('[data-qa="last_name"]');
        this.address1 = page.locator('[data-qa="address"]');
        this.country = page.locator('[data-qa="country"]');
        this.state = page.locator('[data-qa="state"]');
        this.city = page.locator('[data-qa="city"]');
        this.zipcode = page.locator('[data-qa="zipcode"]');
        this.mobileNumber = page.locator('[data-qa="mobile_number"]');
        this.buttonCreateAccount = page.locator('[data-qa="create-account"]');
    }

    async titleVisible(){
        await this.expectVisible(this.titleEnterAccountInformation);
    }

    async enterUserData() {
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