import React, { Component } from 'react';
import './App.css';
import Slider from './Slider';

const categoryInfo = new Map([["Crime & Justice", {question: "question?", answer: "answer"}]])
// title; [{question, ansewr}]
export default class CandidateDetailedCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <span className="detailed-card-container"> 
        <div className="detailed-card-left">
          <div className="candidate-img-container">
            <img className="candidate-img" alt={this.props.alt} src={this.props.image} /> 
          </div>
          <div className="break"></div>
          <a>average position</a>
          <Slider candLeaning={this.props.avgLean}></Slider>
          <a>left</a>
          {/* <Slider candLeaning={this.props.candLeaning} detailedCard={true}></Slider> */}
          {this.props.leanSliders}
          <a>right</a>
          <div className="break"></div>
        </div>
        <div className="vl"></div>
        <div>
          <Slider candLeaning={this.props.candLeaning} detailedCard={true}></Slider>
          {this.props.selectedCategory}
        </div>
      </span>
    )
  }
}