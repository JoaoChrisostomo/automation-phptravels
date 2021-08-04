/// <reference types="cypress" />
import { Given, When, And, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import { Travels } from '../../pages/Login.php.travels'


// PRIMEIRO CENÁRIO POSITIVO - Realizar login com dados validos
Given(`dado que esteja na página home`, () => {
    Travels.acessar_pagina_home()
});

And(`clico no botão de login`, () => {
    Travels.clicar_botao_de_login()
});

When(`preencho email e senha`, () => {
    Travels.login_com_dados_validos('antonellaalanadamota-83@me.org', 'E3EEAPEEO6')

});

Then(`sera validado usuário logado com sucesso`, () => {

});

// SEGUNDO CENÁRIO NEGATIVO - Realizar login com usuário invalido
Given(`dado que esteja na página home`, () => {
    Travels.acessar_pagina_home()
});

And(`clico no botão de login`, () => {
    Travels.clicar_botao_de_login()

});

When(`preencho usuário invalido`, () => {
    Travels.login_com_email_invalido('antonellaalana-83@met.org', 'E3EEAPEEO6')
    
});

Then(`sera exibido uma mensagem de usuário invalido`, () => {

});

// TERCEIRO CENÁRIO NEGATIVO - Realizar login com senha invalida
Given(`dado que esteja na página home`, () => {
    Travels.acessar_pagina_home()
});

And(`clico no botão de login`, () => {
    Travels.clicar_botao_de_login()

});

When(`preencho o campo de usuário menos a senha`, () => {
    Travels.login_com_senha_invalida('antonellaalanadamota-83@met.org', 'kodsip')

});

Then(`será exibido uma mensagem de usuário invalido`, () => {

});
