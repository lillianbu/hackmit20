import React, { Component } from 'react';
import {Carousel} from '3d-react-carousal';
import CandidateCard from './CandidateCard';
import EmptyCard from './EmptyCard';
import './App.css';
import biden from './images/biden.jpg';
import trump from './images/trump.jpg';
import jorgensen from './images/jorgensen.jpg';
import hawkins from './images/hawkins.jpg';

const candidateInfo = new Map()
candidateInfo.set("biden", biden)
candidateInfo.set("trump", trump)
candidateInfo.set("jorgensen", jorgensen)
candidateInfo.set("hawkins", hawkins)
console.log(candidateInfo)

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
  	let slides = []
  	let noButtonSlides = []
  	let index = 0
  	for (const [key, value] of candidateInfo) {
	  slides.push(<CandidateCard image={value} alt={key} carouselIndex={index} selectCard1={this.selectCard1} selectCard2={this.selectCard2} showButtons={true}/>)
	  noButtonSlides.push(<CandidateCard image={value} alt={key} carouselIndex={index} selectCard1={this.selectCard1} selectCard2={this.selectCard2} showButtons={false}/>)
	  index += 1
	}
    return(
	  <div>
	  	  <div className="selected-card-container">
	  	  	{this.state.card1Index < 0 ? (<EmptyCard />) : noButtonSlides[this.state.card1Index]}
	  	  	{this.state.card2Index < 0 ? (<EmptyCard />) : noButtonSlides[this.state.card2Index]}
	  	  </div>
	      <div className="carousel-container">
	        <Carousel slides={slides} autoplay={false} interval={1000}/>
	      </div>
      </div>
    )
  }
}