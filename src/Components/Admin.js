import React from 'react';
import Home from '../pages/Home';
import Log from '../pages/Transaction';
import Map from '../pages/Map';
import Request from '../pages/Request';
import Requests from '../pages/Requests';
import Schedule from '../pages/Schedule';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { auth } from "../pages/firebase";


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {page: "home"};
  }
  
  update(p) {
    this.setState({
      page: p
    });
  }
  
  render() {
    let page;
    if(this.state.page === "home"){
      page = <Home/>;
    }else if(this.state.page === "map"){
      page = <Map/>
    }else if(this.state.page === "log"){
      page = <Log/>
    }else if(this.state.page === "schedule"){
      page = <Schedule/>
    }else if(this.state.page === "request"){
      page = <Request/>
    }else if(this.state.page === "requests"){
      page = <Requests/>
    }
    return (
      <div className="App">
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand>MJB Enterprises</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => this.update("home")}>Home</Nav.Link>
              <Nav.Link onClick={() => this.update("map")}>Location</Nav.Link>
              <Nav.Link onClick={() => this.update("log")}>Transaction Log</Nav.Link>
              <Nav.Link onClick={() => this.update("schedule")}>Schedule</Nav.Link>
              <Nav.Link onClick={() => this.update("request")}>Request</Nav.Link>
              <Nav.Link onClick={() => this.update("requests")}>Requests</Nav.Link>
            </Nav>
            <Nav.Link className="sign-out" onClick={() => auth.signOut()}>Signout</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        {page}
      </div>
      
    );
  }
}

export default App;
