/// <reference types="cypress" />
import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import { Travels } from '../../pages/CadastroPhpTravels'


//PRIMEIRO CENÁRIO POSITIVO - Realizar cadastro com sucesso
Given(`dado que esteja na página home`, () => {
    Travels.acessar_pagina_home()
});

And(`seleciono a aba minha conta`, () => {
    Travels.clicar_em_minha_conta()
});
// Para o teste passar é necessario trocar o e-mail
When(`preencher todos os campos de cadastro`, () => {
    Travels.preencher_todos_os_campos()
});


Then(`devera ser exibido o nome do usuário no campo de login de login`, () => {
	Travels.validando_nome_usuário()
});

    

//SEGUNDO CENÁRIO NEGATIVO - Realizar cadastro com dados repetidos

Given(`dado que esteja na página home`, () => {
    Travels.acessar_pagina_home()
});

And(`seleciono a aba minha conta`, () => {
    Travels.clicar_em_minha_conta()
});

When(`preencher todos os campos de cadastro`, () => {
    Travels.preencher_todos_os_campos()

});

Then(`será exibido uma mensagem de usuário existente`, () => {
    Travels.validando_usuário_já_existente()

});

//TERCEIRO CENÁRIO NEGATIVO - Realizar cadastro faltando preencher um dado obrigatório

Given(`dado que esteja na página home`, () => {
    Travels.acessar_pagina_home()

});

And(`seleciono a aba minha conta`, () => {
    Travels.clicar_em_minha_conta()

});


When(`preencher todos os campos de cadastro menos email`, () => {
    Travels.preencher_todos_os_campos_menos_email('geting',
        'felix',
        '11 985674965',
        'E3EEAPEEO6',
        'E3EEAPEEO6')

});


Then(`a mensagem de erro deverá ser exibida`, () => {
	Travels.validando_a_url_logada()
});


