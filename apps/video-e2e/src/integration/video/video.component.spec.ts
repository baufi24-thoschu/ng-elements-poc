describe('video', () => {
  beforeEach(() => cy.visit('/iframe.html?id=videocomponent--primary&args=info;'));
  it('should render the component', () => {
    cy.get('baufi24-ng-elements-video').should('exist');
  });
});