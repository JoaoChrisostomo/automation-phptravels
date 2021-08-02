/// <reference types="cypress" />
import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import { Travels } from '../../pages/CadastroPhpTravels'


//PRIMEIRO CENÁRIO POSITIVO - Realizar cadastro com sucesso
Given(`dado que esteja na página home`, () => {
    Travels.acessar_pagina_home()
});

And(`clico na aba minha conta`, () => {
    Travels.clicar_em_minha_conta()
});
// Para o teste passar é necessario trocar o e-mail
When(`preencher todos os campos de cadastro`, () => {
    Travels.preencher_todos_os_campos('geting',
        'felix',
        '11 985674965',
        'antonellaalanadamota-83@met.org',
        'E3EEAPEEO6',
        'E3EEAPEEO6')
});

Then(`será exibido uma mensagem de boas vindas`, () => {
    Travels.validando_cadastro_com_sucesso()

});

//SEGUNDO CENÁRIO NEGATIVO - Realizar cadastro com dados repetidos

Given(`dado que esteja na página home`, () => {
    Travels.acessar_pagina_home()
});

And(`clico na aba minha conta`, () => {
    Travels.clicar_em_minha_conta()
});

When(`preencher todos os campos de cadastro`, () => {
    Travels.preencher_todos_os_campos('geting',
        'felix',
        '11 985674965',
        'antonellaalanadamota-83@meto.org',
        'E3EEAPEEO6',
        'E3EEAPEEO6')

});

Then(`será exibido uma mensagem de usuário existente`, () => {
    Travels.validando_usuário_já_existente()

});

//TERCEIRO CENÁRIO NEGATIVO - Realizar cadastro faltando preencher um dado obrigatório

Given(`dado que esteja na página home`, () => {
    Travels.acessar_pagina_home()

});

And(`clico na aba minha conta`, () => {
    Travels.clicar_em_minha_conta()

});


When(`preencher todos os campos de cadastro menos email`, () => {
    Travels.preencher_todos_os_campos_menos_email('geting',
        'felix',
        '11 985674965',
        'E3EEAPEEO6',
        'E3EEAPEEO6')

});


Then(`continuarei logado na pagina de cadastro`, () => {
	Travels.validando_a_url_logada()
});


