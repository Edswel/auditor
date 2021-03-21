import React, { Component } from 'react';
import './Login.css';

class Register extends Component {
    state = {
        email: '',
        password: '',
        userName: '',
        fireErrors: ''
    }
    render() {
        return (
            <>
                <form>
                    <input type='text'
                        className='registrationField'
                        placeholder='Username'
                        name='name' />
                    <input type='text'
                        className='registrationField'
                        placeholder='Email'
                        name='email' />
                    <input type='password'
                        className='registrationField'
                        placeholder='Password'
                        name='password' />
                    <input type='submit' className='submitButton' value='REGISTER' />
                </form>
            </>
        );
    }
}

export default Register;