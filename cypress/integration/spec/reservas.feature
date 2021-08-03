Feature: reservas

    Scenario: Realizar uma reserva e pagar apenas na chegada
        Given dado que esteja na página home
        And clico na primeira opção em destaque
        And clico em alterar data
        And clico em agendar agora
        And preencho todos os campos de reserva como convidado
        And clico em confirma esta reserva
        When selecionar a opção de pagar na chegada
        Then será exibido uma mensagem da reserva efetuado com sucesso

  # Scenario: Realizar uma reserva logado
   #     Given dado que esteja na página home
    #    And clico na segunda opção em destaque
     #   And clico em alterar data
      #  And clico em agendar agora
       # And seleciono a opção entrar
        #And preencho os campos email e senha
        #And preencher as informações do meu convidado
        #When clico em confirma esta reserva
        #Then será exibido uma mensagem de reserva confirmada

    #Scenario: Realizar cadastro faltando preencher um dado obrigatório
     #   Given dado que esteja na página home
      #  And clico na primeira opção de passeio em destaque
       # When preencher todos os campos de cadastro menos email
        #Then continuarei logado na pagina de cadastro
