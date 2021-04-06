# Cenários de Login

#### Cenário 1: Realizar o login com sucesso

Dado que o usuário esteja no site

E click em "Sign in"

E preencha o campo "Email address" com um email válido

E preencha o campo "Password" com um senha válido

Quando clicar em "Sign in"

Então o usuário deverá ser direcionado para a tela home do site


#### Cenário 2: Realizar o login com email inválido

Dado que o usuário esteja no site

E click em "Sign in"

E preencha o campo "Email address" com um email inválido

E preencha o campo "Password" com um senha válido

Quando clicar em "Sign in"

Então deverá apresentar uma mensagem de erro para o usuário



#### Cenário 3: Realizar o login com senha inválido

Dado que o usuário esteja no site

E click em "Sign in"

E preencha o campo "Email address" com um email válido

E preencha o campo "Password" com um senha inválido

Quando clicar em "Sign in"

Então deverá apresentar uma mensagem de erro para o usuário



#### Cenário 4: Realizar o login com email e senha inválido

Dado que o usuário esteja no site

E click em "Sign in"

E preencha o campo "Email address" com um email inválido

E preencha o campo "Password" com um senha inválido

Quando clicar em "Sign in"

Então deverá apresentar uma mensagem de erro para o usuário


# Cenário de compra


#### Cenário 1: Realizar uma compra

Dado que o usuário esteja no site

Quando o mesmo clicar em "Add to card"

Então deve ser apresentado uma mensagem de sucesso, produto no carrinho


#### Cenário 2: Continuar comprando

Dado que o usuário esteja no site

Quando o mesmo clicar em "Add to card"

Então deve ser apresentado uma mensagem de sucesso

E poderá clicar em "Continuar comprando"


#### Cenário 2: Ir para o carrinho

Dado que o usuário esteja no site

Quando o mesmo clicar em "Add to card"

Então deve ser apresentado uma mensagem de sucesso

E poderá clicar em "Ir para o carrinho"


# Cenários de finalização da compra


#### Cenário 1: Deletar item

Dado que o usuário esteja na tela do carrinho

Quando clicar no icon da lixeira

Então o item que deseja remover deve ser apagado da listagem


#### Cenário 2: Adicionar item

Dado que o usuário esteja na tela do carrinho

Quando clicar no icon de "+"

Então o item que deseja adicionar mais produtos deve ser adicionado, realizando uma contagem


#### Cenário 3: Finalizar pedido

Dado que o usuário esteja na tela do carrinho

Quando clicar no botão "Proceed to checkout"

Então o usuário deve ser direcionado para a tela seguinte.


#### Cenário 4: Confirmar endereço

Dado que o usuário esteja na tela de endereço

E se o endereço estiver correto

Quando clicar no botão "Proceed to checkout"

Então o usuário deve ser direcionado para a tela seguinte.


#### Cenário 5: Confirmar envio com o termo de serviço ativo

Dado que o usuário esteja na tela de envio

E se o envio estiver correto

E com o checkbox do termo de serviço ativo

Quando clicar no botão "Proceed to checkout"

Então o usuário deve ser direcionado para a tela seguinte.


#### Cenário 6: Confirmar envio com o termo de serviço desativo

Dado que o usuário esteja na tela de envio

E se o envio estiver correto

E com o checkbox do termo de serviço desativo

Quando clicar no botão "Proceed to checkout"

Então deve ser apresentado um alert para que o usuário ative essa opção.


#### Cenário 7: Escolher modo de pagamento

Dado que o usuário esteja na tela de pagamento

E escolher uma das opções de pagamento

E revise as informações

Quando clicar no botão "I confirm my order"

Então o pedido será confirmado com sucesso.

