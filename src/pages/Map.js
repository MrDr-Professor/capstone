import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class Dist extends React.Component{
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div style={{padding : '40px'}}></div>
          <h3>Map Page</h3>
          <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
          />
        </header>
      </div>
    );
  }
}

//export default Dist;
export default GoogleApiWrapper({
  apiKey: 'TOKEN HERE'
})(Dist);
