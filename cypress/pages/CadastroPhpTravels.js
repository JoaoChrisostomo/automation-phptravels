import Base from './base.page'
import { ELEMENTS as EL } from './components/Elementos'
import { Factory } from '../fixtures/factory'

export class Travels extends Base {

    static acessar_pagina_home() {
        cy.visit('/')
    }

    static clicar_em_minha_conta() {
        cy.get(EL.BTN_MINHACONTA).click()
        super.clickOnElement(EL.BTN_CRIAR_CONTA)
    }

    static preencher_todos_os_campos(valido) {
        let dados_cadastro = Factory.cadastro(valido)
        console.log(dados_cadastro)
        super.typeValue(EL.PRIMEIRO_NOME, dados_cadastro.firstname)
        super.typeValue(EL.SEGUNDO_NOME, dados_cadastro.lastname)
        super.typeValue(EL.NUMERO_TELEFONE, dados_cadastro.phoneNumber)
        super.typeValue(EL.EMAIL, dados_cadastro.email)
        super.typeValue(EL.SENHA, dados_cadastro.password)
        super.typeValue(EL.CONFIRMA_SENHA, dados_cadastro.password)
        super.clickOnElement(EL.CONFIRMA_CADASTRO)
    }
    static validando_nome_usuário() {
        cy.wait(1000)
        cy.get(EL.CADASTRO_COM_SUCESSO).should('not.be.empty')

       
    }

    static preencher_todos_os_campos_menos_email(nome, sobrenome, telefone, senha, confirmasenha) {
        super.typeValue(EL.PRIMEIRO_NOME, nome)
        cy.get(EL.SEGUNDO_NOME).type(sobrenome)
        cy.get(EL.NUMERO_TELEFONE).type(telefone)
        cy.get(EL.SENHA).type(senha)
        cy.get(EL.CONFIRMA_SENHA).type(confirmasenha)
        cy.get(EL.CONFIRMA_CADASTRO).click()


    }
    static validando_usuário_já_existente() {
        cy.get(EL.CADASTRO_EXISTENTE).should('contain', ' Email Already Exists.')
    }
    static validando_a_url_logada() {
        cy.url().should('eq', 'https://www.phptravels.net/register')

    }
}
