import React from 'react';
import logo from '../pictures/logo.jpg';
import card from '../pictures/blackcard.jpg';
import card2 from '../pictures/whitecard.JPG';
import trailer from '../pictures/trailer.JPG';
import bulldozer from '../pictures/bulldozer.PNG';
import masontrailer from '../pictures/masontrailer.JPG';
import truck from '../pictures/truck.JPG';
import fence from '../pictures/metalfence.JPG';
import gate from '../pictures/metalgate.JPG';
import cleanup from '../pictures/cleanup.JPG';
import dive from '../pictures/dive.JPG';
import dive2 from '../pictures/dive2.JPG';
import dive_trailer from '../pictures/diving_trailer.JPG';
import out from '../pictures/out.JPG';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel'


function Home() {
  return (
    
    <div className="Home">
      <header className="App-header">
        <div style={{padding : '40px'}}></div>
        <Image className="mjb-logo" src={card} className="mjb-logo" rounded/>
        <h1 className="welcome">Welcome to MJB Enterprises</h1>
        <div className="container" style={{padding : '0px 0px 30px 0px'}}>
          <div className="row justify-content-center">
            <div className="col">
              <Carousel>
                <Carousel.Item>
                  <Image className="caro" src={truck} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image className="caro" src={cleanup} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image className="caro" src={dive} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image className="caro" src={bulldozer} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image className="caro" src={out} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image className="caro" src={trailer} />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="row justify-content-center" style={{padding : '20px 0px 20px 0px'}}>
            <div className="col-6">
              <h1>About Us</h1>
            </div>
            <div className="col-4">
              <h1>Mission</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <h4>My name is  Monti Brolliar, I am the owner and operator of MJB Enterprises.  We are a small family owned business.  My experience includes over 32 years diving with 22 of those years being commercial hardhat diving.  Many of the jobs I have worked on include, hydroelectric power plants, dams, water pumps, silt and debris removal, shipways, and fish screens.  I am skilled at running heavy equipment, cutting and welding above and below water, and designing and fabricating metal works.</h4>
            </div>
            <div className="col-4">
              <h4>My mission with starting MJB Enterprises was to offer skilled specialized services and products to the community and local farmers at reasonable rates.  I strive to produce quality work at an affordable price, working closely with the consumer to get the result desired.</h4>
            </div>
          </div>
          <div className="row justify-content-center no-gutters">
            <div className="col" style={{padding : '20px 0px 20px 0px'}}>
              <Image className="duo" src={fence}/>
              <Image className="duo" src={gate}/>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <h1>Welding And Fabrication</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <h4>&#9642; Mig Welding</h4>
            </div>
            <div className="col">
              <h4>&#9642; Tig Welding</h4>
            </div>
            <div className="col">
              <h4>&#9642; Arc Welding</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <h4>&#9642; Repairs</h4>
            </div>
            <div className="col">
              <h4>&#9642; Metal Art</h4>
            </div>
            <div className="col">
              <h4>&#9642; Equipment Modifications</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <h4>&#9642; Oxy Acetylene Welding/Cutting</h4>
            </div>
            <div className="col">
              <h4>&#9642; Surface/Underwater Welding/Cutting</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col" style={{padding : '20px 0px 20px 0px'}}>
              <Image className="section" src={dive2}/>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <h1>Commercial Hard Hat Diving</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <h4>&#9642; Clearing Debris</h4>
            </div>
            <div className="col">
              <h4>&#9642; Confined Spaces</h4>
            </div>
            <div className="col">
            <h4>&#9642; Zero Visibility</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <h4>&#9642; Salvage Jobs</h4>
            </div>
            <div className="col">
              <h4>&#9642; Repair</h4>
            </div>
            <div className="col">
            <h4>&#9642; Construction</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <h4>&#9642; Deconstruction</h4>
            </div>
            <div className="col">
              <h4>&#9642; Working With Cranes</h4>
            </div>
            <div className="col">
            <h4>&#9642; Jetter & Hydrolic equipment</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <h4>&#9642; Underwater Welding/Cutting</h4>
            </div>
            <div className="col">
              <h4>&#9642; Clearing Irrigation Siphons</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col" style={{padding : '20px 0px 20px 0px'}}>
              <Image className="duo" src={masontrailer}/>
              <Image className="duo" src={dive_trailer}/>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <h1>Equipment</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <h4>&#9642; Heavy Equipment</h4>
            </div>
            <div className="col">
              <h4>&#9642; Welders</h4>
            </div>
            <div className="col">
              <h4>&#9642; Commercial Dive Helmets</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <h4>&#9642; Dive And Welding Trailers</h4>
            </div>
            <div className="col">
              <h4>&#9642; Surface Supplied Air</h4>
            </div>
            <div className="col">
              <h4>&#9642; Woodworking Tools</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <h4>&#9642; Metalworking Tools</h4>
            </div>
            <div className="col">
              <h4>&#9642; And Many More...</h4>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
