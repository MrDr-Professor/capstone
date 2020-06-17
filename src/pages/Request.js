import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase.js';

class Request extends Component{
  constructor() {
    super();
    this.state = {
      desc: '',
      customer: '',
      phone: '',
      reqs: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    const reqsRef = firebase.database().ref('reqs');
    reqsRef.on('value', (snapshot) => {
      let reqs = snapshot.val();
      let newState = [];
      for (let req in reqs) {
        newState.push({
          id: req,
          desc: reqs[req].desc,
          customer: reqs[req].customer,
          phone: reqs[req].phone
        });
      }
      this.setState({
        reqs: newState
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
    const reqsRef = firebase.database().ref('reqs');
    const req = {
      desc: this.state.desc,
      customer: this.state.customer,
      phone: this.state.phone
    }
    reqsRef.push(req);
    this.setState({
      desc: '',
      customer: '',
      phone: ''
    });
  }

  removereq(reqId) {
    const reqRef = firebase.database().ref(`/reqs/${reqId}`);
    reqRef.remove();
  }

  render(){
    return (
      <div className='App'>
        <header className="App-header">
          <div className='container'>
            <h1>Email Requests</h1>
            <section className='request'>
              <form onSubmit={this.handleSubmit}>
                <div className="row justify-content-center">
                  <div className="col">
                    <input type="text" name="customer" placeholder="Name" onChange={this.handleChange} value={this.state.customer} />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col">
                    <input type="text" name="phone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.phone} />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col">
                    <textarea className="desc" name="text" name="desc" placeholder="Description" wrap="soft" onChange={this.handleChange} value={this.state.desc}></textarea>
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
