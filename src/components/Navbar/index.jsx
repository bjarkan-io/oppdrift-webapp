import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/logo-square.png"

class Navbar extends Component {
	render() {
		return (
			<header className='main__header'>
				<div>
					<Link className='main__header--brand'>
						<img alt='Oppdrift logo' src={logo} />
						<h4 className='main__header--title'>Oppdrift</h4>
					</Link>
				</div>
				<nav className='main__nav'>
					<ul className='main__nav--items'>
						<li className='main__nav--item'>
							<Link to='/' className='main__nav--link'>
								Hjem
							</Link>
						</li>
						<li className='main__nav--item'>
							<Link to='/starthub' className='main__nav--link'>
								StartHub
							</Link>
						</li>
						<li className='main__nav--item'>
							<Link to='/om' className='main__nav--link'>
								Lær mer
							</Link>
						</li>
						<li className='main__nav--item'>
							<Link to='/registrer' className='main__nav--link'>
								Registrer
							</Link>
						</li>
						<li className='main__nav--item'>
							<Link to='/logginn' className='main__nav--link'>
								Logg inn
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default Navbar
