import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PubSub from 'pubsub-js'
import Validations from './../utils/Validations';
import $ from 'jquery';
import config from './../utils/Config';
import './../js/jquery.growl.js';
import './../css/jquery.growl.css';

console.info(process.env.NODE_ENV);

const baseurl = config[process.env.NODE_ENV].baseurl;

class Cpf extends Component{

    constructor(props, context) {
        super(props, context);

        this.state = {
            cpf: '',
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    handleKeyPress = (event) => {
    	let tmp = String.fromCharCode(event.charCode).replace(/\D/g,"");
    	if(event.charCode === 13){
    		return true;
    	}
    	if(tmp === ''){
    		event.preventDefault();
    	}
    	return true;
	}
    
    componentDidMount(){
  	  $('[id="cpf"]').focus();
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: target.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4")});
    }
    
    handleSubmit(event){
        event.preventDefault();
        let validation = new Validations();
        let _this = this;
        if(validation.valid('cpf',this.state.cpf)){

            
            $.ajax({
                url:baseurl+this.state.cpf+'/dados',
                dataType:'json',
                type:'get',
                success: function(resposta){
                    console.log('rápido');
                    PubSub.publish('atualiza-dados-pessoais', resposta);
                    let state = _this.state;
                    
                    
                    state.redirect = !window.location.pathname.includes("pessoa");
                    state.cpf = '';
                    _this.setState(state);
                   

                },
                error: function(resposta){
                	$.growl.error({ message: "Serviço indisponível" });
                }
            });
        }else{
        	$.growl.error({ message: "Por Favor, digite um CPF válido" });
        }
    }
    
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/pessoa" />;
        }
        return(
            <form onSubmit={this.handleSubmit}>
            	<div className="logo" title="Santander Super Protegido"/>
    	        <p className="buscaCliente">Buscar cliente pelo CPF</p>
                <input type="text" id="cpf" onKeyPress={this.handleKeyPress} value={this.state.cpf} maxLength="14" onChange={this.handleChange} name="cpf" placeholder="000.000.000-00" className="inputCpf"/>
                <button onClick={this.handleSubmit}><div className="pesquisa" title="Digite o seu cpf"/></button>
            </form>
        );
    }
}
export default Cpf;