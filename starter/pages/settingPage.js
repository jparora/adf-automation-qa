class SettingPage{

//Page Locators

get ProviderDropDown(){return element(by.css('#host-form > mat-form-field > div > div.mat-form-field-flex.ng-tns-c126-0'))};

get SelectProvider(){return element(by.id('mat-option-1'))};

get ClickApply() {return element(by.css('#host-button > span'))};

//Page Actions

getProviderDropDown(){
    this.ProviderDropDown.click();
};

getSelectProvider(){
    this.SelectProvider.click();
};

getClickApply(){
    this.ClickApply.click();
};

}

module.exports = new SettingPage();
