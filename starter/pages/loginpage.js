class LoginPage{

//Page Locators

get Username(){return element(by.id('username'))};

get Password(){return element(by.id('password'))};

get SignIn() {return element(by.css('#login-button > span > span'))};


//Page Actions

getEnterUserLoginDetails(Username,Password){

    this.Username.sendKeys(Username);
    this.Password.sendKeys(Password);

}

getClickSignIn(){
    this.SignIn.click();
}

}

module.exports = new LoginPage();
