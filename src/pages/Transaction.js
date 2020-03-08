import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Log extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <h1>Transaction Log</h1>
          <div className="container" style={{padding : '0px 0px 30px 0px'}}>
            <div className="row justify-content-center">
              <div className="col">
                  <p>Here we go again</p>
              </div>
            </div>
          </div>
        </header>
        
      </div>
    );
  }
}

export default Log;
