import Base from './base.page'
import { ELEMENTS as EL } from './components/Elementos'
import { Factory } from '../fixtures/factory'

export class PHP extends Base {

  // Para validar o usuário com login será necessaria realizar sempre o cadastro antes
  static acessar_pagina_home() {
    cy.visit('/')
  }

  static clicar_botao_de_login() {
    cy.get(EL.BTN_MINHACONTA).click()
    cy.get(EL.BTN_LOGIN).click()
  }
  static login_com_dados_validos(email, senha) {
    cy.get(EL.EMAIL_LOGIN).type(email)
    cy.get(EL.SENHA_LOGIN).type(senha)
    cy.get(EL.EFETUAR_LOGIN).click()
    cy.get(EL.SALVAR_SENHA).click()
    cy.wait(2000)

  }

  static entao_sera_exibido_nome_do_usuário_logado() {
    cy.get(EL.VALIDANDO_NOME_USUARIO).should('contain', 'Hi, geting felix')
  }


  static login_com_dados_invalidos(email, senha) {
    cy.get(EL.EMAIL_LOGIN).type(email)
    cy.get(EL.SENHA_LOGIN).type(senha)
    cy.get(EL.EFETUAR_LOGIN).click()
    cy.get(EL.SALVAR_SENHA).click()
  }

  static sera_exibido_senha_e_usuário_invalido() {
    cy.get(EL.DADOS_INVALIDOS).should('contain', 'Invalid Email or Password')
  }


  static login_com_senha_invalida(email, senha) {
    cy.get(EL.EMAIL_LOGIN).type(email)
    cy.get(EL.SENHA_LOGIN).type(senha)
    cy.get(EL.EFETUAR_LOGIN).click()
    cy.get(EL.SALVAR_SENHA).click()
    cy.get(EL.SENHA_INVALIDA).should('contain', 'Invalid Email or Password')

  }
}
