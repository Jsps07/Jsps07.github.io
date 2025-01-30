/*Web Application Development, Jaspreet, 29/1/25*/

import React from 'react';
import './skills.css';
import Repairing from '../../assets/repair.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do?</span>
        <span className="skillDesc">Computer engineer specializing in hardware repair, web development, and mobile app design.</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={Repairing} alt="Repairing" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>Computer Repairing</h2>
              <p>You can get your computers repaired</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>Website Design</h2>
              <p>Get a beautiful website made professionaly</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>Get a beautiful mobile app made professionaly</p>
            </div>
          </div>
        </div>
        
    </section>
  )
}

export default Skills