import './error.scss'
import { NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Error = () => {
  return (
    <section className='error'>
      <h4>Page Not Found !!!</h4>
      <NavLink className="li" to='/dashboard'><p>Go to the Dashboard </p><MdOutlineKeyboardArrowRight style={{color:'white'}} className='icon'/></NavLink>
    </section>
  )
}

export default Error;