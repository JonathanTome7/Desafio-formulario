
describe('Cadastro de usuário', () => {
    beforeEach(() => {
      cy.visit('https://jamesonbatista.github.io/projectqatesterweb/cadastro-simples.html')
    })
  
    it('Preenche e envia o formulário com sucesso', () => {
      cy.get('#name').type('Maria Teste')
      cy.get('#email').type(`maria_${Date.now()}@teste.com`)
      cy.get('#password').type('SenhaForte123')
      cy.get('#gender').select('Feminino')
      cy.get('#birthdate').type('1990-05-20')
      cy.get('#phone').type('11999998888')
      cy.get('#address').type('Rua das Flores, 123')
      cy.get('#state').select('Distrito Federal')
      cy.get('#city').select('Brasília')
      cy.get('#terms').check()
      cy.get('#cadastroForm > button').click()
  
      // Validação de resultado esperado
      cy.contains('Cadastro realizado com sucesso!').should('be.visible') // ajuste conforme o retorno real da página
    }) 
  })