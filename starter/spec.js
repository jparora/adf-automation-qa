const settingPage = require('../starter/pages/settingPage');
const ConfigData = require('../starter/Configuration/configData');
const loginPage = require('../starter/pages/loginpage');
const configData = require('../starter/Configuration/configData');
const homePage = require('../starter/pages/homePage');
const { getHomePagetitle } = require('../starter/pages/homePage');
describe('ADF Application Testing: ', function() {

 xit('Verify user Select the provider on ADF app setting page', function() {
   browser.driver.get('http://qaexercise.envalfresco.com/settings');

   settingPage.getProviderDropDown();
   settingPage.getSelectProvider();
   settingPage.getClickApply();
   expect(browser.getCurrentUrl).toEqual(configData.BaseUrl);

  });
it('Verify user Login into the ADF application', function() {
   browser.driver.get('http://qaexercise.envalfresco.com/login');
   browser.sleep(5000);
   loginPage.getEnterUserLoginDetails(configData.Username,configData.Password);
   loginPage.getClickSignIn();
   browser.sleep(5000);

});

it('Verify user on HomePage of application', function() {

  HomeIcon = homePage.getHomePageIconPresent();
  expect(HomeIcon).toBeTruthy();
  

});
it('Verify user on ADF application File Page', function() {

  homePage.getFilePage();
  browser.sleep(5000);
  
  expect(browser.getCurrentUrl).toEqual(configData.FilePageUrl)
  console.log(browser.getCurrentUrl)


});

});

