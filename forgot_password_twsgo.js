const target = { width: 1366, height: 768};
module.exports = {
    tags: ['fp_twsgo'],
    'Forgot password twsgo dev': function (browser) {

        const page = browser.page.twsgoSettings();

        page
            .resizeWindow(target.width, target.height)
            .navigate()
            .waitForElementVisible('@logo', "The logo is visible.")
            .click('@forgotPasswordHyperlink')
            .setValue('@userEmailAddressFieldForgotPasswordWindow', 'katerina.h@twsgo.com')
            .click('@sendMeALinkButton')
            .waitForElementVisible('@successForgotPasswordPopUpWindow', "Success forgot password pop-up window is visible.")
            .saveScreenshot('tests_output/fp_twsgo.png')
            .end();
    }
};
