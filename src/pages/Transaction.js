import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase.js';

class Log extends Component{
  constructor() {
    super();
    this.state = {
      date: '',
      customer: '',
      money: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          date: items[item].date,
          customer: items[item].customer,
          money: items[item].money
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      date: this.state.date,
      customer: this.state.customer,
      money: this.state.money
    }
    itemsRef.push(item);
    this.setState({
      date: '',
      customer: '',
      money: ''
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render(){
    return (
      <div className='App'>
        <header className="App-header">
          <div className='container'>
            <section className='add-item'>
              <form onSubmit={this.handleSubmit} style={{padding : '100px 0px 30px 0px'}}>
                <input type="date" name="date" placeholder="Date" onChange={this.handleChange} value={this.state.date} />
                <input type="text" name="customer" placeholder="Customer" onChange={this.handleChange} value={this.state.customer} />
                <input type="number" name="money" placeholder="Money charged" onChange={this.handleChange} value={this.state.money} />
                <button>Add Transaction</button>
              </form>
            </section>
        
            <section className='display-item'>
              <div className="wrapper">
                <table className="table table-striped table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Money</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.items.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.date}</td>
                          <td>{item.customer}</td>
                          <td>${item.money}</td>
                          <td><button onClick={() => this.removeItem(item.id)}>Remove Item</button></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </header>
      </div>
    );
  }
}

export default Log;
