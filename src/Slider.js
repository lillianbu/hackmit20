import React, { Component } from 'react';
import './App.css';

class Slider extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const leaning = this.props.candLeaning;
        const side = leaning > 0 ? 'left' : 'right'; 
        return (
            <div>
                {this.props.selectCategory ? (<a onClick={() => this.props.selectCategory(this.props.categoryTitle)} className="topic-title">{this.props.categoryTitle}</a>) : null}
                <div className="avg-position-slider-container">
                    <div className={`rectangle ${leaning === 0 ? "centered" : ""}`}>
                        { leaning === 0 
                            ? (
                                <div className="center"></div>
                                ): 
                                (<div className={`leaning ${side}`} style={{ width: `${Math.abs(leaning)*75 + 'px'}`}} ></div> )
                            }
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;