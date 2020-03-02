const target = { width: 1366, height: 768};
module.exports = {
    tags: ['logout_twsgo'],
    'Create new link portfolio twsgo dev': function (browser) {

        const page = browser.page.twsgoSettings();

        page
            .resizeWindow(target.width, target.height)
            .navigate()
            .waitForElementVisible('@logo', "The logo is visible.")
            .setValue('@userEmailAddressField', 'test@twsgo.com')
            .setValue('@userPasswordField', '111111')
            .click('@signInButton')
            .waitForElementVisible('@userAvatar', "User avatar is visible.")
            .waitForElementVisible('@successAuthPopUpWindow', "Success pop-up window is visible.")
            .pause(6000)
            .click('@userAvatar')
            .click('@logoutItem')
            .waitForElementVisible('@logo', "The logo is visible. Logout is complete.")
            .pause(2000)
            .saveScreenshot('tests_output/logout_twsgo.png')
            .end();
    }
};
