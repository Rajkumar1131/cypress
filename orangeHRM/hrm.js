export class orangeHrm {

      elements ={

         getUrl           :() => cy.visit(Cypress.env('URL')),

         userName         :() => cy.get('[name=username]'),

         password         :() => cy.get('[name=password]'),

         loginButton      :() => cy.get('[type=submit]'),

         dropdownToLogout  :() => cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon'),

         logoutButton     :() => cy.get('li>ul>li a:contains("Logout")'),

         searchButton     :() => cy.get('[type="submit"]')
      }

      allModules ={

         adminModule          :() => cy.get('span:contains("Admin")'),

         pimModule            :() => cy.get('span:contains("PIM")'),

         leaveModule          :() => cy.get('span:contains("Leave")'),

         timeModule           :() => cy.get('span:contains("Time")'),

         recruitmentModule    :() => cy.get('span:contains("Recruitment")'),

         myInfoModule         :() => cy.get('span:contains("My Info")'),

         performanceModule    :() => cy.get('span:contains("Performance")'),

         dashboardModule      :() => cy.get('span:contains("Dashboard")'),

         directoryModule      :() => cy.get('span:contains("Directory")'),

         maintenanceModule    :() => cy.get('span:contains("Maintenance")'),

         buzzModule           :() => cy.get('span:contains("Buzz")')

      }

      allDetailsOfPerformance={

         enterHint                  :() => cy.get('input[placeholder="Type for hints..."]'),

         employeeName               :() => cy.get('span:contains("Lisa  Andrews")'),

         dropDownToSelectJobTitle   :() => cy.get('i.oxd-select-text--arrow').eq(0),

         selectJobTitle             :() => cy.get('span:contains("Software Engineer")'),

         dropDownInSubUnit          :() => cy.get('i.oxd-select-text--arrow').eq(1),

         selectOptionInSubUit       :() => cy.get('span:contains("Engineering")'),

         DropDownInInclude          :() => cy.get('i.oxd-select-text--arrow').eq(2),

         selectOptionInInclude      :() => cy.get('span:contains("Current and Past Employees")'),

         dropDownInReview           :() => cy.get('i.oxd-select-text--arrow').eq(3),

         selectOptionInReview       :() => cy.get('span:contains("Completed")')
         
        

      }

      FromDateInPerformance ={

         dropdownToSelectFromDate     :() => cy.get('form>div>div:nth-of-type(6) i'),

         dropdownToSelectYear         :() => cy.get('div.oxd-date-input-calendar ul>li:last-child i'),

         selectYear                   :() => cy.get('li>ul[role="menu"] li:contains("2019")'),

         dropDownToSelectMonth        :() => cy.get('div.oxd-date-input-calendar div>ul>li:first-child'),

         selectMonth                  :() => cy.get('li>ul[role="menu"] li:contains("March")'),

         selectDate                   :() => cy.get('.oxd-calendar-dates-grid>div:nth-of-type(11)')
                                    

      }

      toDateInPerformance ={

         dropdownToSelectToDate       :() => cy.get('.oxd-icon.bi-calendar.oxd-date-input-icon').eq(1),

         dropdownToSelectYear         :() => cy.get('.oxd-icon.bi-caret-down-fill.oxd-icon-button__icon').eq(1),

         selectYear                   :() => cy.get('li>ul[role="menu"] li:contains("2022")'),

         dropDownToSelectMonth        :() => cy.get('div.oxd-date-input-calendar div>ul>li:first-child'),

         selectMonth                  :() => cy.get('li>ul[role="menu"] li:contains("March")'),

         selectDate                   :() => cy.get('.oxd-calendar-dates-grid>div:nth-of-type(11)')

      }

      newAdmin ={

         addButton                   :() => cy.get('button:contains("Add")'),

         dropDownToSelectUserRole    :() => cy.get('.oxd-select-text--after').eq(0),

         selectOptionInUserRole      :() => cy.get('span:contains("ESS")'),
   
         typeHintToSelectName        :() => cy.get('[placeholder="Type for hints..."]'),
         
         selectEmployeeName          :() => cy.get('span:contains("Dominic  Chase")'),
   
         dropDownForStatus           :() => cy.get('.oxd-select-text--after').eq(1),
   
         selectOptionInStatus        :() => cy.get('span:contains("Enabled")'),
   
         enterUserNameInAdmin        :() => cy.get('.oxd-input.oxd-input--active').eq(1),
   
         enterPasswordInAdmin        :() => cy.get('[type="password"]').eq(0),
   
         enterConfirmPassword        :() => cy.get('[type="password"]').eq(1),
   
         savebutton                  :() => cy.get('[type="submit"]')
         

      }
      


   enterUserName(username){
    
         this.elements.userName().clear()

         this.elements.userName().type(username)

   }
   enterPassword(Password){

         this.elements.password().clear()

         this.elements.password().type(Password)

   }
   clickOnLogin(){

         this.elements.loginButton().should('exist')

         this.elements.loginButton().click()

   }

   loginToTheApplication(username,Password){

         cy.visit('opensource-demo.orangehrmlive.com')

         this.enterUserName(username)

         this.enterPassword(Password)

         this.clickOnLogin()

   }

   clickOnLogout(){

      this.elements.dropdownToLogout().click()

      this.elements.logoutButton().click()
      
   }


   verifyAllTheModulesInTheApplication(){

     
      this.allModules.adminModule().should('exist')

      this.allModules.pimModule().should('exist')

      this.allModules.leaveModule().should('exist')

      this.allModules.timeModule().should('exist')

      this.allModules.recruitmentModule().should('exist')

      this.allModules.myInfoModule().should('exist')

      this.allModules.performanceModule().should('exist')

      this.allModules.dashboardModule().should('exist')

      this.allModules.directoryModule().should('exist')

      this.allModules.maintenanceModule().should('exist')

      this.allModules.buzzModule().should('exist')
      
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
       
       for (let i = 0; i < modules.length; i++) {
        
         
         cy.contains('span', modules[i]).should('exist');
   
         
       }
       
   }

   clickOnPerformance(){

      this.allModules.performanceModule().click()
   }

   clickOnFromDateInPerformance(){


      this.FromDateInPerformance.dropdownToSelectFromDate().click()

      this.FromDateInPerformance.dropdownToSelectYear().click()

      this.FromDateInPerformance.selectYear().click()

      this.FromDateInPerformance.dropDownToSelectMonth().click()

      this.FromDateInPerformance.selectMonth().click()

      this.FromDateInPerformance.selectDate().click()

   }

   clickOnToDateInPerformance(){

      this.toDateInPerformance.dropdownToSelectToDate().click()

      this.toDateInPerformance.dropdownToSelectYear().click() 

      this.toDateInPerformance.selectYear().click() 

      this.toDateInPerformance.dropDownToSelectMonth().click()

      this.toDateInPerformance.selectMonth().click()

      this.toDateInPerformance.selectDate().click()
   }
   enterRequiredFiledsInPerformance(){

      this.allDetailsOfPerformance.enterHint().type('s')

      this.allDetailsOfPerformance.employeeName().click()

      this.allDetailsOfPerformance.dropDownToSelectJobTitle().click()

      this.allDetailsOfPerformance.selectJobTitle().click()

      this.allDetailsOfPerformance.dropDownInSubUnit().click()

      this.allDetailsOfPerformance.selectOptionInSubUit().click()

      this.allDetailsOfPerformance.DropDownInInclude().click()

      this.allDetailsOfPerformance.selectOptionInInclude().click()

      this.allDetailsOfPerformance.dropDownInReview().click()

      this.allDetailsOfPerformance.selectOptionInReview().click()

      this.elements.searchButton().click()

   }
   clickOnSearch()
   {
      this.elements.searchButton().click()
   }

   enterAllMandatoryFieldsToAddUserAsAdmin(){


      this.allModules.adminModule().click()

      this.newAdmin.addButton().click()

      this.newAdmin.dropDownToSelectUserRole().click()

      this.newAdmin.selectOptionInUserRole().click()

      this.newAdmin.typeHintToSelectName().type('o')
      
      this.newAdmin.selectEmployeeName().click()

      this.newAdmin.dropDownForStatus().click()

      this.newAdmin.selectOptionInStatus().click()

      this.newAdmin.enterUserNameInAdmin().type('RajKumar')

      this.newAdmin.enterPasswordInAdmin().type('RajKumar@123')

      this.newAdmin.enterConfirmPassword().type('RajKumar@123')

      this.newAdmin.savebutton().click()
   }

   globalVariables(){

         this.elements.getUrl()
   }

   
   

}