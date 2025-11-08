export const Locators = {
    home: {
        titleHomeSlider: '#slider-carousel',
        menuOptionSignupLogin: '//div[2]/div/ul/li[4]/a',
        menuOptionDeleteAccount: `getByRole('link', { name:' Delete Account' })`,
        menuOptionUserName: '//div[2]/div/ul/li[10]/a/b'
    },
    login: {
        title_new_user: '//div[3]/div/h2[text()="New User Signup!"]',
        new_name: '[data-qa="signup-name"]',
        new_email: '[data-qa="signup-email"]',
        button_signup: '[data-qa="signup-button"]',
        login_email: '[data-qa="login-email"]',
        login_password: '[data-qa="login-password"]',
        button_login: '[data-qa="login-button"]'
    },
    account_information: {
        title_enter_account_information: '//div/h2/b[text()="Enter Account Information"]',
        title_mr: '//*[@id="id_gender1"]',
        password: '[data-qa="password"]',
        days: '[data-qa="days"]',
        months: '[data-qa="months"]',
        years: '[data-qa="years"]',
        first_name: '[data-qa="first_name"]',
        last_name: '[data-qa="last_name"]',
        address1: '[data-qa="address"]',
        country: '[data-qa="country"]',
        state: '[data-qa="state"]',
        city: '[data-qa="city"]',
        zipcode: '[data-qa="zipcode"]',
        mobile_number: '[data-qa="mobile_number"]',
        button_create_account: '[data-qa="create-account"]'
    },
    account_created: {
        title_account_created: '//div/h2/b[text()="Account Created!"]',
        button_continue_created: 'a[data-qa="continue-button"]'
    },
    account_deleted: {
        title_account_deleted: '//div/h2/b[text()="Account Deleted!"]',
        button_continue_deleted: 'a[data-qa="continue-button"]'
    }
}
