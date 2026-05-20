describe('Agent Property Submission', () => {
  beforeEach(() => {
    // Assume custom command for agent login
    cy.loginAsAgent('agent@proptech.com', 'Agent_Pass!1')
  })

  it('should require images for a new listing', () => {
    cy.visit('/agent/properties/add')
    
    cy.get('input[name="title"]').type('Luxury Villa in Malibu')
    cy.get('input[name="price"]').type('2500000')
    cy.get('button').contains('Submit Listing').click()
    
    // Assert validation error
    cy.get('.text-danger').should('contain', 'At least one image is required.')
  })
})
