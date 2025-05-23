Cypress.Commands.add('preencherFormulario', (usuario) => {
    cy.get('#name').type(usuario.nome)
    cy.get('#email').type(usuario.email)
    cy.get('#password').type(usuario.senha)
    cy.get('#gender').select(usuario.genero)
    cy.get('#birthdate').type(usuario.nascimento)
    cy.get('#phone').type(usuario.telefone)
    cy.get('#address').type(usuario.endereco)
    cy.get('#state').select(usuario.estado)
    cy.get('#city').select(usuario.cidade)
    cy.get('#terms').check()
  })