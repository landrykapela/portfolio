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
            <Menu id="home" text="Home" target="top" className="active"/>
            <Menu id="bio" text="Biography" target="biography"/>
            <Menu id="work" text="Work" target="work-content"/>
            <Menu id="contact" text="Contact" target="contact-content"/>
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
