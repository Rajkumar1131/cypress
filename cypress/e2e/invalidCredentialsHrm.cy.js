// /<reference type="cypress"/>
it('orangeHRM',function(){
    cy.visit('opensource-demo.orangehrmlive.com')
    cy.get('img[alt=company-branding]').should('exist')
    cy.get('.oxd-label').should('exist')
    cy.get('.oxd-label').should('exist')
     cy.get('[name=username]').type('Admin12c')
     cy.get('[name=password]').type("admin123")
    cy.get('[type=submit]').should('exist')
    cy.get('[type=submit]').click()
    cy.get('[role=alert]').should('exist')

    //correct username and invalid password
    cy.visit('opensource-demo.orangehrmlive.com')
    cy.get('img[alt=company-branding]').should('exist')
    cy.get('.oxd-label').should('exist')
    cy.get('.oxd-label').should('exist')
     cy.get('[name=username]').type('Admin')
     cy.get('[name=password]').type("admin")
    cy.get('[type=submit]').should('exist')
    cy.get('[type=submit]').click()
    cy.get('[role=alert]').should('exist')

    cy.visit('opensource-demo.orangehrmlive.com')
    cy.get('img[alt=company-branding]').should('exist')
    cy.get('.oxd-label').should('exist')
    cy.get('.oxd-label').should('exist')
     cy.get('[name=username]').type('Admin')
     cy.get('[name=password]').type("admin")
    cy.get('[type=submit]').should('exist')
    cy.get('[type=submit]').click()
    cy.get('Required').should('exist')
    
})