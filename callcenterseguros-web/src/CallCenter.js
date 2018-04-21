import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import PubSub from 'pubsub-js'
import 'npm-font-open-sans';
import CPF from './components/cpf';
import MENU from './components/menu';
import Pessoa from './components/dadospessoais';
import BREADCRUMBS from './components/breadcrumbs';
import './css/reset.css';
import './css/callcenter.css';



class CallCenter extends Component {
  constructor(){
    super();
    this.state = {dados:{'nome':''},listeners:[]};
  }
  componentWillMount(){
		
    PubSub.subscribe('atualiza-dados-pessoais', function(topico,dadosPessoais) {

      let listeners = this.state.listeners;
      this.setState({dados:dadosPessoais});
      listeners.forEach(funcao => {
        funcao();
      });
    }.bind(this));
    PubSub.subscribe('atualiza-dados-pessoais-component', function(topico,funcao) {
      funcao(this.state.dados);
    }.bind(this));
    PubSub.subscribe('cadastra-listeners',function(topico,funcao){

      let state = this.state;
      if(state.listeners.includes(funcao)){

        return;
      }
      state.listeners.push(funcao);
      this.setState(state);
    }.bind(this))
	}
 
  render() {
    return (
    	
      <Router>
        <div>
        <main className="container">
        <BREADCRUMBS/>
          <Route exact path="/" component={CPF} />
          <Route path="/pessoa" component={Pessoa}/>
          </main>
          <MENU/>
        </div>
      </Router>
    );
  }
}

export default CallCenter;
