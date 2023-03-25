import { FaAppStore } from "react-icons/fa";
import React from 'react'
import './sidebar.scss' 
import Logo from '../../assets/klasha__logo 1.png'

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <img src={Logo} alt="Klasha Logo"/>
            </div>
            <div className="center">
                <ul> 
                    <p className="title">Main Pages</p>
                    <li><FaAppStore className='icon' /><span>Dashboard</span></li>
                    <li><FaAppStore className='icon' /> <span>Users</span></li>
                    <li><FaAppStore className='icon' /> <span>Products</span></li>
                    <li><FaAppStore className='icon' /> <span>Orders</span></li>
                    <li><FaAppStore className='icon' /> <span>Delivery</span></li>
                    <li><FaAppStore className='icon' /> <span>Products</span></li>

                    <p className="title">Accept Payments</p>
                    <li><FaAppStore className='icon' /> <span>Users</span></li>
                    <li><FaAppStore className='icon' /> <span>Products</span></li>

                    <p className="title">Send Payments</p>
                    <li><FaAppStore className='icon' /> <span>Stats</span></li>
                   
                </ul>
            </div>
            <div className="bottom">
                <div className="color__option"> <FaAppStore/> Support</div>
                <div className="color__option"> <FaAppStore/> Hide panel</div>
                
            </div>
        </div>
    )
}

export default SideBar