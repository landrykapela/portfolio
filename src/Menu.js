import React from 'react';

class Menu extends React.Component{
  constructor(props){
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.id = this.props.id;
    this.text = this.props.text;
    this.target = this.props.target;
  }
  handleClick(e){
    e.preventDefault();
    let item = document.getElementById(e.target.id);
    let navItems = document.getElementById('nav').childNodes;
    for(let i=0; i<navItems.length;i++){
      if(navItems[i].classList.contains('active')){
        navItems[i].classList.remove('active');
      }
    }
    item.classList.add('active');
    let targetDiv = document.getElementById(this.target);
    if(targetDiv){
      if(item.classList.contains('active')){
        targetDiv.scrollIntoView({behavior:'smooth'});
        console.log("scroll to "+this.target);
      }

    }
    else console.log("No target div");

  }
  handleMouseOver(){
    let item = document.getElementById(this.id);
    if(!item.classList.contains('active')) {
      item.classList.remove('active');
      item.classList.add('focused');
    }
  }
  handleMouseOut(){
    let item = document.getElementById(this.id);
    item.classList.remove('focused');

  }
  render(){
    return (

      <span onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className={"nav-item "+(this.props.id === "home" ? "active" : "")} id={this.id}>{this.text}</span>
    );
  };

}
export default Menu;
