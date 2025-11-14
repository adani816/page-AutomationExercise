import { Page, expect } from 'playwright/test';

import userData from '../utils/data/account.data.json';

export class RegisterPage {
     private readonly page: Page;

    constructor(page:Page) {
        this.page = page; 
    }

    async titleVisible(){
        const titleEnterAccountInformation = this.page.locator('//div/h2/b[text()="Enter Account Information"]');
        await expect(titleEnterAccountInformation).toBeVisible();
    }

    async enterUserData() {
        const titleMr = this.page.locator('//*[@id="id_gender1"]');
        const password = this.page.locator('[data-qa="password"]');
        const days = this.page.locator('[data-qa="days"]');
        const months = this.page.locator('[data-qa="months"]');
        const years = this.page.locator('[data-qa="years"]');
        const firstName = this.page.locator('[data-qa="first_name"]');
        const lastName = this.page.locator('[data-qa="last_name"]');
        const address1 = this.page.locator('[data-qa="address"]');
        const country = this.page.locator('[data-qa="country"]');
        const state = this.page.locator('[data-qa="state"]');
        const city = this.page.locator('[data-qa="city"]');
        const zipcode = this.page.locator('[data-qa="zipcode"]');
        const mobileNumber = this.page.locator('[data-qa="mobile_number"]');
        
        await titleMr.click();
        await password.fill(userData.password);
        await days.selectOption(userData.birthday.day);
        await months.selectOption(userData.birthday.month);
        await years.selectOption(userData.birthday.year);
        await firstName.fill(userData.name);
        await lastName.fill(userData.lastName);
        await address1.fill(userData.addressOne);
        await country.selectOption(userData.country);
        await state.fill(userData.state);
        await city.fill(userData.city);
        await zipcode.fill(userData.zipCode);
        await mobileNumber.fill(userData.mobileNumber);
    }

    async clickButtonCreate() {
        const buttonCreateAccount = this.page.locator('[data-qa="create-account"]');
        await buttonCreateAccount.click();
    }

}