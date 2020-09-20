import React, { Component } from 'react';
import './App.css';
import Slider from './Slider';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import Tooltip from '@material-ui/core/Tooltip';

const responseMap = new Map([['Yes', <Tooltip title="Pro"><SentimentSatisfiedOutlinedIcon style={{ color: 'lightgreen', marginRight: '5px'}}/></Tooltip>], ['No', <Tooltip title="Con"><SentimentDissatisfiedOutlinedIcon style={{ color: 'lightpink', marginRight: '5px' }}/></Tooltip>], ['NC', <Tooltip title="Position Unclear"><SentimentDissatisfiedIcon style={{ color: 'lightgray', marginRight: '5px' }}/></Tooltip>], ['Unknown', <Tooltip title="Position Unknown"><NotInterestedIcon style={{ color: 'lightgray', marginRight: '5px' }}/></Tooltip>]]);
export default class CandidateDetailedCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = ''
    switch(this.props.alt) {
      case 'biden':
        name = 'Joe Biden'
        break
      case 'trump':
        name = 'Donald Trump'
        break
      case 'jorgensen':
        name = 'Jo Jorgensen'
        break
      case 'hawkins':
        name = 'Howie Hawkins'
    }

    let questionDivs = null;
    if (this.props.selectedCategory !== '') {
      const questionInfo = this.props.allQuestions[this.props.selectedCategory];
      questionDivs = questionInfo.map(q => <p className="questions"> <span className="question-icon">{responseMap.get(q.response)}</span> <span>{q.question}</span> </p>)
    }
    return(
      <span className="detailed-card-container"> 
        <div className="detailed-card-left">
          <h1 className="topic-heading">
            {name}
          </h1>
          <div className="candidate-img-container">
            <img className="candidate-img" alt={this.props.alt} src={this.props.image} /> 
          </div>
          <div className="break"></div>
          <a>average position</a>
          <div className="avg-lean-container">
            <a>left</a>
            <Slider candLeaning={this.props.avgLean}></Slider>
            {/* <Slider candLeaning={this.props.candLeaning} detailedCard={true}></Slider> */}
            <a>right</a>
          </div>
          {this.props.leanSliders}
          <div className="break"></div>
        </div>
        <div className="vl"></div>
        <div className="detailed-card-right">
          <h1 className="topic-heading">{this.props.selectedCategory}</h1>
          <div className="question-container">
            {this.props.selectedCategory !== '' 
              ? questionDivs
              : (
                  <div>
                    please select a category 
                  </div>
            )}
          </div>
        </div>
      </span>
    )
  }
}