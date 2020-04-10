import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Request extends Component{
  constructor() {
    super();
    this.state = {
      date: '',
      customer: '',
      money: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.setState({
      date: '',
      customer: '',
      money: ''
    });
  }

  render(){
    return (
      <div className='App'>
        <header className="App-header">
          <div className='container'>
            <h1>Email Requests</h1>
            <section className='request'>
              <form onSubmit={this.handleSubmit} style={{padding : '100px 0px 30px 0px'}}>
                <div className="row justify-content-center">
                  <div className="col">
                    <input type="text" name="date" placeholder="Email" onChange={this.handleChange} value={this.state.date} />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col">
                    <input type="text" name="customer" placeholder="Name" onChange={this.handleChange} value={this.state.customer} />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col">
                    <input type="text" name="money" placeholder="Phone Number" onChange={this.handleChange} value={this.state.money} />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col">
                    <button>Send</button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </header>
      </div>
    );
  }
}

export default Request;