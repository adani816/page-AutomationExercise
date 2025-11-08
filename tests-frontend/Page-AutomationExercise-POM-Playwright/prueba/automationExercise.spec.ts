import { test } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { RegisterPage } from '../pages/registerPage';
import { AccountCreatePage } from '../pages/accountCreatePage';
import { AccountDeletedPage } from '../pages/accountDeletedPage';

const baseUrl = 'http://automationexercise.com'

test('Test Case 1: Register User', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page);
    const accountCreatePage = new AccountCreatePage(page);
    const accountDeleted = new AccountDeletedPage(page)
    const base = new BasePage(page);
    console.log('1. Launch browser');
    console.log(`2. Navigate to url ${baseUrl}`);
    await base.navigateTo(baseUrl);
    console.log('3. Verify that home page is visible successfully');
    await homePage.homePageVisible();
    console.log(`4. Click on 'Signup / Login' button`);
    await homePage.optionMenuSignUpLogin();
    console.log(`5. Verify 'New User Signup!' is visible`);
    await loginPage.titleVisible();
    console.log('6. Enter name and email address');
    await loginPage.newUserSingup();
    console.log('7. Click Signup button');
    await loginPage.clickButtonSingup();
    console.log('8. Verify that ENTER ACCOUNT INFORMATION is visible');
    await registerPage.titleVisible();
    console.log('9. Fill details: Title, Name, Email, Password, ...');
    await registerPage.enterUserData();
    console.log('10. Click Create Account button');
    await registerPage.clickButtonCreate();
    console.log('11. Verify that ACCOUNT CREATED! is visible');
    await accountCreatePage.titleVisible();
    console.log('12. Click Continue button');
    await accountCreatePage.clicButtonContinue();
    console.log('13. Verify that Logged in as username is visible');
    await  homePage.userNameVisible();
    console.log('14. Click Delete Account button');
    await homePage.optionMenuDeleteAccount();
    console.log('15. Click Continue button');
    await accountDeleted.titleVisible();
    console.log('16. Verify that ACCOUNT DELETED! is visible');
    await accountDeleted.clicButtonContinue();
});

test('Test Case 2: Register User', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page);
    const accountCreatePage = new AccountCreatePage(page);
    const accountDeleted = new AccountDeletedPage(page)
    const base = new BasePage(page);
    console.log('1. Launch browser');
    console.log(`2. Navigate to url ${baseUrl}`);
    await base.navigateTo(baseUrl);
    console.log('3. Verify that home page is visible successfully');
    await homePage.homePageVisible();
    console.log(`4. Click on 'Signup / Login' button`);
    await homePage.optionMenuSignUpLogin();
    console.log(`5. Verify 'New User Signup!' is visible`);
    await loginPage.titleVisible();
    console.log('6. Enter name and email address');
    await loginPage.newUserSingup();
    console.log('7. Click Signup button');
    await loginPage.clickButtonSingup();
    console.log('8. Verify that ENTER ACCOUNT INFORMATION is visible');
    await registerPage.titleVisible();
    console.log('9. Fill details: Title, Name, Email, Password, ...');
    await registerPage.enterUserData();
    console.log('10. Click Create Account button');
    await registerPage.clickButtonCreate();
    console.log('11. Verify that ACCOUNT CREATED! is visible');
    await accountCreatePage.titleVisible();
    console.log('12. Click Continue button');
    await accountCreatePage.clicButtonContinue();
    console.log('13. Verify that Logged in as username is visible');
    await  homePage.userNameVisible();
    console.log('14. Click Delete Account button');
    await homePage.optionMenuDeleteAccount();
    console.log('15. Click Continue button');
    await accountDeleted.titleVisible();
    console.log('16. Verify that ACCOUNT DELETED! is visible');
    await accountDeleted.clicButtonContinue();
});