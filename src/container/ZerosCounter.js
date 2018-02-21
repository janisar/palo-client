import React from 'react';
import './ZerosCounter.css';

class ZerosCounter extends React.Component {

    render() {
        return (
            <div className="ZerosCounter">
                <label className="Zeros">{this.props.zeros !== 0 ? this.props.zeros : ""}</label>
            </div>
        );
    }
}

export default ZerosCounter;