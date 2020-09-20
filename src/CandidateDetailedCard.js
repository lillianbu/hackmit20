import React, { Component } from 'react';
import './App.css';
import Slider from './Slider';

export default class CandidateDetailedCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <span className="detailed-card-container"> 
        <div className="detailed-card-left">
          <img className="detailed-card-image" alt={this.props.alt} src={this.props.image} /> 
          <div className="break"></div>
          <a>average position</a>
          <div className="break"></div>
          <a>left</a>
          {/* <Slider candLeaning={this.props.candLeaning} detailedCard={true}></Slider> */}
          {this.props.leanSliders}
          <a>right</a>
          <div className="break"></div>
        </div>
        <div class="vl"></div>
        {/* <div>
          <Slider candLeaning={this.props.candLeaning} detailedCard={true}></Slider>
        </div> */}
      </span>
    )
  }
}