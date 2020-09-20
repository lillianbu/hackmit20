import React, { Component } from 'react';
import './App.css';

class Slider extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const leaning = this.props.candLeaning;
        return (
            <div className="rectangle">
                <div style={{ width: `${Math.abs(leaning)*100 + 'px'}`}} className={`leaning ${leaning > 0 ? 'left' : 'right'}`}></div>
            </div>
        );
    }
}

export default Slider;