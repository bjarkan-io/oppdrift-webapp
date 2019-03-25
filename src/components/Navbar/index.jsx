import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/logo-square.png"

const Navbar = props => {
	return (
		<header className='navbar'>
			<div className='main__header'>
				<Link to='/' className='main__header--brand'>
					<img alt='Oppdrift logo' src={logo} />
				</Link>
			</div>
			<nav className='main__nav'>
				<ul className='main__nav--items'>
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

export default Navbar
