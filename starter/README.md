## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies

## Description
//Run test using below command
- run tests: `protractor conf.js`

## 
-Solution goes as below:
- Created the page Object Model for tesing the Requirement. it crates the different Module for every page or Feature under test. So that it will Refators easily based on new requirements.
- Created pages for Setting, Login, Home and File pages.
- Created one Config Data file to define the constant that used in Assertions
- Written 7 Different It blockes under the one Describe Block to Automate the requirements.
- Define Page Locators and Page Action in every Page. These Loctors defines the elements and Pafe Action  method to act on those page Locators.
-Import all the pages in the Spec file and Used those metionds to run the Test. Also, User const in the assetions to validate the results.

- The Sequence of Testing goes like this:
1. Select the Provider on Seting page.
2. Login to Application with User Id and Password.
3. Validate landing to Home Page by verifying the Account name.
4. Navigate to File page.
5. Created the New Folder
6. Write test to validate if same name given the Dialog didnot close with verifying the Descrition field
7. Validate the Error for using existing name for creating the Folder.
8. Finally, Delete the Folder created.

## PreRequsites
1. Added DirectConnect option in Config File.
2. Installed Protractor through Node Npm Package.
3. Added babel-Cli for missing Node module.


