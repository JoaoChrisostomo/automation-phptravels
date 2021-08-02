Feature: login

    Scenario: Realizar login com dados validos
        Given dado que esteja na página home
        And clico no botão de login
        When preencho email e senha
        Then sera validado usuário logado com sucesso

    Scenario: Realizar login com usuário invalido
        Given dado que esteja na página home
        And clico no botão de login
        When preencho usuário invalido
        Then sera exibido uma mensagem de usuário invalido

    Scenario: Realizar login com senha invalida
        Given dado que esteja na página home
        And clico no botão de login
        When preencho o campo de usuário menos a senha
        Then será exibido uma mensagem de usuário invalido
