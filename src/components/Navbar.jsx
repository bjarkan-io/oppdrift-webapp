import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-square.png';

class Navbar extends Component {
	render() {
		return (
			<header>
				<img alt="Oppdrift logo" src={logo} />
				<span className="brand">Oppdrift</span>
				<nav>
					<ul>
						<li>
							<Link to="/" className="link">
								Hjem
							</Link>
						</li>
						<li>
							<Link to="/starthub" className="link">
								StartHub
							</Link>
						</li>
						<li>
							<Link to="/om" className="link">
								Lær mer
							</Link>
						</li>
						<li>
							<Link to="/registrer" className="link">
								Registrer
							</Link>
						</li>
						<li>
							<Link to="/logginn" className="link float-right">
								Logg inn
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Navbar;
