// /<reference type="cypress"/>
import { orangeHrm } from "./hrm"

before(function(){
    cy.visit(Cypress.env('URL'))
    a.loginToTheApplication()
})

after(function(){
    a.clickOnLogout()
})

const a=new orangeHrm 

it('login to the application',function(){
    cy.visit('opensource-demo.orangehrmlive.com')
    
    a.enterUserName()

    a.enterPassword()
    
    a.clickOnLogin()
    a.clickOnLogout()
})
it.only('Performance Module',function(){
    //a.loginToTheApplication()
    a.clickOnPerformance()
    a.enterRequiredFiledsInPerformance()
    a.clickOnFromDateInPerformance()
    //a.clickOnToDateInPerformance()
    a.clickOnSearch()

})

it('verifying all the modules' ,function(){
    a.loginToTheApplication()
    
    a.verifyAllTheModulesInTheApplication()
})

it('verify all modukes in dynamic way',function(){

    a.verifyingModulesInDynamicWay()
})

it('adding a person',function(){

    a.loginToTheApplication()
    a.addAPerson()
    a.enterAllMandatoryFieldsToAddUser()
})

it.only('url',function(){
    a.globalVariables()
})