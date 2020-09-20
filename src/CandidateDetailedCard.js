import React, { Component } from 'react';
import './App.css';
import Slider from './Slider';

// title; [{question, ansewr}]
export default class CandidateDetailedCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let questionDivs = null;
    if (this.props.selectedCategory !== '') {
      const questionInfo = this.props.allQuestions[this.props.selectedCategory];
      questionDivs = questionInfo.map(q => <p> {q.response}, {q.question} </p>)
    }
    return(
      <span className="detailed-card-container"> 
        <div className="detailed-card-left">
          <img className="detailed-card-image" alt={this.props.alt} src={this.props.image} /> 
          <div className="break"></div>
          <a>average position</a>
          <Slider candLeaning={this.props.avgLean}></Slider>
          <a>left</a>
          {/* <Slider candLeaning={this.props.candLeaning} detailedCard={true}></Slider> */}
          {console.log(this.props.allQuestions)}
          {this.props.leanSliders}
          <a>right</a>
          <div className="break"></div>
        </div>
        <div className="vl"></div>
        <div className="detailed-card-right">
          <h1>{this.props.selectedCategory}</h1>
          {this.props.selectedCategory !== '' 
            ? questionDivs
            : (
                <div>
                  Please select a category 
                </div>
          )}
        </div>
      </span>
    )
  }
}