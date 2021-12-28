/// <reference types="cypress" />

//Doesn't support POM!!!

//Scenarios to test:

describe('open page', () => {
    beforeEach(() => {
        cy.visit('https://www.epochconverter.com/');
    })

    ///1-Convert timestamp to human date
    it('Test timestamp imput', () => {

            cy.get('[id=ecinput]').type(`1640677636`);
        })
        //2-Convert human date to timestamp
        //3-Create scenarios for ctas
        //4-validate hrefs
        //5- validate clear function
        //Negative scenarios:
        //1-Valitade input for <ecinput> is not accepting string only numbers
        //2- validate error messages
})