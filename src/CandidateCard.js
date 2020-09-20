import React, { Component } from 'react';
import './App.css';
import Slider from './Slider';

export default class CandidateCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <span className="card-container"> 
        <div className="candidate-img-container">
          <img className="candidate-img" alt={this.props.alt} src={this.props.image} /> 
        </div>
        <div className="break"></div>
        <div className="topic-container">
          <p className="topic-title">average position</p>
          <div className="avg-position-slider-container">
            <p className="spectrum-label">left</p>
            <Slider candLeaning={this.props.avgLean}></Slider>
            <p className="spectrum-label">right</p>
          </div>
        </div>
        <div>
          <button className="select-card-btn" onClick={() => this.props.selectCard1(this.props.carouselIndex)}>card 1</button>
          <button className="select-card-btn" onClick={() => this.props.selectCard2(this.props.carouselIndex)}>card 2</button>
        </div>  
      </span>
    )
  }
}