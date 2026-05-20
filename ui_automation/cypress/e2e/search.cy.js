describe('Property Search Flow', () => {
  it('should filter properties by minimum price', () => {
    cy.visit('/')
    
    // Open filter modal or select dropdown
    cy.get('select[name="min_price"]').select('500000')
    cy.get('button[type="submit"]').contains('Search').click()
    
    // Assert URL contains query
    cy.url().should('include', 'min_price=500000')
    
    // Check results are > 500k
    cy.get('.property-price').each(($el) => {
      const priceText = $el.text().replace(/[^0-9]/g, '');
      expect(parseInt(priceText)).to.be.at.least(500000);
    })
  })
})
