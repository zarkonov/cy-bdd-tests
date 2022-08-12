//tests are failing if we set the URL like referenced in the course because username and password to access 
//to the webpage https://zero.webappsecurity.com/auth/accept-certs.html?user_token=7b091526-9640-4bb5-90a0-b53fc58e3f2f 
//results in error - when clicked on back arror in the browser web page is opened correctly
import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I open login page', () => {//same content for Given like in cucumber-tests.login file - it is a definition
    cy.visit('http://zero.webappsecurity.com/login.html')

})


When('I submit login', () => {//same content for When like in cucumber-tests.login file - it is a definition
    //fill username
    cy.get('#user_login').type('username')
    //fill password
    cy.get('#user_password').type('password')
    //submit
    cy.get('input[name="submit"]').click()
})

Then('I should see homepage', () => {//same content for Then like in cucumber-tests.login file - it is a definition
    //get some element after login
    cy.get('#account_summary_tab').should('be.visible')
   

})