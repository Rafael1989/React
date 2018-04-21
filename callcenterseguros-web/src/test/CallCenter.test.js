import React from 'react';
import ReactDOM from 'react-dom';
import CallCenter from './../CallCenter';
import Validation from './../utils/Validations';
import config from './../utils/Config';
import CPF from './../components/cpf'

describe('Suit do componente utils/Config.', () => {
    it('Verifica a url de desenvolvimento', () =>{
        expect('http://localhost:8080/').toEqual(config['development'].baseurl);
    });
    it('Verifica a url de produção', () =>{
        expect('/callcenterseguros-service/').toEqual(config['production'].baseurl);
    });

})
describe('Suit do componente components/Validation.', () => {
    let valida = new Validation();

    it('Testa função que verifica o CPF', () =>{
        expect(true).toEqual(valida.valid('cpf','313.409.888-10'));
    });
    it('Testa função que verifica o CPF return false', () =>{
        expect(true).not.toEqual(valida.valid('cpf','313.409.888-11'))
    });
});
