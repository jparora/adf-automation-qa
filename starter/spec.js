const configData = require('../starter/Configuration/configData');
const settingPage = require('../starter/pages/settingPage');
const loginPage = require('../starter/pages/loginpage');
const homePage = require('../starter/pages/homePage');
const filePage = require('../starter/pages/filePage')

describe('ADF Application Testing: ', function() {

 it('Verify User select the provider on ADF App setting page', function() {
  browser.driver.get('http://qaexercise.envalfresco.com/settings');
  browser. driver. manage(). window(). maximize();
  browser.sleep(3000);
  settingPage.getProviderDropDown();
  settingPage.getSelectProvider();
  browser.sleep(2000);
  settingPage.getClickApply();
  
});
it('Verify User Login sucessfully into the ADF Application', function() {
   browser.driver.get('http://qaexercise.envalfresco.com/login');
   browser.sleep(2000);
   loginPage.getEnterUserLoginDetails(configData.Username,configData.Password);
   loginPage.getClickSignIn();
   browser.sleep(3000);

});

it('Verify User is on HomePage of Application with Accountname', function() {

  const AcctName = homePage.getAcctName();
  expect(AcctName).toEqual(configData.ACCT_NAME);

});

it('Verify User on ADF application File Page', function() {

  FileUrl =homePage.getFilePage();
  expect(FileUrl).toEqual(configData.FilePageUrl);

});

it('Verify User Create New folder on File Page', function() {

  filePage.getCreateNewFolder(configData.GitHub_Username);
  namePresent = filePage.getDisplayName();
  expect(namePresent).toBe(true);

});

it('Verify User cannot create New folder with existing name and Dialog box not closed', function() {

  filePage.getCreateNewFolder(configData.GitHub_Username);
  dialogDisplay = filePage.getDialogTitleDisplayed();
  expect(dialogDisplay).toBe(true);

});

it('Verify User gets Error message if having folder with existing name', function() {

  Message = filePage.getErrorMessageDisplayed();
  expect(Message).toContain(configData.Error_Message);
  browser.sleep(3000);
  filePage.getcancel();
  browser.sleep(3000);

});

it('Verify User able to delete the folder created', function() {

  filePage.getDeleteFolder();  
  browser.sleep(3000);
  expect(filePage.getDisplayName()).toBe(false);
  
});

});
