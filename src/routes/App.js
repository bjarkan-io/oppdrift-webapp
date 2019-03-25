import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from '../components/Navbar';

// Views
import HomeView from '../views/HomeView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Navbar />
					<Switch>
						<Route exact path="/" component={HomeView} />
						<Route path="/registrer" component={RegisterView} />
						<Route path="/logginn" component={LoginView} />
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
