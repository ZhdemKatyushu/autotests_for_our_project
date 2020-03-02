const target = { width: 1366, height: 768};
module.exports = {
    tags: ['auth_google_twsgo'],
    'Authorization with google account twsgo dev': function (browser) {

        const logo = '.company-logo__image';
        const googleButton = '.sign-in-page__oauth-buttons>button:first-child';
        const emailAddressFieldGoogleModalWindow = 'input[type="email"]';
        const nextButton = 'div[role="button"]';
        const userPasswordField = 'input[type="password"]';
        const nextPasswordButton = '#passwordNext';
        const successAuthPopUpWindow ='.ant-notification-notice-message';
        const userAvatar = '.ant-avatar.header__avatar.ant-dropdown-trigger.ant-avatar-circle.ant-avatar-image';

        browser
            .resizeWindow(target.width, target.height)
            .url('https://dev-app.twsgo.com/sign-in')
            .waitForElementVisible(logo, "Logo is visible.")
            .waitForElementVisible(googleButton, "Google button is visible.")
            .click(googleButton)
            .pause(5000)
            .windowHandles(function(result) {
                var newWindow;
                this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
                oldWindow = result.value[0];
                newWindow = result.value[1];
                this.switchWindow(newWindow);
                this.verify.urlContains('google');
                this.setValue(emailAddressFieldGoogleModalWindow, 'katerina.h@twsgo.com');
                this.pause(2000);
                this.click(nextButton);
                this.pause(2000);
                this.setValue(userPasswordField, '1Gubarenko1');
                this.click(nextPasswordButton);
                this.pause(5000);
                this.switchWindow(oldWindow);
            })
            .waitForElementVisible(successAuthPopUpWindow,"Success pop-up window is visible.")
            .waitForElementVisible(userAvatar, "User avatar is visible.")
            .saveScreenshot('tests_output/auth_google_twsgo.png')
            .end();
    }
};
