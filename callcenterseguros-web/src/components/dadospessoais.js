import React, { Component } from 'react';
import PubSub from 'pubsub-js'


class Pessoa extends Component{
	
	constructor(props){
		super(props);
		this.state = {dados : {'cpf':''}};
		this.atualizaDados = this.atualizaDados.bind(this);
		this.atualizaComponente = this.atualizaComponente.bind(this);
	}
	
	componentWillMount(){
		PubSub.publish('atualiza-dados-pessoais-component', this.atualizaDados);
		PubSub.publish('cadastra-listeners',this.atualizaComponente);
	}
	
	atualizaDados(info){
		console.info(info);
		this.setState({dados:info})
	}
	atualizaComponente(){

		PubSub.publish('atualiza-dados-pessoais-component', this.atualizaDados);
	}

	render(){
		return(
			<div>
				<h1 className="dadosPessoais">Dados pessoais</h1>
				<hr className="linhaCortada"/>
				<div className="divDadosPessoais">
					<div className="coluna">
						<label>Nome:</label>
						<span className="nomeSpan">{this.state.dados.nome}</span>
					</div>
					<div className="coluna">
						<label>CPF:</label>
						<span className="cpfSpan">{this.state.dados.cpf}</span>
					</div>
				</div>
				<div className="divDadosPessoais">
					<div className="coluna">
						<label>E-mail:</label>
						<span className="emailSpan">{this.state.dados.email}</span>
					</div>
					<div className="coluna">
						<label>Telefone:</label>
						<span className="telefoneSpan">{this.state.dados.telefone}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Pessoa;