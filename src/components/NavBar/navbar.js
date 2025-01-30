/*Web Application Development, Jaspreet, 29/1/25*/

import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <nav className = "navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass ="active" to="home" so ={true} smooth={true} offset={+50} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass ="active" to="intro" so ={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">About</Link>
            <Link activeClass ="active" to="projects" so ={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">Projects</Link>
            <Link activeClass ="active" to="skills" so ={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">Serivces</Link>

        </div>
        <button className = "desktopMenuBtn" onClick={()=>{
            document.getElementById("contact").scrollIntoView({behavior: "smooth" })
        }}> 
            <img src={contactImg} alt="Contact" className="desktopMenuImg"/>Contact Me
        </button>
    </nav>
  )
}

export default Navbar