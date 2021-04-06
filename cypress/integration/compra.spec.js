/// <reference types="cypress" />

describe('Comprar', () => {

    before(() => {
        cy.visit('http://automationpractice.com')
    })


    it('Efetuar compra de 1 produto', () => {

        cy.contains('Faded Short Sleeve T-shirts')
            .trigger('mouseover')

        cy.contains('Faded Short Sleeve T-shirts')
            .parent()
            .siblings('div.button-container')
            .children('a')
            .first()
            .click()

        //Validando se a compra está correta
        cy.get('.icon-ok')
          .parent()
          .should('contain.text', 'Product successfully added to your shopping cart')

        cy.get('span#layer_cart_product_title')
          .should('contain.text', 'Faded Short Sleeve T-shirts')

    })

    it('Finalizando a compra', () => {
        
        //Ir para o carinho
        cy.get(".button-container a[href$='controller=order']").click()
        //Finalizar a compra
        cy.get(".cart_navigation a[href$='order&step=1']").click()

        //Realizando o login
        cy.get('#email').type('elofixe@hotmail.com')
        cy.get('#passwd').type('JAvai123!@')
  
        cy.get('button#SubmitLogin').click()

        //Confirmando o endereço
        cy.get('button[name=processAddress]').click()

        //Confirmar a remessa e os termos de uso
        cy.get('[type=checkbox]#cgv').check()
       
        cy.get('button[name=processCarrier]').click()

        //Dados de pagamento
        cy.get('.bankwire').click()

        //Confirmar a finalização do pedido
        cy.get(".cart_navigation button[type=submit]")
          .find('span')
          .contains('I confirm my order')
          .click()

        //Apresentando a mensagem de confirmação do pedido com sucesso
        cy.get('.cheque-indent strong')
          .should('contain.text', 'Your order on My Store is complete.')

    })
  

})