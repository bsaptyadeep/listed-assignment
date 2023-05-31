import React from 'react';
import './DashOptions.css';

const DashOptions = (props) => {
  return (
    <div className='dash-options-container'>
        <div className='dash-options-icon'>
            <img src={props.icon} alt='dash-icon' />
        </div>
        <div className='dash-options-title'>
            <p>{props.title}</p>
        </div>
    </div>
  )
}

export default DashOptions