const target = { width: 1366, height: 768};
module.exports = {
    tags: ['c_n_m_twsgo'],
    'Create new member twsgo dev': function (browser) {

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
            .click('@membersSidebarItem')
            .waitForElementVisible('@membersTable', "Table at the 'Members' page is visible")
            .click('@createNewMemberButton')
            .setValue('@createNewMemberNameField', 'Name')
            .setValue('@createNewMemberPositionField', 'Position')
            .setValue('@createNewMemberLinkField', 'https://google.com/')
            .setValue('@createNewMemberNumberField', '22')
            .setValue('@createNewMemberPictureField', 'https://3diphonewallpaper.com/wp-content/uploads/2019/02/iPhone-X-Wallpaper-Cute-Girl-Pic.jpg')
            .click('@createNewMemberButtonInModalWindow')
            .waitForElementVisible('@successCreatedMemberPopUpWindow', 'New member is created.')
            .saveScreenshot('tests_output/created_new_member_twsgo.png')
            .end();
    }
};
