// /<reference type="cypress"/>
import { orangeHrm } from "./hrm"

    beforeEach(function(){

        a.loginToTheApplication('Admin','admin123')
      

    })


    const a=new orangeHrm 

    it('login to the application',function(){
        cy.visit('opensource-demo.orangehrmlive.com')
        
        a.enterUserName('Admin')

        a.enterPassword('admin123')
        
        a.clickOnLogin()
        
        a.clickOnLogout()

        
    })
    it('Performance Module',function(){

        a.clickOnPerformance()

        a.enterRequiredFiledsInPerformance()

        a.clickOnFromDateInPerformance()

        a.clickOnToDateInPerformance()
        
    })

    it('verifying all the modules' ,function(){
        
        a.verifyAllTheModulesInTheApplication()

    })

    it.only('verify all modukes in dynamic way',function(){

        a.verifyingModulesInDynamicWay()
    })

    it.only('adding a person',function(){

        a.addAPerson()

        a.enterAllMandatoryFieldsToAddUserAsAdmin()
    })

    it('url',function(){
        a.globalVariables()
    })
