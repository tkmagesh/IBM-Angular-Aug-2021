/// <reference types="cypress" />

describe("Calculator", () => {
    beforeEach(() =>{
        cy.visit('http://localhost:4200');
        cy
            .get('input[type="button"][value="Calculator"]')
            .click();
    })
    it("should calculate sum of two numbers", () => {
        cy.get('app-calculator:nth-child(1) > input:nth-child(3)')
            .type('200');
        cy.get('app-calculator:nth-child(1) > input:nth-child(4)')
            .type('300');
        cy.get('[value="Add"]')
            .click();
        cy.get('app-calculator:nth-child(1) > div.positive:nth-child(10)')
            .should('contain', '400');
        
    });
})