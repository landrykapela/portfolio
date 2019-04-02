import React, { Component } from 'react';
import Menu from './Menu.js';
import HelloCard from './HelloCard.js';
import Biography from './Biography.js';
import Work from './Work.js';
import Contact from './Contact.js';
import Humberger from './Humberger.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" id="top">
          <Humberger />
          <div className="nav" id="nav">
            <Menu id="home" text="Home" target="top-title" className="active"/>
            <Menu id="bio" text="Biography" target="biography-title"/>
            <Menu id="work" text="Work" target="work-content-title"/>
            <Menu id="contact" text="Contact" target="contact-content-title"/>
          </div>
          <HelloCard />
        </header>
        <Biography />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;
