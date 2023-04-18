/// <reference types = "Cypress" />

describe(" Dropdown",()=>{

    it.skip("testnormal",()=>{

cy.visit('https://www.zoho.com/commerce/free-demo.html')

cy.get("#zcf_address_country").select('Benin')
.should("have.value","Benin")

    })


    it.skip("terst2",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsAlert()']").click()

        cy.on("window:alert",(t)=>{

            expect(t).to.contains("I am a JS Alert");

            
    cy.get('#result').should('have.text','You successfully clicked an alert')
        })
    })

    it.only("Auth alert",()=>{

        cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth:
                                                                        {
                                                                            username:"admin",
                                                                            password:"admin"
                                                                        }
      });
    })
})
