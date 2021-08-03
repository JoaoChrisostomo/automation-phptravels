/// <reference types="cypress" />
import { Given, When, And, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import { Travels } from '../../pages/ReservasPhpTravels'


Given(`dado que esteja na página home`, () => {
    Travels.acessar_pagina_home()
});

And(`clico na primeira opção em destaque`, () => {
    Travels.clicar_em_primeira_imagem()

});

Then(`clico em alterar data`, () => {
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
    Travels.clico_em_confirma_reserva()

});

When(`selecionar a opção de pagar na chegada`, () => {
    Travels.realizar_pagamento_na_chegada()
});




Then(`será exibido uma mensagem da reserva efetuado com sucesso`, () => {
    Travels.reserva_efetuada_com_sucesso()

});
