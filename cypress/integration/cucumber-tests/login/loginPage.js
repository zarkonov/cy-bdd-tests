//consts are created from loginSteps.js
//class LoginPage is created and it has to have functions - Visit weboage



//fill username and password and submit form
const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'
const ERROR_MESSAGE = '.alert-error'//when we use a class as a selector for determing constant - class is noted with a dot .


class LoginPage{
    //Visit webpage
    static visit() {
        cy.visit(URL)
    }
    //Fill username
    static fillUsername(name) {
        cy.get(USERNAME_INPUT).type(name)
    }

    //Fill password
    static fillPassword(password) {
        cy.get(PASSWORD_INPUT).type(password)
    }

    //Submit form
    static submit() {
        cy.get(SUBMIT_BUTTON).click()
    }

    static setErrorMessage() {
        cy.get(ERROR_MESSAGE).contains('Login and/or password are wrong.')
    }
}

export default LoginPage