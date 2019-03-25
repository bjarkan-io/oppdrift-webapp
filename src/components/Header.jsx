import React, { Component } from 'react';
import logo from '../assets/logo-square.png';

class Header extends Component {
	render() {
		return (
			<section className="header">
				<div className="header-brand">
					<img src={logo} width="100px" alt="Oppdrift logo" />
					<h1>Velkommen til Oppdrift</h1>
				</div>
			</section>
		);
	}
}

export default Header;
