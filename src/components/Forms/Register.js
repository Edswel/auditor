import React, { Component } from 'react';
import fire from '../../config/Fire';
import './Login.css';

class Register extends Component {
    state = {
        email: '',
        password: '',
        userName: '',
        fireErrors: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            let currentUser = fire.auth().currentUser;
            currentUser.updateProfile({
                userName: this.state.userName
            })
        }).catch((error) => {
            this.setState({ fireErrors: error.message })
        });
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
                        placeholder='Username'
                        onChange={this.handleChange}
                        value={this.state.userName}
                        name='userName' />
                    <input type='text'
                        className='registrationField'
                        placeholder='Email'
                        onChange={this.handleChange}
                        value={this.state.email}
                        name='email' />
                    <input type='password'
                        className='registrationField'
                        placeholder='Password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        name='password' />
                    <input onClick={this.register} type='submit' className='submitButton' value='REGISTER' />
                </form>
            </>
        );
    }
}

export default Register;