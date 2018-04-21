import React, { Component } from 'react';

class Menu extends Component{
	render(){
		return(
			<aside className="menu">
	            <div title="Santander Seguros" className="santander"/>
	            <div title="Foto de perfil" className="fotoPerfil"/>
	            <p className="usuario">Tiago Moreira</p>
	            <nav>
	                <ul>
	                    <hr/>
	                    <li>
	                        <div className="dashboardImage" title="Dashboard Seguro"/>
	                        <span>Dashboard Seguro</span>
	                    </li>
	                    <hr/>
	                    <li>
	                        <div className="mensagens" title="Mensagens"/>
	                        <span>Mensagens</span>
	                    </li>
	                    <hr/>
	                    <li>
	                        <div className="busca" title="Busca"/>
	                        <span>Busca</span>
	                    </li>
	                    <hr/>
	                    <li>
	                        <div className="notificacoes" title="Notificações"/>
	                        <span>Notificações</span>
	                    </li>
	                </ul>
	            </nav>
	            <p className="horaAtual">14:10H - 22/03/2018</p>
	            <footer>
	                <div className="logout" title="Logout"/>
	                <span>Logout</span>
	            </footer>
	        </aside>
		);
	}
}
export default Menu;