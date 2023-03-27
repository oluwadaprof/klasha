import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <h3>Coming Soon...</h3>
      <NavLink className="li" to='/dashboard'><p>Go to the Dashboard </p><MdOutlineKeyboardArrowRight style={{color:'white'}} className='icon'/></NavLink>
    </div>
  )
}

export default Home