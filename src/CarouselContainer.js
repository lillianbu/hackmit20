import React, { Component } from 'react';
import {Carousel} from '3d-react-carousal';
import CandidateCard from './CandidateCard';
import CandidateDetailedCard from './CandidateDetailedCard';
import EmptyCard from './EmptyCard';
import './App.css';
import biden from './images/biden.jpg';
import trump from './images/trump.jpg';
import jorgensen from './images/jorgensen.jpg';
import hawkins from './images/hawkins.jpg';
import Slider from './Slider';

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
		card2Index: -1,
		candidates: require('./files/candidates_full.json').Candidates,
	}
	// this.readCandidates();
  }

  getScaledWidth = (val, total) => {
    return (2 * val - total)/total;
}

//   getAverageLean = () => {
//       let total = 0;
//       let leanTotal = 0;
//       Object.entries(leaning).forEach(element => {
//           const values = element[1].split(',');
//           const numValues = values.map(x => parseInt(x));
//           leanTotal += numValues[0];
//           total += numValues[1];
//       });
//       const avgLean = this.getScaledWidth(leanTotal, total);
//       return avgLean;
//   }

  getLeanings = (leaning) => {
      const topics = {}
      let leanValue = 0;

      Object.entries(leaning).forEach(element => {
        const key = element[0].toLowerCase();
        const val = element[1].split(',');
        const rawValues = val.map(x => parseInt(x)); // [score, total]
        leanValue = this.getScaledWidth(...rawValues);
        topics[key] = {
          leanValue: leanValue,
          score: rawValues[0],
          total: rawValues[1],
        };
      });
      return topics;
  }   
  readCandidates = () => {
    const obj = require('./files/candidates_full.json');
	this.setState({candidates: obj.Candidates});
	console.log("candidatse" + this.state.candidates);
  }

  selectCard1 = (index) => {
  	if (index >= 0 && index <= 3) {
  		this.setState({card1Index: index});
  	} else if (this.state.card1Index !== -1) {
  		this.setState({card1Index: -1});
  	}
  }

  selectCard2 = (index) => {
  	if (index >= 0 && index <= 3) {
  		this.setState({card2Index: index});
  	} else if (this.state.card2Index !== -1) {
  		this.setState({card2Index: -1});
  	}
  }

  render() {
		let slides = [];
		let noButtonSlides = [];
	  	let index = 0;

		for (const [key, value] of candidateInfo) {
			// const scaledWidth = this.getScaledWidth(1, 7, 100);
			const candLeaning = this.state.candidates[key];
			const allLeanings = this.getLeanings(candLeaning);
			const leanSliders = []

			// const topicLean = this.getLeaning();
			for (const [index, value] of Object.entries(allLeanings)) {
			// console.log(index, value);
				leanSliders.push((
					<div key={index}>
					<a>{index}</a>
					<Slider candLeaning={value.leanValue} detailedCard={false}></Slider>
					<div className="break"></div>
					</div>
				))
			}
			slides.push(
			<CandidateCard 
				image={value} 
				alt={key} 
				carouselIndex={index} 
				selectCard1={this.selectCard1} 
				selectCard2={this.selectCard2} 
				/>);
			noButtonSlides.push(
			<CandidateDetailedCard 
				image={value} 
				alt={key} 
				carouselIndex={index} 
				selectCard1={this.selectCard1} 
				selectCard2={this.selectCard2} 
				leanSliders={leanSliders}
			/>);
			index += 1;
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