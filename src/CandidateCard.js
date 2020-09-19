import React, { Component } from 'react';
import './App.css';
import biden from './images/biden.jpg';

// const biden = require('./images/biden.jpg');

export default class CandidateCard extends Component {
  render() {
    return(
      <div className="card-container"> 
        <img alt="biden" src={biden} /> 
      </div>
    )
  }
}