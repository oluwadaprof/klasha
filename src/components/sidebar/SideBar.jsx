// import { Notifications, CreditCard, Dashboard, Person, Store, SettingsApplications,  LocalShipping,AccountCircleOutlined, ExitToApp,Assessment } from '@material-ui/icons'
// import { PsychologyOutlined } from '@mui/icons-material';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';

import { FaAppStore } from "react-icons/fa";
import React from 'react'
import './sidebar.scss' 

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">iCart-Admin</span>
            </div>
            <hr />
            <div className="center">
                <ul> 
                    <p className="title">MAIN</p>
                    <li><FaAppStore className='icon' /><span>Dashboard</span></li>

                    <p className="title">LISTS</p>
                    <li><FaAppStore className='icon' /> <span>Users</span></li>
                    <li><FaAppStore className='icon' /> <span>Products</span></li>
                    <li><FaAppStore className='icon' /> <span>Orders</span></li>
                    <li><FaAppStore className='icon' /> <span>Delivery</span></li>

                    <p className="title">USEFUL</p>
                    <li><FaAppStore className='icon' /> <span>Stats</span></li>
                    <li><FaAppStore className='icon' /> <span>Notifications</span></li>

                    <p className="title">SERVICE</p>
                    <li><FaAppStore className='icon' /><span>System Health</span></li>
                    <li><FaAppStore className='icon' /> <span>Logs</span></li>
                    <li><FaAppStore className='icon' /> <span>Settings</span></li>

                     <p className="title">USER</p>
                    <li><FaAppStore className='icon' /> <span>Profile</span></li>
                    <li><FaAppStore className='icon' /> <span>Logout</span></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="color__option"> <FaAppStore/> </div>
                <div className="color__option"> <FaAppStore/> </div>
                
            </div>
        </div>
    )
}

export default SideBar