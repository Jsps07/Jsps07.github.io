/*Web Application Development, Jaspreet, 29/1/25*/

import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <section id="home">
        <h1 className="greeting">Hi, there!<br/> I'm Jaspreet Singh</h1>
        <p className="intro"> 
          I'm a Engineer passionate about latest technology.<br/> 
          Welcome to my portfolio!  I'm excited to share my work and connect with you.
        </p>
        <div className="cta-buttons"> 
          <a href="#projects" className="cta-button">View Projects</a>
        </div>
    </section> 
    )
}

export default Home