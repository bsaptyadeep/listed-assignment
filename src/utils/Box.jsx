import React from 'react';
import './Box.css';

const Box = (props) => {
    return (
        <div className={`box-container ${props.color}`}>
            <img src={props.icon} height={20} alt="bag icon" />
            <div className='box-content'>
                <p>{props.value}</p>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default Box