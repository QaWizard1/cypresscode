/// <reference types = "Cypress" />

describe(" Dropdown",()=>{

    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click();
        cy.get('.modal-open').click();
    })

    it("test1",()=>{
        

    
        // cy.get('#menu-customer > .parent').click()
        cy.get('#menu-customer>a').click()
        // cy.get('#collapse-5 > :nth-child(1) > a').click()
        cy.get('#menu-customer>url>li:first-child').click()
    //   cy.pause()

    })
    it.only("test2 rows",()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')


    })
    it("test3",()=>{


    })
})