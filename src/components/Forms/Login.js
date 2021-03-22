import React, { Component } from 'react';
import fire from '../../config/Fire';
import './Login.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
        fireErrors: ''
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({ fireErrors: error.message })
            })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        let errorMessage = this.state.fireErrors ?
            (<div className='Error'>{this.state.fireErrors}</div>) : null;

        return (
            <>
                {errorMessage}
                <form>
                    <input type='text'
                        className='registrationField'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        name='email' />
                    <input type='password'
                        className='registrationField'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        name='password' />
                    <input onClick={this.login} type='submit' className='submitButton' value='SIGN IN' />
                </form>
            </>
        );
    }
}

export default Login;