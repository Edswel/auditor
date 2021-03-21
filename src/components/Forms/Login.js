import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
        fireErrors: ''
    }
    render() {
        return (
            <>
                <form>
                    <input type='text'
                        className='registrationField'
                        placeholder='Email'
                        name='email' />
                    <input type='password'
                        className='registrationField'
                        placeholder='Password'
                        name='password' />
                    <input type='submit' className='submitButton' value='SIGN IN' />
                </form>
            </>
        );
    }
}

export default Login;