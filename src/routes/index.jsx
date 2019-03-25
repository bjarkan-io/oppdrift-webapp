import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Components
import Navbar from "../components/Navbar"

// Views
import Home from "../views/Home"

function Routes() {
	return (
		<Router>
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</React.Fragment>
		</Router>
	)
}

export default Routes
