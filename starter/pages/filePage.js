const configData = require("../Configuration/configData");

class FilePage{


    //Page Locators
    get NewFolder(){return element(by.xpath('//*[@id="document-list-container"]/adf-upload-drag-area/div/adf-toolbar/mat-toolbar/div/button[2]'))}

    get Name(){return element(by.xpath('//*[@id="adf-folder-name-input"]'))}

    get ClickCreate(){return element(by.xpath('//*[@id="adf-folder-create-button"]/span'))}

    get displayName(){ return element(by.xpath(`(//div[@data-automation-id="${configData.GitHub_Username}"])[2]//span`))};

    get dialogTitle(){return element(by.xpath('//*[@id="adf-folder-description-input"]'))};

    get OptionWindow(){return element(by.css('#action_menu_right_0 > span > mat-icon'))}

    get error(){return element.all(by.xpath(`//div[@class="cdk-live-announcer-element cdk-visually-hidden"]`))};

    get cancel(){return element(by.css('#adf-folder-cancel-button > span'))}

    get DeleteOpt(){return element(by.xpath('/html/body/div[3]/div[2]/div/div/div/button[5]/mat-icon'))}

        
    //Page Actions

    getCreateNewFolder(Name){
      this.NewFolder.click();
      this.Name.sendKeys(Name);
      this.ClickCreate.click();
    }

    getDisplayName(){
      return this.displayName.isPresent();
    }

    getDialogTitleDisplayed(){
      return this.dialogTitle.isDisplayed();

    }
    getErrorMessageDisplayed(){
      const error = this.error;
      error.getText().then(function() {
      });  
      return error.getText();
    }

    getcancel(){
      this.cancel.click();
    }
    getDeleteFolder(){
      this.displayName.click();
      this.OptionWindow.click();
      const EC = protractor.ExpectedConditions;
      browser.wait(EC.elementToBeClickable(this.DeleteOpt), 5000);
      this.DeleteOpt.click();
    }
}

module.exports = new FilePage();








