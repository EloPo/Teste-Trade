# Processo Seletivo Trade Technology

Analise  a situaçãodescrita  abaixo  e  deixe  seus  arquivos  (solução)no GitHubemsequência de passospara reproduzir e executar o projeto.

O objetivo deste teste é automatizar algumas rotinas em um e-commerce falso (http://automationpractice.com).

Nesse teste pedimos para automatizar 2 fluxos:

1-Adição de todos os produtos Best Sellers no carinho com a exportação dos best sellers (nome, preço, url de detalhes) em formato json em um arquivo.

2-Fazer um checkout desse carrinho, incluindo fazer o cadastro no site até chegar ao passo de Payment.

A linguagem a ser feita a automatização e o framework é de sua escolha, contudo, se possível utilize:

-BDD com alguma das suas implementações.

-Utilize design patterns como o Page Objects.

-Fakers.

------------------------------------------

# Passos para reproduzir

Abra o terminal na pasta do projeto.

Excute: npx cypress open

Vai abrir uma janela própria do cypress, deverá clicar no arquivo "comprar.spec.js" e verá a execução do teste.

Já para ver o teste do JSON, na própria janela do cypress, basta clicar no arquivo "backend.spec.js". Aqui você deverá clicar em F12 e acompanhar o console.

OBS: Não consegui exportar para um arquivo.

# BDD

Tem um arquivo neste repositório com o nome de "CenáriosTeste", lá contará os cenários deste teste.
