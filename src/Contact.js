import React from "react";
import me from "./m.jpg";
const Contact = () => (
  <div className="contact-content" id="contact-content">
    <h1 id="contact-content-title">Get in touch With Me</h1>
    <div className="contact-card">
      <div className="contact-card-name">
        <img
          className="contact-photo"
          src={me}
          alt="Landry's photo"
        />
        <h3>Landry Kapela</h3>
        <span>
          Github: <b>landrykapela</b>
        </span>
        <span>
          Twitter: <b>@lan_dre</b>
        </span>
      </div>
      <div className="contact-card-details">
        <p className="contact-item">
          <i className="material-icons">phone</i>+255 752 86 70 41
        </p>
        <p className="contact-item">
          <i className="material-icons">email</i>landrykapela@gmail.com
        </p>
        <p className="contact-item">
          <i className="material-icons">public</i>
          https://landrykapela.github.io/portfolio
        </p>
      </div>
    </div>
  </div>
);
export default Contact;
