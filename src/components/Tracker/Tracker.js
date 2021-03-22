import React, { Component } from 'react';
import fire from '../../config/Fire';

class Tracker extends Component {

    // Logout method
    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <>
                <button onClick={this.logout}>Logout</button>
            </>
        );
    }
}

export default Tracker;