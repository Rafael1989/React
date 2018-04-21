import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import $ from 'jquery';
import CPF from './cpf';

class Breadcrumbs extends Component{
	
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
		if(info.nome === ''){
			$('.nomeCpf').hide();
			$('#componenteCpf').hide();
			$('.buscaCliente').show();
			$('#cpf').attr("placeholder", "000.000.000-00");
		}else{
			$('.nomeCpf').show();
			$('#componenteCpf').show();
			$('.buscaCliente').hide();
			$('#cpf').attr("placeholder", "Buscar cliente pelo cpf");
		}
		this.setState({dados:info})
	}
	
	atualizaComponente(){

		PubSub.publish('atualiza-dados-pessoais-component', this.atualizaDados);
	}

	render(){
		return(
			<div className="breadcrumbs"><span>Dashboard Seguro</span> <div className="setinha">&gt;</div> <div className="nomeCpf">{this.state.dados.nome}({this.state.dados.cpf})</div><div id="componenteCpf" className="inputCpfMinimizado pesquisaMinimizada"><CPF/></div></div>
		);
	}
}

export default Breadcrumbs;