import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase.js';

class Schedule extends Component{
  constructor() {
    super();
    this.state = {
      date: '',
      customer: '',
      start_time: '',
      end_time: '',
      events: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    const eventsRef = firebase.database().ref('events');
    eventsRef.on('value', (snapshot) => {
      let events = snapshot.val();
      let newState = [];
      for (let event in events) {
        newState.push({
          id: event,
          date: events[event].date,
          customer: events[event].customer,
          start_time: events[event].start_time,
          end_time: events[event].end_time
        });
      }
      this.setState({
        events: newState
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
    const eventsRef = firebase.database().ref('events');
    const event = {
      date: this.state.date,
      customer: this.state.customer,
      start_time: this.state.start_time,
      end_time: this.state.end_time
    }
    eventsRef.push(event);
    this.setState({
      date: '',
      customer: '',
      start_time: '',
      end_time: ''
    });
  }

  removeevent(eventId) {
    const eventRef = firebase.database().ref(`/events/${eventId}`);
    eventRef.remove();
  }

  render(){
    return (
      <div className='App'>
        <header className="App-header">
          <div className='container'>
            <section className='add-event'>
              <form onSubmit={this.handleSubmit} style={{padding : '100px 0px 30px 0px'}}>
                <input type="date" name="date" placeholder="Date" onChange={this.handleChange} value={this.state.date} />
                <input type="text" name="customer" placeholder="Customer" onChange={this.handleChange} value={this.state.customer} />
                <input type="time" name="start_time" placeholder="Start" onChange={this.handleChange} value={this.state.start_time} />
                <input type="time" name="end_time" placeholder="End" onChange={this.handleChange} value={this.state.end_time} />
                <button>Add Event</button>
              </form>
            </section>
        
            <section className='display-event'>
              <div className="wrapper">
                <table className="table table-striped table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Start</th>
                      <th scope="col">End</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.events.map((event) => {
                      return (
                        <tr key={event.id}>
                          <td>{event.date}</td>
                          <td>{event.customer}</td>
                          <td>{event.start_time}</td>
                          <td>{event.end_time}</td>
                          <td><button onClick={() => this.removeevent(event.id)}>Remove event</button></td>
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

export default Schedule;
