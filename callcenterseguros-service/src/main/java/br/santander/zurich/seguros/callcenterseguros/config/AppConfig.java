package br.santander.zurich.seguros.callcenterseguros.config;

import org.mockito.Mockito;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import br.santander.zurich.seguros.callcenterseguros.integrador.PessoaIntegrador;
@Configuration 
@ComponentScan("br.santander.zurich.seguros.callcenterseguros") 
@EnableWebMvc   
public class AppConfig { 

	@Bean
	@Primary
	public PessoaIntegrador nameService() {
		return Mockito.mock(PessoaIntegrador.class);
	}
} 
