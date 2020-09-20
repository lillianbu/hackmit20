import React, { Component } from 'react';
import './App.css';
import Slider from './Slider';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

const responseMap = new Map([['Yes', <SentimentSatisfiedOutlinedIcon style={{ color: 'lightgreen' }}/>], ['No', <SentimentDissatisfiedOutlinedIcon style={{ color: 'lightpink' }}/>], ['NC', <SentimentDissatisfiedIcon style={{ color: 'lightgray' }}/>], ['Unknown', <NotInterestedIcon style={{ color: 'lightgray' }}/>]]);
export default class CandidateDetailedCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let questionDivs = null;
    if (this.props.selectedCategory !== '') {
      const questionInfo = this.props.allQuestions[this.props.selectedCategory];
      questionDivs = questionInfo.map(q => <p className="questions"> <span>{responseMap.get(q.response)}</span> <span>{q.question}</span> </p>)
    }
    return(
      <span className="detailed-card-container"> 
        <div className="detailed-card-left">
          <div className="candidate-img-container">
            <img className="candidate-img" alt={this.props.alt} src={this.props.image} /> 
          </div>
          <div className="break"></div>
          <a>average position</a>
          <a>left</a>
          <Slider candLeaning={this.props.avgLean}></Slider>
          {/* <Slider candLeaning={this.props.candLeaning} detailedCard={true}></Slider> */}
          {/* {console.log(this.props.allQuestions)} */}
          <a>right</a>
          {this.props.leanSliders}
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