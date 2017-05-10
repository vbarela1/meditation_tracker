import React from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';

class Login extends React.Component {

    handleSubmit = (e) => {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    this.props.dispatch(handleLogin(email, password));
	}

	render() {
		return(
			<div>
			  <h3>Login</h3>
			  <form onSubmit={this.handleSubmit}>
			    <input type='text' ref='email' required placeholder='Email' />
			    <input type='password' ref='password' required placeholder='Password' />
			    <input type='submit' className='btn' value='Login' />
			  </form>
			</div>
		)
  }
}

export default connect()(Login);
