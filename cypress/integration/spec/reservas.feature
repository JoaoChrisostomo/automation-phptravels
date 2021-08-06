Feature: reservas

    Scenario: Realizar uma reserva como convidaddo e pagar apenas na chegada
        Given dado que esteja na página home
        And clico na primeira opção em destaque
        And clico em alterar data
        And clico em agendar agora
        And preencho todos os campos de reserva como convidado
        And clico em confirma esta reserva
        When selecionar a opção de pagar na chegada
        Then será exibido uma mensagem da reserva efetuado com sucesso

    Scenario: Realizar uma reserva logado
        Given dado que esteja na página home
        And clico na segunda opção em destaque
        And clico em agendar agora
        And clico na opção entrar
        And preencho os campos email e senha
        When clico em confirma esta reserva
        Then será exibido uma mensagem de reserva confirmada

    Scenario: Realizar cadastro faltando preencher um dado obrigatório
        Given dado que esteja na página home
        And clico na primeira opção em destaque
        And clico na opção entrar
        And preencher todos os campos de cadastro menos o email
        When clico em confirma reserva
        Then então será exibido uma mensagem que o email não foi inserido
