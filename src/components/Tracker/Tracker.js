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
                    <span>Welcome, Username!</span>
                    <button className='logout' onClick={this.logout}>Logout</button>
                </div>
                <div className='totalAmount'>
                    $150.00
                </div>
                <div className='newTransactionPage'>
                    <div className='newTransaction'>
                        <form>
                            <input
                                placeholder='Expense'
                                type='text'
                                name='transactionName'
                            />
                            <div className='inputGroup'>
                                <select name='type'>
                                    <option value='0'>Type</option>
                                    <option value='expense'>Expense</option>
                                    <option value='deposit'>Deposit</option>
                                </select>
                                <input
                                    placeholder='Amount'
                                    type='text'
                                    name='price'
                                />
                            </div>
                            <button className='addTransaction'>ADD TRANSACTION</button>
                        </form>
                    </div>
                </div>
                <div className='latestTransactions'>
                    <h5>Latest Transactions!</h5>
                    <ul>
                        <li>
                            <div>Cash Transfer</div>
                            <div>+$100</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tracker;