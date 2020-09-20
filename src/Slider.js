import React, { Component } from 'react';
import './App.css';

class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scaledWidth: 0,
            avgLean: 1,
        }
    }

    getScaledWidth = (val, total) => {
        return (2 * val - total)/total;
    }

    getAverageLean = () => {
        let total = 0;
        let leanTotal = 0;
        const leaning = this.props.candLeaning;
        Object.entries(leaning).forEach(element => {
            const values = element[1].split(',');
            const numValues = values.map(x => parseInt(x));
            leanTotal += numValues[0];
            total += numValues[1];
        });
        const avgLean = this.getScaledWidth(leanTotal, total);
        return avgLean;
    }

    render() {
        // const scaledWidth = this.getScaledWidth(1, 7, 100);
        return (
            <div className="rectangle">
                <div style={{ width: `${Math.abs(this.getAverageLean())*100 + 'px'}`}} className={`leaning ${this.getAverageLean() > 0 ? 'left' : 'right'}`}></div>
            </div>
        );
    }
}

export default Slider;