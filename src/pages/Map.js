import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  position: 'relative',
  width: '100%',
  height:'100%'
};

class Dist extends React.Component{
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h3>Map Page</h3>
          <div className="cont">
          <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          containerStyle={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
          />
          </div>
        </header>
      </div>
    );
  }
}

//export default Dist;
export default GoogleApiWrapper({
  apiKey: 'TOKEN HERE'
})(Dist);
