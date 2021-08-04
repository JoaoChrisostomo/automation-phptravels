Feature: cadastrar usuário

    Background: Acesso a página home
        Given dado que esteja na página home

    Scenario: Realizar cadastro com sucesso
        And seleciono a aba minha conta
        When preencher todos os campos de cadastro
        Then devera ser exibido o nome do usuário no campo de login de login

    Scenario: Realizar cadastro com dados repetidos
        And seleciono a aba minha conta
        When preencher todos os campos de cadastro
        Then será exibido uma mensagem de usuário existente



    Scenario: Realizar cadastro faltando preencher um campo obrigatório
        And seleciono a aba minha conta
        When preencher todos os campos de cadastro menos email
        Then a mensagem de erro deverá ser exibida

