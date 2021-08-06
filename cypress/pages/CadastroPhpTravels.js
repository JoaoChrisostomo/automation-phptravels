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
        let dados_cadastro = Factory.dados(valido)
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

    static preencher_cadastro_com_dados_repetidos() {
       
    }

    static preencher_todos_os_campos_menos_email(valido) {
        let dados_cadastro = Factory.dados(valido)
        console.log(dados_cadastro)
        super.typeValue(EL.PRIMEIRO_NOME, dados_cadastro.firstname)
        super.typeValue(EL.SEGUNDO_NOME, dados_cadastro.lastname)
        super.typeValue(EL.NUMERO_TELEFONE, dados_cadastro.phoneNumber)
        super.typeValue(EL.SENHA, dados_cadastro.password)
        super.typeValue(EL.CONFIRMA_SENHA, dados_cadastro.password)
        super.clickOnElement(EL.CONFIRMA_CADASTRO)
    }

    static validando_usuário_já_existente() {
        cy.get(EL.CADASTRO_EXISTENTE).should('contain', ' Email Already Exists.')
    }
    static validando_campo_sem_texto() {
        cy.get(EL.EMAIL).should('have.value','')
        

    }
}
