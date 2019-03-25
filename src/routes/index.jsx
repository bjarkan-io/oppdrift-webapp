import React, { Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Components
import Navbar from "../components/Navbar"

// Views
import Home from "../views/Home"
import StartHub from "../views/StartHub/index"

function Routes() {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/starthub' component={StartHub} />
				</Switch>
			</Fragment>
		</Router>
	)
}

export default Routes
