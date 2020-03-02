const target = { width: 1366, height: 768};
module.exports = {
    tags: ['sale_page_twsgo'],
    'Sale page twsgo dev': function (browser) {

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
            .click('@saleSidebarItem')
            .waitForElementVisible('@saleTable', "Table at the 'Sale' page is visible")
            .saveScreenshot('tests_output/sale_page_twsgo.png')
            .end();
    }
};
