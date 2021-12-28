class epochPage {
    visitUrl() {
        return cy.visit('https://www.epochconverter.com/');
    }

    getImput() {
        return cy.getImput('[id=ecinput]');
    }




    //ecinput = "ecinput"
}