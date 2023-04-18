/// <reference types= "Cypress" />

describe("Window child",()=>{

it("Test1",()=>{

    cy.visit("https://the-internet.herokuapp.com/windows") // parent tab 
    // cy.get('.example >a').click()

    // to remove the target attribute to remain onn the same window (click on the link)
    cy.get('.example >a').invoke("removeAttr","target").click()  

    cy.url().should("include","windows")

    cy.wait(3000)

    cy.go(-1)

})

it.only("Test2",()=>{

    cy.visit("https://the-internet.herokuapp.com/windows") // parent tab .
    cy.get('.example >a').then((e)=>{

        let url=e.prop('href');

        cy.visit(url);

    })

    cy.url().should('include',"windows/new")
    cy.wait(3000)

    cy.go(-1)

})

})