import React, { Component } from 'react';
import './App.css';
import Slider from './Slider';

export default class CandidateDetailedCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <span className="card-container"> 
        <img alt={this.props.alt} src={this.props.image} /> 
        <div className="break"></div>
        <a>average position</a>
        <div className="break"></div>
        <a>left</a>
        <Slider candLeaning={this.props.candLeaning} detailedCard={true}></Slider>
        <a>right</a>
        <div className="break"></div>
      </span>
    )
  }
}