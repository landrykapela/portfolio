import React from 'react';

class Humberger extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.getHumbergerState = this.getHumbergerState.bind(this);
    this.setHumbergerState = this.setHumbergerState.bind(this);
    this.state = {clicked:false};
  }
  getHumbergerState(){
    return this.state.clicked;
  }
  setHumbergerState(burgerState){
    this.setState({clicked:burgerState});
  }
  componentDidMount(){
    this.setHumbergerState(this.state.clicked);
  }
  handleClick(event){
    event.preventDefault();
    let burger = document.getElementById("humberger");
    let menu = document.getElementById("nav");
    let myState = this.state.clicked;
    if(!myState){
      console.log(!myState);
      burger.innerHTML = "<i class='material-icons'>close</i>";
      menu.style.display = 'flex';
      this.setHumbergerState(!myState);
      console.log(this.getHumbergerState());
    }
    else{
      console.log(myState);
      burger.innerHTML = "<i class='material-icons'>menu</i>";
      menu.style.display = 'none';
      this.setHumbergerState(!myState);
      console.log(this.getHumbergerState());
    }
  };
  render(){
    return (
      <span id="humberger" onClick={this.handleClick}><i className="material-icons">menu</i></span>
    );
  };
} export default Humberger;
