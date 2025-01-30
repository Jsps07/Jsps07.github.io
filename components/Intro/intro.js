/*Web Application Development, Jaspreet, 29/1/25*/

import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';


const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm, <span className="introName">Jaspreet Singh</span> <br />
          Computer Engineer
        </span>
        <p className="introPara">
          Enthusiastic Computer Science Engineer with a strong foundation in<br/>
          analytical and problem-solving skills. Seeking opportunities to
          contribute <br/>effectively to team projects and grow as a Computer
          Engineer.
        </p>
        <a href="https://drive.google.com/file/d/1g5j-cW-ExXZgEhfGvHA-n8LXwMP8V6D5/view?usp=sharing" target="_blank" rel="noopener noreferrer"> {/* Direct link to resume */}
          <button className="btn">Resume</button>
        </a>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;