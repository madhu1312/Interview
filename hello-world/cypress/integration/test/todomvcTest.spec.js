/// <reference types="cypress" />

//Scenarios to test:

describe('Functional testing', () => {
    beforeEach(() => {
            cy.visit('http://todomvc-app-for-testing.surge.sh/')
            cy.get('.new-todo')
                .type('First Item{enter}')
                .type('Second Item{enter}')
                .get('.todo-list li')
        })
        //1-Validate to add a item and display list
    it('Validates list on app', () => {

        cy.get('.todo-list li').should('have.length', 2)

    })

    //2-Validate the item is status changed
    it('Validates item status', () => {

        cy.get(':nth-child(2) > .view > .toggle').click()
        cy.get('.completed > .view > label')
    })

    //4-Validate item is deleted
    //5-Validate filters by status
})