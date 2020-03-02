const target = { width: 1366, height: 768};
module.exports = {
    tags: ['c_n_u_twsgo'],
    'Create new user twsgo dev': function (browser) {

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
            .click('@usersSidebarItem')
            .waitForElementVisible('@usersTable', "Table at the 'Users' page is visible")
            .click('@createNewUserButton')
            .setValue('@createNewUserEmailField', 'tes.t@twsgo.com')
            .setValue('@createNewUserPasswordField', '111111')
            .setValue('@createNewUserNameField', 'Test')
            .setValue('@createNewUserPictureField', 'https://3diphonewallpaper.com/wp-content/uploads/2019/02/iPhone-X-Wallpaper-Cute-Girl-Pic.jpg')
            .click('@createNewUserRoleDropDown')
            .click('@createNewUserRoleItem')
            .click('@createNewUserButtonInModalWindow')
            .waitForElementVisible('@successCreatedUserPopUpWindow', 'New user is created.')
            .saveScreenshot('tests_output/created_new_user_twsgo.png')
            .end();
    }
};
