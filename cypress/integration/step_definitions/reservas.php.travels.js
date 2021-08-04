/// <reference types="cypress" />
import { Given, When, And, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import { Travels } from '../../pages/ReservasPhpTravels'

// PRIMEIRO CENÁRIO POSITIVO - Realizar uma reserva como convidaddo e pagar apenas na chegada
Given(`dado que esteja na página home`, () => {
    Travels.acessar_pagina_home()
});

And(`clico na primeira opção em destaque`, () => {
    Travels.clicar_em_primeira_imagem()

});


And(`clico em alterar data`, () => {

    Travels.clicar_em_alterar_data()

});

And(`clico em agendar agora`, () => {
    Travels.clicar_em_agendar()

});


And(`preencho todos os campos de reserva como convidado`, () => {
    Travels.preencher_os_campos_como_convidado('Manuel Francisco',
        'Melo',
        'manuelfranciscomelo_@signa.net.br',
        'manuelfranciscomelo_@signa.net.br',
        '(81) 2962-3158',
        'Rua João Renato Pereira Guedes')
});

And(`clico em confirma esta reserva`, () => {
    Travels.clicar_em_confirma_reserva()

});

When(`selecionar a opção de pagar na chegada`, () => {
    Travels.realizar_pagamento_na_chegada()
});


Then(`será exibido uma mensagem da reserva efetuado com sucesso`, () => {
    Travels.reserva_efetuada_com_sucesso()

});


Given(`dado que esteja na página home`, () => {
    Travels.acessar_pagina_home()
});

And(`clico na segunda opção em destaque`, () => {
    Travels.clicar_segunda_imagem()

});

And(`clico em agendar agora`, () => {
    Travels.clicar_em_agendar()

});


And(`clico na opção entrar`, () => {
    Travels.clicar_na_opção_entrar()

});

And(`preencho os campos email e senha`, () => {
    Travels.realizando_uma_reserva_estando_logado(
        'antonellaalanadamota-83@meto.org',
        'E3EEAPEEO6')

});

When(`clico em confirma esta reserva`, () => {
    
});

Then(`será exibido uma mensagem de reserva confirmada`, () => {

});


Given(`dado que esteja na página home`, () => {
	Travels.acessar_pagina_home()
});

And(`clico na primeira opção em destaque`, () => {
    Travels.clicar_em_primeira_imagem()
});

And(`clico na opção entrar`, () => {
	Travels.clicar_na_opção_entrar()
});

And(`preencher todos os campos de cadastro menos o email`, () => {
    Travels.preencher_os_campos_como_convidado_menos_o_email('Manuel Francisco',
        'Melo',
        '(81) 2962-3158',
        'Rua João Renato Pereira Guedes')
});

When(`clico em confirma reserva`, () => {
    Travels.clicar_em_confirma_reserva()
	
});

Then(`então será exibido uma mensagem que o email não foi inserido`, () => {
    Travels.email_nao_inserido()

	
});

