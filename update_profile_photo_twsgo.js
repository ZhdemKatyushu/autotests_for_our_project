const target = { width: 1366, height: 768};
module.exports = {
    tags: ['u_p_p_twsgo'],
    'Create new link portfolio twsgo dev': function (browser) {

        const page = browser.page.twsgoSettings();
        const name = 'TestName';

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
            .click('@profileItem')
            .setValue('@linkProfilePhotoField', 'https://3diphonewallpaper.com/wp-content/uploads/2019/02/iPhone-X-Wallpaper-Cute-Girl-Pic.jpg')
            .click('@profilePhotoUpdateButton')
            .waitForElementVisible('@savedInfoPopUpWindow', 'The profile picture is updated.')
            .setValue('@nameProfileField', name)
            .click('@languageProfileDropDown')
            .click('@russianItemProfileDropDown')
            .click('@themeProfileSwitch')
            .click('@generalInformationProfileUpdateButton')
            .waitForElementVisible('@savedInfoPopUpWindow', 'General information is updated.')
            .setValue('@currentPasswordField', '111111')
            .setValue('@newPasswordField', '111111')
            .click('@passwordUpdateButton')
            .waitForElementVisible('@savedInfoPopUpWindow', 'Password is updated.')
            .assert.containsText('@nameInHeaderProfilePage', name, "New name is visible in header.")
            .pause(2000)
            .saveScreenshot('tests_output/update_profile_photo_twsgo.png')
            .end();
    }
};
