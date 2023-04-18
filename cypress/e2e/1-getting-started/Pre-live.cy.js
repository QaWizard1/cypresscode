/// <reference types="Cypress" />
// import Login from "../../Login.js/Login"
import Login from "../../Login.js/Login2"

describe("POM",()=>{
it("Login test",()=>{

    cy.visit('https://prelive.assetpanda.com/users/sign_in')

    // create object

    const ln=new Login()

    ln.setusername('pranal123@asstepanda.com')
    cy.screenshot()
    ln.setpassword('Pranal@123')
    ln.setsub()


})


})