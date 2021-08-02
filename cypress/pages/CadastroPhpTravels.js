import Base from './base.page'
import { ELEMENTS as EL} from './components/Elementos'

export class Travels extends Base {

    static acessar_pagina_home() {
        cy.visit('/')
    }

    static clicar_em_minha_conta() {
        cy.get(EL.BTN_MINHACONTA).click()
        super.clickOnElement(EL.BTN_CRIAR_CONTA)
    }

static preencher_todos_os_campos(nome, sobrenome, telefone, email, senha, confirmasenha) {
    super.typeValue(EL.PRIMEIRO_NOME,nome)
    cy.get(EL.SEGUNDO_NOME).type(sobrenome) 
    cy.get(EL.NUMERO_TELEFONE).type(telefone)
    cy.get(EL.EMAIL).type(email)
    cy.get(EL.SENHA).type(senha)
    cy.get(EL.CONFIRMA_SENHA).type(confirmasenha)
    cy.get(EL.CONFIRMA_CADASTRO).click()
}

static preencher_todos_os_campos_menos_email(nome, sobrenome, telefone, senha, confirmasenha) {
    super.typeValue(EL.PRIMEIRO_NOME,nome)
    cy.get(EL.SEGUNDO_NOME).type(sobrenome) 
    cy.get(EL.NUMERO_TELEFONE).type(telefone)
    cy.get(EL.SENHA).type(senha)
    cy.get(EL.CONFIRMA_SENHA).type(confirmasenha)
    cy.get(EL.CONFIRMA_CADASTRO).click()    

}
static validando_cadastro_com_sucesso(){
    cy.get(EL.CADASTRO_COM_SUCESSO).should('contain', 'Hi, geting felix')
}
static validando_usuário_já_existente(){
    cy.get(EL.CADASTRO_EXISTENTE).should('contain', ' Email Already Exists.')
}
static validando_a_url_logada(){
cy.url().should('eq', 'https://www.phptravels.net/register')

}
}
