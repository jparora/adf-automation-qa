class HomePage{


    //Page Locator

    get Accountname(){return element(by.id('adf-userinfo-ecm-name-display'))}

    get FilePage(){return element(by.xpath('/html/body/app-root/div/ng-component/adf-sidenav-layout/div/adf-layout-container/mat-sidenav-container/mat-sidenav/div/mat-nav-list/mat-list-item[3]/div/div[2]/span'))}
    
    

    //Page Actions

    getAcctName(){
      return this.Accountname.getText();
    }

    getFilePage(){
        this.FilePage.click();
        return browser.getCurrentUrl();
    }
}

module.exports = new HomePage();
