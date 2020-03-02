const target = { width: 1366, height: 768};
module.exports = {
    tags: ['bullboard_page_twsgo'],
    'Bull Board page twsgo dev': function (browser) {

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
            .click('@bullBoardSidebarItem')
            .waitForElementVisible('@bullDashboard', "Bull Dashboard at the 'Bull Board' page is visible.")
            .saveScreenshot('tests_output/bullboard_page_twsgo.png')
            .end();
    }
};
