import { Factory } from '../fixtures/factory'
import Base from './base.page'
import { ELEMENTS as EL } from './components/Elementos'

export class Travels extends Base {


    static acessar_pagina_home() {
        cy.visit('/')
    }
    static clicar_em_primeira_imagem() {
        cy.get(EL.CLICAR_PRIMEIRA_IMAGEM).click()

    }

    static clicar_em_agendar() {
        cy.get(EL.BTN_AGENDAR_AGORA).click()


    }
    static preencher_os_campos_como_convidado(type) {
        let dados_cadastro = Factory.cadastro(type)
        cy.get(EL.CAMPO_PRIMEIRO_NOME, dados_cadastro.firstname)
        cy.get(EL.CAMPO_SEGUNDO_NOME, dados_cadastro.lastname)
        cy.get(EL.CAMPO_EMAIL, dados_cadastro.email)
        cy.get(EL.CONFIRMA_EMAIL, dados_cadastro.email)
        cy.get(EL.NUMERO_CONTATO, dados_cadastro.phoneNumber)
        cy.get(EL.ENDERECO, dados)

    }
    static clicar_em_confirma_reserva() {
        cy.get(EL.BTN_CONFIRMA_RESERVA).click()
        cy.wait(3000)
    }

    static realizar_pagamento_na_chegada() {
        cy.get(EL.BTN_PAGAR_NA_CHEGADA).click()


    }
    static reserva_efetuada_com_sucesso() {
        cy.get(EL.VALIDANDO_A_RESERVA).should('contain.text', 'Your booking status is Reserved')

    }
    static clicar_segunda_imagem() {
        cy.get(EL.CLICAR_SEGUNDA_IMAGEM).click()

    }
    static clicar_na_opção_entrar() {
        cy.contains('Book Now').click()

    }
    static realizando_uma_reserva_estando_logado(email) {
        cy.wait(3000)
        cy.get(EL.CLICAR_BTN_ENTRAR).type(email)

    }
    static preencher_os_campos_como_convidado_menos_o_email(nome, sobrenome, numerocontato, endereco) {
        cy.get(EL.CAMPO_PRIMEIRO_NOME).type(nome)
        cy.get(EL.CAMPO_SEGUNDO_NOME).type(sobrenome)
        cy.get(EL.NUMERO_CONTATO).type(numerocontato)
        cy.get(EL.ENDERECO).type(endereco)
    }
    static email_nao_inserido(){
        cy.get(EL.EMAIL_NAO_INSERIDO).should('contain.text', 'Email is required')
    }
}