import React from 'react';


const Contact = () =>(

    <div className="contact-content" id="contact-content">
      <h1 id="contact-content-title">Get in touch With Me</h1>
      <div className="contact-card">
          <div className="contact-card-name">
            <i className="material-icons">person</i>
            <h3>Landry Kapela</h3>
            <span>Github: <b>landrykapela</b></span>
            <span>Twitter: <b>@lan_dre</b></span>
          </div>
          <div className="contact-card-details">
            <p className="contact-item"><i className="material-icons">phone</i>+255 784 086 726</p>
            <p className="contact-item"><i className="material-icons">email</i>landrykapela@gmail.com</p>
            <p className="contact-item"><i className="material-icons">public</i>https://landrykapela.github.io/portfolio</p>
          </div>
      </div>
    </div>

); export default Contact;
