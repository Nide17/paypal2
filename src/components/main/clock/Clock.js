import React from 'react'
import './clock.css'

function Clock() {
    return (

        <div className="clock">
        
            <div className="second  ">
                <div className="number">
                    <span>3</span>
                </div>
            </div>

            <div className="second  ">
                <div className="number">
                    <span>2</span>
                </div>
            </div>

            <div className="second  ">
                <div className="number">
                    <span>5</span>
                </div>
            </div>

            <div className="second  ">
                <div className="number">
                    <span>0</span>
                </div>
            </div>

            <div className="second  ">
                <div className="number">
                    <span>0</span>
                </div>
            </div>

            <div className="second  ">
                <div className="number">
                    <span>4</span>
                </div>
            </div>

            <div className="second  ">
                <div className="number">
                    <span>0</span>
                </div>
            </div>

            <div className="second  ">
                <div className="number">
                    <span>8</span>
                </div>
            </div>

            <div className="second lastdigit ">
                <div className="number">
                    <span className="move">0</span>
                </div>
            </div>

        </div>
    )
}

export default Clock
