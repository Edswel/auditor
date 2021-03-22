import React, { Component } from 'react';
import fire from '../../config/Fire';
import './Tracker.css';

class Tracker extends Component {

    // Logout method
    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className='trackerPage'>
                <div className='welcome'>
                    <span>welcome, Username!</span>
                </div>
            </div>
        );
    }
}

export default Tracker;