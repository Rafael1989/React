package br.santander.zurich.seguros.callcenterseguros.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.santander.zurich.seguros.callcenterseguros.integrador.PessoaIntegrador;
import br.santander.zurich.seguros.callcenterseguros.model.Pessoa;

@RestController
@RequestMapping("{cpf}/dados")
public class PessoaController {

	/**
	 * @todo CrossOrigin apenas para dev!
	 * @param cpf
	 * @return 
	 */
	
	@Autowired
	PessoaIntegrador pssoaIntegrador;
	
	@RequestMapping(method = RequestMethod.GET)
	@CrossOrigin(origins = "http://localhost:3000")
	Pessoa getPessoa(@PathVariable String cpf){
		
		Pessoa p = new Pessoa();
		p.setCpf(cpf);
		p.setNome("José");
		p.setEmail("jose@gmail.com");
		p.setTelefone("11 987854625");
		return p;
	}
}
