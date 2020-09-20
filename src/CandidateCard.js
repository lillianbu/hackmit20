import React, { Component } from 'react';
import './App.css';

export default class CandidateCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <span className="card-container"> 
        <img alt={this.props.alt} src={this.props.image} /> 
        <button onClick={() => this.props.selectCard1(this.props.carouselIndex)}>Card 1</button>
        <button onClick={() => this.props.selectCard2(this.props.carouselIndex)}>Card 2</button>
      </span>
    )
  }
}