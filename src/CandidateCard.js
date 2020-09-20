import React, { Component } from 'react';
import './App.css';
import Slider from './Slider';

export default class CandidateCard extends Component {
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

    return(
      <span className="card-container"> 
        <h1 className="topic-heading">
          {name}
        </h1>
        <div className="candidate-img-container">
          <img className="candidate-img" alt={this.props.alt} src={this.props.image} /> 
        </div>
        <div className="break"></div>
        <div className="topic-container">
          <p className="topic-title">average position</p>
            <div className="avg-lean-container">
            <a>left</a>
            <Slider candLeaning={this.props.avgLean}></Slider>
            <a>right</a>
          </div>
        </div>
        <div className="select-text">
          select card to view positions on topics
        </div>
        <div>
          <button className="select-card-btn" onClick={() => this.props.selectCard1(this.props.carouselIndex)}>card 1</button>
          <button className="select-card-btn" onClick={() => this.props.selectCard2(this.props.carouselIndex)}>card 2</button>
        </div>  
      </span>
    )
  }
}