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

  render(){
    return (
      <div className='App'>
        <header className="App-header">
          <div className='container'>
            <section className='display-event'>
              <div className="wrapper">
                <table className="table table-striped table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Start</th>
                      <th scope="col">End</th>
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
