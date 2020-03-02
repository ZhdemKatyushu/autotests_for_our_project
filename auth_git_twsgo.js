const target = { width: 1366, height: 768};
module.exports = {
    tags: ['auth_git_twsgo'],
    'Authorization with git account twsgo dev': function (browser) {

        const logo = '.company-logo__image';
        const gitButton = '.sign-in-page__oauth-buttons>button:nth-child(2)';
        const emailAddressFieldGitModalWindow = '#login_field';
        const signInButton = '.btn.btn-primary.btn-block';
        const passwordGitModalField = '#password';
        const successAuthPopUpWindow ='.ant-notification-notice-message';
        const userAvatar = '.ant-avatar.header__avatar.ant-dropdown-trigger.ant-avatar-circle.ant-avatar-image';

        browser
            .resizeWindow(target.width, target.height)
            .url('https://dev-app.twsgo.com/sign-in')
            .waitForElementVisible(logo, "Logo is visible.")
            .waitForElementVisible(gitButton, "Git button is visible")
            .click(gitButton)
            .pause(5000)
            .windowHandles(function(result) {
            var newWindow;
            this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
            oldWindow = result.value[0];
            newWindow = result.value[1];
            this.switchWindow(newWindow);
            this.verify.urlContains('git');
            this.setValue(emailAddressFieldGitModalWindow, 'shiroi.maks@gmail.com');
            this.setValue(passwordGitModalField, 'Hubarenko1');
            this.pause(2000);
            this.click(signInButton);
            this.pause(2000);
            this.switchWindow(oldWindow);
            })
            .waitForElementVisible(successAuthPopUpWindow,"Success pop-up window is visible.")
            .waitForElementVisible(userAvatar, "User avatar is visible.")
            .saveScreenshot('tests_output/auth_git_twsgo.png')
            .end();
    }
};
