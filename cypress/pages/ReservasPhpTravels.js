import Base from './base.page'
import { ELEMENTS as EL } from './components/Elementos'

export class Travels extends Base {


    static acessar_pagina_home() {
        cy.visit('/')
    }
    static clicar_em_primeira_imagem() {
        cy.get(EL.CLICAR_PRIMEIRA_IMAGEM).click()
    }
    static clicar_em_alterar_data() {
        cy.get(EL.BTN_ALTERAR_DATA).click()
    }
    static clicar_em_agendar() {
        cy.get(EL.BTN_AGENDAR_AGORA).click()

    }
    static preencher_os_campos_como_convidado(nome, sobrenome, email, confirmaemail, numerocontato, endereco) {
        cy.get(EL.CAMPO_PRIMEIRO_NOME).type(nome)
        cy.get(EL.CAMPO_SEGUNDO_NOME).type(sobrenome)
        cy.get(EL.CAMPO_EMAIL).type(email)
        cy.get(EL.CONFIRMA_EMAIL).type(confirmaemail)
        cy.get(EL.NUMERO_CONTATO).type(numerocontato)
        cy.get(EL.ENDERECO).type(endereco)

    }
    static clico_em_confirma_reserva() {
        cy.get(EL.BTN_CONFIRMA_RESERVA).click()
        cy.wait(8000)
    }
    static realizar_pagamento_na_chegada() {
        cy.get(EL.BTN_PAGAR_NA_CHEGADA).click()


    }
    static reserva_efetuada_com_sucesso() {
        cy.get(EL.VALIDANDO_A_RESERVA).should('contain.text', 'Your booking status is Reserved')

    }
}