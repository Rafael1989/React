package br.santander.zurich.seguros.callcenterseguros;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class RestApplication {

	public static void main(String[] args) {
		new SpringApplicationBuilder()
			.sources(RestApplication.class)
			.run(args);
	}
}