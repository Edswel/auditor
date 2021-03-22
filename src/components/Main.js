import React, { Component } from 'react';
import fire from '../config/Fire';
import Login from './Forms/Login';
import Register from './Forms/Register';
import Tracker from './Tracker/Tracker';
import './Main.css';

export default class Main extends Component {
    state = {
        user: 1,
        loading: true,
        switchForm: false
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        });
    }

    switchForm = (action) => {
        console.log(action);
        this.setState({
            switchForm: action === 'register' ? true : false
        });
    }

    render() {
        const form = !this.state.switchForm ? <Login /> : <Register />
        return (
            <>
                {!this.state.user ?
                    <div className='mainPage'>
                        {form}
                        {!this.state.switchForm ?

                            (<span className='questionLine'>
                                Not registered yet? <button
                                    onClick={() => this.switchForm(!this.state.switchForm ? 'register' : 'login')}
                                    className='formButton'>Create an account</button>
                            </span>) : (
                                <span className='questionLine'>
                                    Have an account? <button
                                        onClick={() => this.switchForm(!this.state.switchForm ? 'register' : 'login')}
                                        className='formButton'>Sign in here!</button>
                                </span>
                            )
                        }
                    </div> : (<Tracker />)
                }
            </>
        );
    }
}