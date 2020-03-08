import React from 'react';
import Home from './pages/Home';
import Log from './pages/Transaction';
//import Map from './pages/try.js';
import Map from './pages/Map';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
  
 //<Nav.Link onMouseUp={this.update("home")}>Home</Nav.Link>
  render() {
    let page;
    if(this.state.page === "home"){
      page = <Home/>;
    }else if(this.state.page === "map"){
      page = <Map/>
    }else if(this.state.page === "log"){
      page = <Log/>
    }
    return (
      <div className="App">
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand>MJB Enterprises</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => this.update("home")}>Home</Nav.Link>
              <Nav.Link onClick={() => this.update("map")}>Estimate</Nav.Link>
              <Nav.Link onClick={() => this.update("log")}>Transaction Log</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {page}
      </div>
    );
  }
}

export default App;
