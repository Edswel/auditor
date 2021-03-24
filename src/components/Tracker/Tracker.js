import React, { Component } from 'react';
import fire from '../../config/Fire';
import './Tracker.css';
import Transaction from './Transaction/Transaction';

class Tracker extends Component {

    state = {
        transactions: [],
        money: 0,

        transactionName: '',
        transactionType: '',
        price: '',
        currentUID: fire.auth().currentUser.uid
    }

    // Logout method
    logout = () => {
        fire.auth().signOut();
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value !== '0' ? e.target.value : ''
        });
    }

    addNewTransaction = () => {
        const { transactionName, transactionType, price, currentUID, money } = this.state;

        if (transactionName && transactionType && price) {
            const BackUpState = this.state.transactions;
            BackUpState.push({
                id: BackUpState.length + 1,
                name: transactionName,
                type: transactionType,
                price: price,
                user_id: currentUID
            });
            fire.database().ref('Transactions/' + currentUID).push({
                id: BackUpState.length,
                name: transactionName,
                type: transactionType,
                price: price,
                user_id: currentUID
            }).then((data) => {
                console.log('Stored');
                this.setState({
                    transactions: BackUpState,
                    money: transactionType === 'deposit' ? money + parseFloat(price) : money - parseFloat(price),
                    transactionName: '',
                    transactionType: '',
                    price: ''
                })
            }).catch((error) => {
                console.log('Error', error);
            });
        }
    }

    render() {

        let currentUser = fire.auth().currentUser;

        return (
            <div className='trackerPage'>
                <div className='welcome'>
                    <span>Welcome, {currentUser.displayName}!</span>
                    <button className='logout' onClick={this.logout}>Logout</button>
                </div>
                <div className='totalAmount'>
                    ${this.state.money}
                </div>
                <div className='newTransactionPage'>
                    <div className='newTransaction'>
                        <form>
                            <input
                                placeholder='Expense'
                                type='text'
                                name='transactionName'
                                value={this.state.transactionName}
                                onChange={this.handleChange('transactionName')}
                            />
                            <div className='inputGroup'>
                                <select name='type'
                                    value={this.state.transactionType}
                                    onChange={this.handleChange('transactionType')}>
                                    <option value='0'>Type</option>
                                    <option value='expense'>Expense</option>
                                    <option value='deposit'>Deposit</option>
                                </select>
                                <input
                                    placeholder='Amount'
                                    type='text'
                                    name='price'
                                    value={this.state.price}
                                    onChange={this.handleChange('price')}
                                />
                            </div>

                        </form>
                        <button className='addTransaction' onClick={() => this.addNewTransaction()}>
                            ADD TRANSACTION
                        </button>
                    </div>
                </div>
                <div className='latestTransactions'>
                    <h5>Latest Transactions!</h5>
                    <ul>
                        {
                            Object.keys(this.state.transactions).map((id) => (
                                <Transaction
                                    type={this.state.transactions[id].type}
                                    name={this.state.transactions[id].name}
                                    price={this.state.transactions[id].price}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tracker;