Accounts.ui.config({
    requestPermissions: {
        google: 
        ['https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/calendar.readonly',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/tasks'],
      //forceApprovalPrompt: {google: true}
    }, 
    forceApprovalPrompt: {google: true},
    requestOfflineToken: {google: true},
    passwordSignupFields: 'EMAIL_ONLY',
   //   extraSignupFields: []
});