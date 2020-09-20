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
        <img alt={this.props.alt} src={this.props.image} /> 
        <div className="break"></div>
        <a>average position</a>
        <div className="break"></div>
        <a>left</a>
        <Slider candLeaning={this.props.candLeaning} showButtons={this.props.showButtons}></Slider>
        <a>right</a>
        <div className="break"></div>
        {this.props.showButtons 
          ? (
            <div>
              <button onClick={() => this.props.selectCard1(this.props.carouselIndex)}>Card 1</button>
              <button onClick={() => this.props.selectCard2(this.props.carouselIndex)}>Card 2</button>
            </div>
          ) : null
        }
      </span>
    )
  }
}