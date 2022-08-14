//tests are failing if we set the URL like referenced in the course because username and password to access 
//to the webpage https://zero.webappsecurity.com/auth/accept-certs.html?user_token=7b091526-9640-4bb5-90a0-b53fc58e3f2f 
//results in error - when clicked on back arror in the browser web page is opened correctly

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login page', () => {//same content for Given like in cucumber-tests.login file - it is a definition
    //cy.visit('http://zero.webappsecurity.com/login.html')
    LoginPage.visit()//from LoginPage.js - function, previous row is commented
})


/* When('I submit login', () => {//same content for When like in cucumber-tests.login file - it is a definition
    //next  rows 16,18,20 - commented to implement functions defined in LoginPge.js
    //fill username
    //cy.get('#user_login').type('username')
    //fill password
    //cy.get('#user_password').type('password')
    //submit
    //cy.get('input[name="submit"]').click()
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.submit()
}) */
 //Adding a new When - for paramteterization 
 //That is why we added some extra lines in login.feature
 //lines 9-11 , and line 8 is commented
 When('I fill username with {string}', username => {
    LoginPage.fillUsername(username)
 })

 When('I fill password with {string}', password => {
    LoginPage.fillPassword(password)
 })

 When('I click on submit login', () =>{
    LoginPage.submit()
 })
Then('I should see homepage', () => {//same content for Then like in cucumber-tests.login file - it is a definition
    //get some element after login
    cy.get('#account_summary_tab').should('be.visible')
   

})

Then('I should see error message', () => {//same content for Then like in cucumber-tests.login file - it is a definition
    //get some element after login
    LoginPage.setErrorMessage()
   

})