import React, { Component } from 'react';
import {Carousel} from '3d-react-carousal';
import CandidateCard from './CandidateCard';
import EmptyCard from './EmptyCard';
import './App.css';
import biden from './images/biden.jpg';
import trump from './images/trump.jpg';
import jorgensen from './images/jorgensen.jpg';
import hawkins from './images/hawkins.jpg';

export default class CarouselContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	card1Index: -1,
    	card2Index: -1
    }
  }

  selectCard1 = (index) => {
  	if (index >= 0 && index <= 3) {
  		this.setState({card1Index: index})
  	} else if (this.state.card1Index !== -1) {
  		this.setState({card1Index: -1})
  	}
  }

  selectCard2 = (index) => {
  	if (index >= 0 && index <= 3) {
  		this.setState({card2Index: index})
  	} else if (this.state.card2Index !== -1) {
  		this.setState({card2Index: -1})
  	}
  }

  render() {
  	let slides = [
		<CandidateCard image={biden} alt="biden" carouselIndex={0} selectCard1={this.selectCard1} selectCard2={this.selectCard2}/>,
		<CandidateCard image={trump} alt="trump" carouselIndex={1} selectCard1={this.selectCard1} selectCard2={this.selectCard2}/>  ,
		<CandidateCard image={jorgensen} alt="jorgensen" carouselIndex={2} selectCard1={this.selectCard1} selectCard2={this.selectCard2}/>  ,
		<CandidateCard image={hawkins} alt="hawkins" carouselIndex={3} selectCard1={this.selectCard1} selectCard2={this.selectCard2}/>  , 
	];
    return(
	  <div>
	  	  <div className="selected-card-container">
	  	  	{this.state.card1Index < 0 ? (<EmptyCard />) : slides[this.state.card1Index]}
	  	  	{this.state.card2Index < 0 ? (<EmptyCard />) : slides[this.state.card2Index]}
	  	  </div>
	      <div className="carousel-container">
	        <Carousel slides={slides} autoplay={false} interval={1000}/>
	      </div>
      </div>
    )
  }
}