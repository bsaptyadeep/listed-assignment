import React from 'react';
import './DailySchedule.css';

const DailySchedule = () => {
  return (
    <div className='daily-container'>
      <header>
        <h3>Today’s schedule</h3>
        <p>See All &gt;</p>
      </header>
      <div className='daily-section green-border'>
        <p>Today’s schedule</p>
        <span>14.00-15.00</span><br></br>
        <span>at Sunset Road, Kuta, Bali </span>
      </div>
      <div className='daily-section blue-border'>
        <p>Check operation at Giga Factory 1</p>
        <span>18.00-20.00</span><br></br>
        <span>at Central Jakarta </span>
      </div>
    </div>
  )
}

export default DailySchedule