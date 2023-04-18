/// <reference types = "Cypress" />

describe(" Dropdown",()=>{

    it("mouse hover",()=>{

        cy.visit('https://demo.opencart.com/')
        cy.contains('Desktops').trigger('mouseover').click()

    })
    it("right cliock1",()=>{

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        cy.get('.context-menu-one').trigger('contextmenu')
        cy.get('.context-menu-item.context-menu-icon.context-menu-icon-copy').click()

    })
    it.only("scrolling",()=>{

        cy.visit('https://docs.cypress.io/plugins')
        cy.contains("cypress-rails").scrollIntoView()

    })

})