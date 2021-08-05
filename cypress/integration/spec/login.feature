Feature: login

    @CT01
    Scenario: Realizar login com dados validos
        Given dado que esteja na página home
        When acessar a pagina de login
        And inserir os dados válidos
        Then deverá ser exibido usuário logado com sucesso

    Scenario: Realizar login com usuário invalido
        Given dado que esteja na página home
        When acessar a pagina de login
        And inserir dados invalido
        Then deverá ser exibido uma mensagem usuário e senha invalida

    @example
    Scenario: Realizar login com senha invalida
        Given dado que esteja na página home
        When acessar a pagina de login
        And preencher apenas o campo de usuário menos a senha
        Then será exibido uma mensagem de usuário invalido
