const target = { width: 1366, height: 768};
module.exports = {
    tags: ['c_l_p_twsgo'],
    'Create new link portfolio twsgo dev': function (browser) {

        const page = browser.page.twsgoSettings();
        const title = 'Title for test';

        page
            .resizeWindow(target.width, target.height)
            .navigate()
            .waitForElementVisible('@logo', "The logo is visible.")
            .setValue('@userEmailAddressField', 'test@twsgo.com')
            .setValue('@userPasswordField', '111111')
            .click('@signInButton')
            .waitForElementVisible('@userAvatar', "User avatar is visible.")
            .waitForElementVisible('@successAuthPopUpWindow', "Success pop-up window is visible.")
            .click('@portfolioSidebarItem')
            .waitForElementVisible('@portfolioTable', "Table at the 'Portfolio' page is visible")
            .click('@createPortfolioButton')
            .setValue('@picCreateNewPortfolioField', 'https://3diphonewallpaper.com/wp-content/uploads/2019/02/iPhone-X-Wallpaper-Cute-Girl-Pic.jpg')
            .setValue('@titleCreateNewPortfolioField', title)
            .click('@typeCreatePortfolioDropDown')
            .click('@linkItemInTypeCreatePortfolioDropDown')
            .setValue('@linkCreateNewPortfolioField', 'https://google.com')
            .click('@saveNewPortfolioButton')
            .waitForElementVisible('@successCreatedPortfolioPopUpWindow', 'New portfolio is created.')
            .assert.containsText('@successCreatedPortfolioPopUpWindow', title)
            .pause(2000)
            .click('@portfolioSidebarItem')
            .assert.containsText('@titleInPortfolioTable', title)
            .pause(2000)
            .saveScreenshot('tests_output/created_link_portfolio_twsgo.png')
            .end();
    }
};
