/// <reference types="cypress"/>

//const { should } = require("chai");

//Mocha --> Test Runner

// describe, context, it
//Usado para usar dados mockados
var Chance = require('chance')
var chance = new Chance()

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app/')

        //Inputs de texto / textarea / email --> type
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())
       // cy.get('input[name=emailAdress]').type('teste@teste.com')

        // Inputs radio / checkboxes --> check
        cy.get('input[value=n]').check()
        cy.get('input[type=checkbox').check('Netflix')
        cy.get('input[type=checkbox').check('Dormir')
       
        //Inputs do tipo bombox / select --> select
        // Não é recomendado usuar o force true
        cy.get('select#countries').select('Dinamarca', {force: true })
        cy.get('select#years').select('2006', {force: true })
        cy.get('select#months').select('Fevereiro', {force: true })
        cy.get('select#days').select('15', {force: true })

        //Inputs de senha --> type
        cy.get('input#firstpassword').type('Alun@2021')
        cy.get('input#secondpassword').type('Alun@2021')
        
        //Inputs do tipo button --> click
        cy.contains('Finalizar cadastro').click()

       //espero que a minha aplicação seja direcionada para a listagem
       // na aplicação através da url
       // Sabendo a url, ela deve estar / conter listagem
       // should contain listagem
       cy.url().should('contain', 'listagem')

       //deveria executar uma requisição para o servidor xpto (exemplo)
    });
});
