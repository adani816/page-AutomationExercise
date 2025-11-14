import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { RegisterPage } from '../pages/registerPage';
import { AccountCreatePage } from '../pages/accountCreatePage';
import { AccountDeletedPage } from '../pages/accountDeletedPage';
import userData from '../utils/data/account.data.json';
import { TestDataGenerator } from '../utils/generateEmail';

test.describe('Practica-Playwright-POM', () => {
        let homePage: HomePage;
        let loginPage: LoginPage;
        let registerPage: RegisterPage;
        let accountCreatePage: AccountCreatePage;
        let accountDeleted: AccountDeletedPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        registerPage = new RegisterPage(page);
        accountCreatePage = new AccountCreatePage(page);
        accountDeleted = new AccountDeletedPage(page);

        await homePage.navigateTo();
        await homePage.homePageVisible();
    });

    test(`Test Case 1: Register User
        1. Launch browser
        2. Navigate to url 'http://automationexercise.com'
        3. Verify that home page is visible successfully
        4. Click on 'Signup / Login' button
        5. Verify 'New User Signup!' is visible
        6. Enter name and email address
        7. Click 'Signup' button
        8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
        9. Fill details: Title, Name, Email, Password, Date of birth
        10. Click Create Account button
        11. Verify that 'ACCOUNT CREATED!' is visible
        12. Click 'Continue' button
        13. Verify that 'Logged in as username' is visible 
        14. Click 'Delete Account' button
        15. Click Continue button
        16. Verify that ACCOUNT DELETED! is visible`, async ({}) => {
            await homePage.optionMenuSignUpLogin();
            await loginPage.titleVisibleNewUser();
            await loginPage.newUserSingup(
                userData.name, TestDataGenerator.uniqueEmail()
            );
            await loginPage.clickButtonSingup();
            await registerPage.titleVisible();
            await registerPage.enterUserData();
            await registerPage.clickButtonCreate();
            await accountCreatePage.titleVisible();
            await accountCreatePage.clicButtonContinue();
            await homePage.userNameVisible();
            await homePage.optionMenuDeleteAccount();
            await accountDeleted.titleVisible();
            await accountDeleted.clicButtonContinue();
    });

    test(`Test Case 2: Login User with correct email and password
        1. Launch browser
        2. Navigate to url 'http://automationexercise.com'
        3. Verify that home page is visible successfully
        4. Click on 'Signup / Login' button
        5. Verify 'Login to your account' is visible
        6. Enter name and email address
        7. Click 'login' button
        8. Verify that 'Logged in as username' is visible`, async ({}) => {
            await homePage.optionMenuSignUpLogin();
            await loginPage.titleVisibleRegUser();
            await loginPage.loginToYourAccount(
                userData.registeredUser.email, userData.registeredUser.password
            );
            await loginPage.clickButtonLogin();
            await homePage.userNameVisible();
    });

    test(`Test Case 3: Login User with incorrect email and password
        1. Launch browser
        2. Navigate to url
        3. Verify that home page is visible successfully
        4. Click on 'Signup / Login' button
        5. Verify 'Login to your account' is visible
        6. Enter name and email address
        7. Click login button
        8. Verify error Your email or password is incorrect! is visible`, async ({}) => {
            await homePage.optionMenuSignUpLogin();
            await loginPage.titleVisibleRegUser();
            await loginPage.loginToYourAccount(userData.registeredUser.email, userData.registeredUser.invalidPassword);
            await loginPage.clickButtonLogin();
            await loginPage.alertIncorrectLoginVisible();
    });

    test(`Test Case 4: Register User with existing email address
        1. Launch browser
        2. Navigate to url 'http://automationexercise.com'
        3. Verify that home page is visible successfully
        4. Click on 'Signup / Login' button
        5. Verify 'Login to your account' is visible
        6. Enter correct email address and password
        7. Click 'login' button
        8. Verify that 'Logged in as username' is visible
        9. Click 'Logout' button
        10. Verify that user is navigated to login page`, async ({}) => {
            await homePage.optionMenuSignUpLogin();
            await loginPage.titleVisibleRegUser();
            await loginPage.loginToYourAccount(
                userData.registeredUser.email, userData.registeredUser.password
            );
            await loginPage.clickButtonLogin();
            await homePage.optionMenuLogout();
            await loginPage.titleVisibleRegUser();
            await homePage.validateUrl('login');
        });

});