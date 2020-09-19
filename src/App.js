import React from 'react';
import {Carousel} from '3d-react-carousal';
import CandidateCard from './CandidateCard';
import logo from './logo.svg';
import './App.css';
import biden from './images/biden.jpg';

// const biden = require('./images/biden.jpg');

function App() {
  let slides = [
    <CandidateCard />,
    <img  src={logo} className="App-logo" alt="2" />  ,
    <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
    <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
    <img src="https://picsum.photos/800/304/?random" alt="5" />   
  ];
  return (
    <div className="App">
      <div className="carousel-container">
        <Carousel slides={slides} autoplay={false} interval={1000}/>
      </div>
    </div>
  );
}

export default App;
