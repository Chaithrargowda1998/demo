///<reference types="cypress"/>
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('I opened Ecommerce page',()=>
{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})
When('I add items to cart',function()
{
    
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('h4.card-title').each((element, index, $list) => {
    if(element.text().includes('Blackberry'))
{
    cy.get('button.btn.btn-info').eq(index).click()
}
})
cy.get('h4.card-title').each((element, index, $list) => {
    if(element.text().includes('Nokia Edge'))
{
    cy.get('button.btn.btn-info').eq(index).click()
}
})
})
Then('Click on checkout, Select the country click on purchase',()=>
{
    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force:true})
    cy.get("input[type='submit']").click()
    })

And('verify thank you message',()=>
{
    cy.get('.alert').then(function(element){

        const findText = element.text()
        expect(findText.includes("Success")).to.be.true
    
   
    })
})






// When('I filled the details',(dataTable)=>{
//     name = dataTable.rawTable[1][0]
//     cy.get(':nth-child(1) > .form-control').type(dataTable.rawTable[1][0])
//     cy.get('select').select(dataTable.rawTable[1][1])

// })
// Then('Validate the form behaviour',()=>{
//     cy.get(':nth-child(4) > .ng-untouched').should('have.value',name)
//     cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
//     cy.get('#inlineRadio3').should('be.disabled')
// })
// And('Select the shop page',()=>{
//     cy.get(':nth-child(2) > .nav-link').click()

// })