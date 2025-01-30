/*Web Application Development, Jaspreet, 29/1/25*/

import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <section className="contactPage">
        <div id="contact">
           <h1 className="contactPageTitle">Contact Me</h1>
           <span className="contactDescription">Please fill out the form below to discuss any work opportunities.</span>
           <form className="contactForm">
                <input type="text" className="name" placeholder="Your Name"/>
                <input type="email" className="emal" placeholder="Your Email"/>     
                <textarea className ="msg" name="message" rows="5" placeholder="Your Message."></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
           </form>
        </div>
    </section>
  )
}

export default Contact