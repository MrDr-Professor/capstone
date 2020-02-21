import React from 'react';
import logo from '../pictures/logo.jpg';
import trailer from '../pictures/trailer.JPG';
import bulldozer from '../pictures/bulldozer.PNG';
import masontrailer from '../pictures/masontrailer.JPG';
import truck from '../pictures/truck.JPG';
import fence from '../pictures/metalfence.JPG';
import gate from '../pictures/metalgate.JPG';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel'


function Home() {
  return (
    
    <div className="Home">
      <header className="App-header">
        <div style={{padding : '40px'}}></div>
        <Image src={logo} className="mjb-logo" roundedCircle/>
        <h3>Welcome to MJB Enterprises</h3>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-6">
              <Carousel>
                <Carousel.Item>
                  <Image src={trailer} fluid/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={bulldozer} fluid/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={truck} fluid/>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="row justify-content-center no-gutters">
            <div className="col-7" style={{padding : '20px 0px 20px 0px'}}>
              <Image src={fence} fluid/>
            </div>
            <div className="col-4" style={{padding : '20px 0px 20px 0px'}}>
              <Image src={gate} fluid/>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <Image src={masontrailer} fluid/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
