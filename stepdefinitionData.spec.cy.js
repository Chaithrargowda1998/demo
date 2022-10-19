///<reference types="cypress"/>
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('I open Ecommerce page',()=>
{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})
When('I filled the details',(dataTable)=>{
        name = dataTable.rawTable[1][0]
        cy.get(':nth-child(1) > .form-control').type(dataTable.rawTable[1][0])
        cy.get('select').select(dataTable.rawTable[1][1])
        // cy.get(':nth-child(1) > .form-control').type(name)
        // cy.get('select').select(gender)
    })
    Then('Validate the form behaviour',()=>{
        // cy.get(':nth-child(4) > .ng-untouched').should('have.value',name)
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
    })
    And('Select the shop page',()=>{
       cy.get(':nth-child(2) > .nav-link').click()
    
    })