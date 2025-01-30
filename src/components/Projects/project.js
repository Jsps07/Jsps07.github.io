/*Web Application Development, Jaspreet, 29/1/25*/

import React from 'react'
import './projects.css';

import Shop from '../../assets/shop.png';
import Face from '../../assets/face.jpg';
import Journal from '../../assets/journal.png';


const project = () => {
  return (
    <section id = 'projects'>
        <span className="title">Projects</span>
        <div className="projectDisplay">
                  <div className="projectDisplay">
                    <img src={Shop} alt="Shop" className="projectDisplayImg"/>
                    <div className="projectDisplayText">
                      <h2>Shop-flix</h2>
                      <p>Purchase games from your home.</p>
                    </div>
                  </div>
                  <div className="projectDisplay">
                    <img src={Face} alt="Face" className="projectDisplayImg"/>
                    <div className="projectDisplayText">
                      <h2>Face Recognition</h2>
                      <p>Built a security system that lets user autorize using face.</p>
                    </div>
                  </div>
                  <div className="projectDisplay">
                    <img src={Journal} alt="Journal" className="projectDisplayImg"/>
                    <div className="projectDisplayText">
                      <h2>Daily Journal</h2>
                      <p>Use this beautiful online diary to write whatever you like.</p>
                    </div>
                  </div>
        </div>
                
    </section>
  )
}

export default project