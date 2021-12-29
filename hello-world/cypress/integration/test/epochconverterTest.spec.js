/// <reference types="cypress" />

//Doesn't support POM!!!

//Scenarios to test:

context('open page', () => {
    beforeEach(() => {
        cy.visit('https://www.epochconverter.com/')
    })

    ///1-Scenario: Validate timestamp to human fuction
    it('Test timestamp to human date', () => {

        cy.get('[id=ecinput]').type('164074470916407')
        cy.get('#ef > [type="submit"]').click()
        cy.get('#result1').should('contain', 'Assuming that this timestamp is in')
    })

    //2-Scenario: Validate human date to timestamp function
    it('Test human date to timestamp', () => {

                cy.get('#rcinput').type('Wed, 29 Dec 2021 02:42:24 GMT')
                cy.get('#fs > [type="submit"]').click()
                cy.get('#result3').should('contain', 'Epoch timestamp:')

            }

        )
        //3-Create scenarios for ctas
        //4-validate hrefs
        //5- validate clear function
        //Negative scenarios:
        //1-Valitade input for <ecinput> is not accepting string only numbers
        //2- validate error messages
})