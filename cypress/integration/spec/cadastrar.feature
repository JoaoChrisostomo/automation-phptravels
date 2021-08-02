Feature: cadastrar usuário

    Scenario: Realizar cadastro com sucesso
        Given dado que esteja na página home
        And clico na aba minha conta
        When preencher todos os campos de cadastro
        Then será exibido uma mensagem de boas vindas

    Scenario: Realizar cadastro com dados repetidos
        Given dado que esteja na página home
        And clico na aba minha conta
        When preencher todos os campos de cadastro
        Then será exibido uma mensagem de usuário existente

    Scenario: Realizar cadastro faltando preencher um dado obrigatório
        Given dado que esteja na página home
        And clico na aba minha conta
        When preencher todos os campos de cadastro menos email
        Then continuarei logado na pagina de cadastro


