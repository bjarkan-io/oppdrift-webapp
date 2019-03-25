import React, { Component } from 'react';

class RegisterView extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSumbit = event => {
		event.preventDefault();
	};

	render() {
		const { email, password } = this.state;

		return (
			<section>
				<div className="empty-10vh" />
				<div className="login-wrapper">
					<div className="login-form">
						<h2>Registrer deg</h2>
						<form onSubmit={this.handleSumbit}>
							<label for="email">Epost</label>
							<br />
							<input
								type="email"
								placeholder="Epost"
								name="email"
								onChange={this.handleChange}
								value={email}
							/>
							<br />
							<label for="password">Passord</label>
							<br />
							<input
								type="password"
								placeholder="Passord"
								name="password"
								onChange={this.handleChange}
								value={password}
							/>
							<br />
							<button className="btn btn-login">Logg inn</button>
						</form>
					</div>
				</div>
			</section>
		);
	}
}

export default RegisterView;
