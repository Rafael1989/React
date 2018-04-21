package br.santander.zurich.seguros.callcenterseguros.integrador;

import br.santander.zurich.seguros.callcenterseguros.model.Pessoa;

public interface PessoaIntegrador {

	public Pessoa consultarDados(String cpf);
}
