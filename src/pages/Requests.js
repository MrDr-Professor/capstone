import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase.js';

class Reqs extends Component{
  constructor() {
    super();
    this.state = {
      customer: '',
      phone: '',
      desc: '',
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
          customer: reqs[req].customer,
          phone: reqs[req].phone,
          desc: reqs[req].desc
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
      customer: this.state.customer,
      phone: this.state.phone,
      desc: this.state.desc
    }
    reqsRef.push(req);
    this.setState({
      customer: '',
      phone: '',
      desc: ''
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
            <section className='display-req' style={{padding : '100px 0px 30px 0px'}}>
              <div className="wrapper">
                <table className="table table-striped table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Customer</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Description</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.reqs.map((req) => {
                      return (
                        <tr key={req.id}>
                          <td>{req.customer}</td>
                          <td>{req.phone}</td>
                          <td>{req.desc}</td>
                          <td><button onClick={() => this.removereq(req.id)}>Remove</button></td>
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

export default Reqs;
