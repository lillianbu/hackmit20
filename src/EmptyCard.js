import React, { Component } from 'react';
import './App.css';

export default class Empty extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <span className="card-container empty-card"> 
        Please select a card 
      </span>
    )
  }
}