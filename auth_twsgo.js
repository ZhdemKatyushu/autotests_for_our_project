const target = { width: 1366, height: 768};
module.exports = {
    tags: ['auth_twsgo'],
    'Authorization Dev TWSGO': function (browser) {

        const page = browser.page.twsgoSettings();

        page
            .resizeWindow(target.width, target.height)
            .navigate()
            .waitForElementVisible('@logo', "The logo is visible.")
            .setValue('@userEmailAddressField', 'test@twsgo.com')
            .setValue('@userPasswordField', '111111')
            .click('@signInButton')
            .waitForElementVisible('@successAuthPopUpWindow',"Success pop-up window is visible.")
            .waitForElementVisible('@userAvatar', "User avatar is visible.")
            .saveScreenshot('tests_output/auth_twsgo.png')
            .end();
    }
};
