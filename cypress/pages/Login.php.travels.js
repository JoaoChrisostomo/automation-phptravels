import Base from './base.page'
import { ELEMENTS as EL} from './components/Elementos'

export class Travels extends Base {

    static acessar_pagina_home() {
        cy.visit('/')
    }

  static clicar_botao_de_login(){
    cy.get(EL.BTN_MINHACONTA).click()
    cy.get(EL.BTN_LOGIN).click()
  }
  static login_com_dados_validos(email, senha){
      cy.get(EL.EMAIL_LOGIN).type(email)
      cy.get(EL.SENHA_LOGIN).type(senha)
      cy.get(EL.EFETUAR_LOGIN).click()
      cy.get(EL.SALVAR_SENHA).click()

    
  }
  static login_com_email_invalido(email, senha){
      cy.get(EL.EMAIL_LOGIN).type(email)
      cy.get(EL.SENHA_LOGIN).type(senha)
      cy.get(EL.EFETUAR_LOGIN).click()
      cy.get(EL.SALVAR_SENHA).click()
  }
  static login_com_senha_invalida(email, senha){
    cy.get(EL.EMAIL_LOGIN).type(email)
    cy.get(EL.SENHA_LOGIN).type(senha)
    cy.get(EL.EFETUAR_LOGIN).click()
    cy.get(EL.SALVAR_SENHA).click()
    cy.get(EL.SENHA_INVALIDA).should('contain', 'Invalid Email or Password')

  }
}