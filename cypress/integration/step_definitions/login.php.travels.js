/// <reference types="cypress" />
import { Given, When, And, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import { PHP } from '../../pages/Login.php.travels'


// PRIMEIRO CENÁRIO POSITIVO - Realizar login com dados validos
Given(`dado que esteja na página home`, () => {
    PHP.acessar_pagina_home()
});


When(`acessar a pagina de login`, () => {
	
    PHP.clicar_botao_de_login()
});


And(`inserir os dados válidos`, () => {
   PHP.login_com_dados_validos('antonellaalanadamota-83@met.org', 'E3EEAPEEO6')

});


Then(`deverá ser exibido usuário logado com sucesso`, () => {
	PHP.entao_sera_exibido_nome_do_usuário_logado()
});


// SEGUNDO CENÁRIO NEGATIVO - Realizar login com usuário invalido
Given(`dado que esteja na página home`, () => {
    PHP.acessar_pagina_home()
});


When(`acessar a pagina de login`, () => {
    PHP.clicar_botao_de_login()

});


And(`inserir dados invalido`, () => {
    PHP.login_com_dados_invalidos('antonellaalana@met.org', 'E3EEEEO6')
    
});


Then(`deverá ser exibido uma mensagem usuário e senha invalida`, () => {
	PHP.sera_exibido_senha_e_usuário_invalido()
});


Given(`dado que esteja na página home`, () => {
    PHP.acessar_pagina_home()
});

When(`clico no botão de login`, () => {
    PHP.clicar_botao_de_login()

});

And(`preencho o campo de usuário menos a senha`, () => {
    PHP.login_com_senha_invalida('antonellaalanadamota-83@met.org', 'kodsip')

});

Then(`será exibido uma mensagem de usuário invalido`, () => {

});
