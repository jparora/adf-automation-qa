class HomePage{


    //Page Locator

    get HomePageIcon(){return element(by.css('<mat-icon role="img" matlisticon="" class="mat-icon notranslate mat-list-icon material-icons mat-icon-no-color" aria-hidden="true">home</mat-icon>'))}

    get File(){return element(by.css('body > app-root > div > ng-component > adf-sidenav-layout > div > adf-layout-container > mat-sidenav-container > mat-sidenav > div > mat-nav-list > mat-list-item:nth-child(3) > div > div.mat-list-text > span'))}
    
    

    //Page Actions

    getHomePageIconPresent(){
        this.HomePageIcon().isPresent();
    }

    getFilePage(){
        this.File.click();
    }
}

module.exports = new HomePage();
