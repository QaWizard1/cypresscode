/// <reference types ="Cypress" />

describe('test suit',()=>{

    it("test0",()=>{

        // selecting radio button
cy.visit("https://itera-qa.azurewebsites.net/home/automation")
cy.title('eq'," Testautomation practice page")
cy.get('#male').check().should('be.checked')

cy.wait(5000)

    cy.get('input.form-check-input[type="checkbox"]').check().should("be.checked")
cy.get('input.form-check-input[type="checkbox"]').uncheck().should("not.be.checked")



    })

})
