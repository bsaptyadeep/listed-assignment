import React, { useState } from 'react';
import DashOptions from '../utils/DashOptions';
import TransactionIcon from '../assets/transactionIcon.svg';
import ScheduleIcon from '../assets/scheduleIcon.svg';
import DashboardIcon from '../assets/dashboardIcon.svg';
import UserIcon from '../assets/userIcon.svg';
import SettingIcon from '../assets/settingIcon.svg';
import './Navbar.css';

const Navbar = () => {
    const [navIsActive, setNavIsActive] = useState(false);

    return (
        <div className='navigation-container'>
            <div className='ham-burger-menu'
                onClick={() => {
                    setNavIsActive((prev) => !prev)
                }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={navIsActive?'dashboard-left-menu expanded': "dashboard-left-menu"}>
                <nav>
                    <header>
                        <h1>Board.</h1>
                    </header>

                    <div></div>

                    <div className="dashboard-left-menu-top" >
                        <ul>
                            <li>
                                <DashOptions icon={DashboardIcon} title="Dashboard" />
                                <DashOptions icon={TransactionIcon} title="Transaction" />
                                <DashOptions icon={ScheduleIcon} title="Schedules" />
                                <DashOptions icon={UserIcon} title="Users" />
                                <DashOptions icon={SettingIcon} title="Settings" />
                            </li>
                        </ul>
                    </div>
                    <footer>
                        <p>
                            Help <br></br>
                            Contact Us
                        </p>
                    </footer>
                </nav>
            </div>

        </div>

    )
}

export default Navbar