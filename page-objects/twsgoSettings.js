module.exports = {
    url: 'https://dev-app.twsgo.com/sign-in',
    elements: {
        logo: '.company-logo__image',
        url: 'https://dev-app.twsgo.com/sign-in',
        signInButton: '.ant-btn.button.sign-in-page__submit-button',
        forgotPasswordHyperlink: '.sign-in-page__reset-password',
        successForgotPasswordPopUpWindow: '.ant-notification-notice-message',
        userEmailAddressFieldForgotPasswordWindow: '.ant-modal-content>.ant-modal-body>.password-reset>.custom-input>.ant-input-affix-wrapper>input',

        sendMeALinkButton: '.ant-btn.button.password-reset__submit-button',

        successWindow: '.ant-notification-notice-with-icon',
        userEmailAddressField: 'input[name="email"]',
        userPasswordField:  'input[type="password"]',
        userPassword:  '1Gubarenko1',
        successAuthPopUpWindow: '.ant-notification-notice-message',
        userAvatar: '.ant-avatar.header__avatar.ant-dropdown-trigger.ant-avatar-circle.ant-avatar-image',

        usersSidebarItem: '.layout__menu-item:nth-child(3)',
        usersTable: '.user__table',
        createNewUserButton: '.ant-btn.button.btn-success',
        createNewUserEmailField: '.ant-modal-body>form>.custom-input:nth-child(1)>.ant-input',
        createNewUserPasswordField: '.ant-modal-body>form>.custom-input:nth-child(2)>.ant-input',
        createNewUserNameField: '.ant-modal-body>form>.custom-input:nth-child(3)>.ant-input',
        createNewUserPictureField: '.ant-modal-body>form>.custom-input:nth-child(4)>.ant-input',
        createNewUserRoleDropDown: '.ant-modal-body>form>.custom-select>div:first-child',

        createNewUserEmail: 't.est@twsgo.com',
        createNewUserPassword: '111111',
        createNewUserName: 'Test',
        createNewUserPicture: 'Test',
        createNewUserRoleItem: '.ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-active',
        createNewUserButtonInModalWindow: '.ant-modal-body>form>.ant-btn.button',
        successCreatedUserPopUpWindow: '.ant-notification-notice-with-icon',

        membersSidebarItem: '.layout__menu-item:nth-child(4)',
        membersTable: '.member__table',
        createNewMemberButton: '.ant-btn.button.btn-success',
        createNewMemberNameField: '.ant-modal-content>.ant-modal-body>form>div:nth-child(1)>input',
        createNewMemberPositionField: '.ant-modal-content>.ant-modal-body>form>div:nth-child(2)>input',
        createNewMemberLinkField: '.ant-modal-content>.ant-modal-body>form>div:nth-child(3)>input',
        createNewMemberNumberField: '.ant-modal-content>.ant-modal-body>form>div:nth-child(4)>input',
        createNewMemberPictureField: '.ant-modal-content>.ant-modal-body>form>div:nth-child(5)>input',
        createNewMemberButtonInModalWindow: '.ant-modal-content>.ant-modal-body>form>button',
        successCreatedMemberPopUpWindow: '.ant-notification-notice-message',

        saleTable: '.sales__table',
        saleSidebarItem: '.layout__menu-item:nth-child(5)',
        bullBoardSidebarItem: '.layout__menu-item:nth-child(6)',
        bullDashboard: '.bull__iframe',

        portfolioSidebarItem: '.layout__menu-item:nth-child(7)',
        createPortfolioButton: '.ant-btn.button.btn-success',
        portfolioTable: '.portfolio__table',
        picCreateNewPortfolioField: '.p-item__left-side--body>div>input',
        titleCreateNewPortfolioField: '.ant-card-body>.custom-input>input',
        typeCreatePortfolioDropDown: '.ant-card-body>.custom-select.undefined>div',
        modalItemInTypeCreatePortfolioDropDown: '.ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-active',
        saveNewPortfolioButton: '.ant-card-extra>.button',
        successCreatedPortfolioPopUpWindow: '.ant-notification-notice-message',
        addImagesForModalPortfolioButton: '.p-item__field-array-box>.button',
        addImageForModalPortfolioField: '.p-item__field-array-box>.p-item__field-array-item>.custom-input>input',

        linkItemInTypeCreatePortfolioDropDown: '.ant-select-dropdown-menu.ant-select-dropdown-menu-root.ant-select-dropdown-menu-vertical>li:nth-child(2)',
        linkCreateNewPortfolioField: 'input[name="link"]',
        titleInPortfolioTable: '.ant-table-tbody>tr:nth-child(1)>td:nth-child(2)',

        profileItem: '.ant-dropdown.ant-dropdown-placement-bottomRight>ul>li:nth-child(1)',
        linkProfilePhotoField: '.profile__pwd-change-form-item>.custom-input>input:first-child',
        profilePhotoUpdateButton: '.ant-card-body>div>div>div>.ant-card-head>div>div>button',
        nameProfileField: 'input[name="name"]',
        languageProfileDropDown: '.ant-select.ant-select-enabled',
        russianItemProfileDropDown: '.ant-select-dropdown-menu-item:nth-child(2)',
        themeProfileSwitch: '.ant-switch.ant-switch-checked',
        generalInformationProfileUpdateButton: '.profile__body-right-item:first-child>div>.ant-card-head>.ant-card-head-wrapper>.ant-card-extra>.ant-btn.button.ant-btn-primary',
        currentPasswordField: 'input[name="oldPassword"]',
        newPasswordField: 'input[name="password"]',
        passwordUpdateButton: '.profile__body-right-item:nth-child(2)>div>.ant-card-head>.ant-card-head-wrapper>.ant-card-extra',
        savedInfoPopUpWindow: '.ant-notification-notice-message',
        nameInHeaderProfilePage: '.profile>.ant-card>.ant-card-head>.ant-card-head-wrapper>.ant-card-head-title',



    },
    commands: [{}


    ],
};
