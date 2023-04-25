export class orangeHrm {


   
   enterUserName(){
    cy.get('[name=username]').type('Admin')
   }
   enterPassword(){
    cy.get('[name=password]').type("admin123")
   }
   clickOnLogin(){
    cy.get('[type=submit]').click()
   }

   loginToTheApplication(){
      //cy.visit('opensource-demo.orangehrmlive.com')
      this.enterUserName()
      this.enterPassword()
      this.clickOnLogin()
   }

   clickOnLogout(){

      cy.get('.oxd-userdropdown-tab>i').click()

      cy.get('li>ul>li a:contains("Logout")').click()
      
   }
   verifyAllTheModulesInTheApplication(){
    
      cy.get('span:contains("Admin")').sholud('exist')

      cy.get('span:contains("PIM")').sholud('exist')
      cy.get('span:contains("Leave")').sholud('exist')
      cy.get('span:contains("Time")').sholud('exist')
      cy.get('span:contains("Recruitment")').sholud('exist')
      cy.get('span:contains("My Info")').sholud('exist')
      cy.get('span:contains("Performance")').sholud('exist')
      cy.get('span:contains("Dashboard")').sholud('exist')
      cy.get('span:contains("Directory")').sholud('exist')
      cy.get('span:contains("Maintenance")').sholud('exist')
      cy.get('span:contains("Buzz")').sholud('exist')
      
   }

   verifyingModulesInDynamicWay(){
      const modules = [
         'Admin',
         'PIM',
         'Leave',
         'Time',
         'Recruitment',
         'Performance',
         'Dashboard',
         'Directory',
         'Maintenance'
       ];
       
       //for (let i = 0; i < modules.length; i++) {
        // const m ='span:contains("${modules[i]}")';
        
         //cy.get('span:contains("${modules[i]}")').should('exist');
         //cy.contains('span', modules[i]).should('exist');
         
      // }
       /*cy.wrap(modules).each( module=> {
            cy.contains('span', modules).should('exist');
          });*/

   }

   clickOnPerformance(){

      cy.get('span:contains("Performance")').click()
   }

   clickOnFromDateInPerformance(){
      cy.get('form>div>div:nth-of-type(6) i').click()//dropdown to select date and year
      
      cy.get('div.oxd-date-input-calendar ul>li:last-child i').click() //dropdown to select year
      cy.get('li>ul[role="menu"] li:contains("2019")').click()
      cy.get('div.oxd-date-input-calendar div>ul>li:first-child').click()//dropdown to select month
      cy.get('li>ul[role="menu"] li:contains("March")').click()
      cy.get('.oxd-calendar-dates-grid>div:nth-of-type(11)').click()

   }

   clickOnToDateInPerformance(){

      cy.get('form>div>div:nth-of-type(7) i').click()//dropdown to select date and year

      cy.get('div.oxd-date-input-calendar ul>li:last-child >div>i').click() //drop down to select year
      cy.get('li>ul[role="menu"] li:contains("2022")').click() 
      cy.get('div.oxd-date-input-calendar div>ul>li:first-child').click()//drop down to select month
      cy.get('li>ul[role="menu"] li:contains("March")').click()
      cy.get('.oxd-calendar-dates-grid>div:nth-of-type(11)').click()
   }
   enterRequiredFiledsInPerformance(){

      cy.get('input[placeholder="Type for hints..."]').type('s')
      //cy.get('span:contains("Test Account")').click()


      cy.get('i.oxd-select-text--arrow').eq(0).click()
      //cy.get('form>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div>div:nth-of-type(2)').click()
      //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
      cy.get('span:contains("Software Engineer")').click()

      cy.get('i.oxd-select-text--arrow').eq(1).click()

      cy.get('span:contains("Engineering")').click()

      cy.get('form>div>div:nth-of-type(4)>div>div:nth-of-type(2)>div>div>div:nth-of-type(2)').click()

      cy.get('span:contains("Current and Past Employees")').click()

      cy.get('form>div>div:nth-of-type(5)>div>div:nth-of-type(2)>div>div>div:nth-of-type(2)').click()

      cy.get('span:contains("Completed")').click()

      /*cy.get('').click()

      cy.get('').click()

      cy.get('').click()*/


   }
   clickOnSearch()
   {
      cy.get('[type="submit"]').click()
      //cy.get('span:contains("Engineering")').click()
      
   }

   addAPerson(){


      cy.get('span:contains("Admin")').click()
      cy.get('button:contains("Add")').click()

   }

   enterAllMandatoryFieldsToAddUser(){

      cy.get('.oxd-select-text--after').eq(0).click()

      //cy.get('span:contains("Admin")').eq(3).click()

      cy.get('.oxd-select-option').eq(1).click()

      cy.get('[placeholder="Type for hints..."]').type('o')
      
      cy.get('span:contains("Odis  Adalwin")').click()

      cy.get('.oxd-select-text--after').eq(1).click()

      cy.get('span:contains("Enabled")').click()

      cy.get('.oxd-input.oxd-input--active').eq(1).type(' ')

      cy.get('[type="password"]').eq(0).type('raj123')

      cy.get('[type="password"]').eq(1).type('raj123')

      cy.get('[type="submit"]').click()
cy.get('span:contains("Required")').should('exist')
   }

   errorMessageFor(){

      
   }



   globalVariables(){
      cy.visit(Cypress.env('URL'))
   }

}