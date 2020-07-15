class SettingPage{

//Page Locators

get ProviderDropDown(){return element(by.css('#adf-provider-selector > div > div.mat-select-arrow-wrapper.ng-tns-c134-1 > div'))};

get SelectProvider(){return element(by.css('#mat-option-1 > span'))}

get ClickApply() {return element(by.css('#host-button > span'))};


//Page Actions

getProviderDropDown(){
    this.ProviderDropDown.click();
};

getSelectProvider(){
    this.SelectionProvider.click();
};

getClickApply(){
    this.ClickApply.click();
};

}

module.exports = new SettingPage();
