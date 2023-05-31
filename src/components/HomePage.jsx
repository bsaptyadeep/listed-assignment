import React, { useContext } from 'react';
import './HomePage.css'
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../App';

const HomePage = () => {
    const { user } = useContext(UserContext);

    return (

        user.length !== 0?
            (<div className='homepage-container'>
                <div className='homepage-left'>
                    <Navbar />
                </div>
                <div className='home-page-content'>
                    <Dashboard />
                </div>
            </div>): (<Navigate to="/signin" />)

    )
}

export default HomePage