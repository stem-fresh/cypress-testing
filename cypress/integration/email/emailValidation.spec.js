const testEmail = Cypress.env('TEST_EMAIL');

describe('Email Validation', () => {
  it('should validate the email', () => {
    // Replace 'your-email-service-api' with the actual email service API URL
    cy.request(`https://your-email-service-api/emails?to=${testEmail}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.contain('Verification Code');
    });
  });
});
