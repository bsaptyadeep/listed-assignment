import React, { useContext, Suspense } from 'react';
import "./Dashboard.css"
import SearchIcon from '../assets/Search icon.svg';
import BellIcon from '../assets/bellIcon.svg';
import { UserContext } from '../App';
import Box from '../utils/Box';
import BagIcon from '../assets/bagIcon.svg';
import TransactionIcon from '../assets/TranscationBlackIcon.svg';
import UsersIcon from '../assets/UsersIcon.svg';
import LikeIcon from '../assets/LikeIcon.svg';
import TopProduct from './TopProduct';
import DailySchedule from './DailySchedule';
const Graph = React.lazy(() => import('./Graph'));



const Dashboard = () => {
    const { profile } = useContext(UserContext);

    return (
        <div className='dashboard-container'>
            <div className='dashboard-container-header'>
                <header>
                    <h2>Dashboard</h2>
                    <div className='dashboard-header-right'>
                        <div className='search-box'>
                            <input type='text' placeholder='Search...'></input>
                            <img src={SearchIcon} alt="search icon" />
                        </div>
                        <img src={BellIcon} height={20} alt="search icon" />
                        <img className='profile-picture' height={20} src={profile.picture} alt="search icon" />
                    </div>
                </header>
            </div>
            <div className='dashboard-container-header-boxes'>
                <Box title="Total Revenues" value="$2,129,430" icon={BagIcon} color="green-box" />
                <Box title="Total Transactions" value="1,520" icon={TransactionIcon} color="yellow-box" />
                <Box title="Total Likes" value="9,721" icon={LikeIcon} color="pink-box" />
                <Box title="Total Users" value="892" icon={UsersIcon} color="violet-box" />
            </div>
            <div><Suspense fallback = { <div> Please Wait... </div> } >
            <Graph /></Suspense></div>
            <div className='dashboard-container-bottom'>
                <TopProduct />
                <DailySchedule />
            </div>
        </div>
    )
}

export default Dashboard