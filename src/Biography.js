import React from 'react';
import NavigatorBranch from './NavigatorBranch.js';

class Biography extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event){
    event.preventDefault();

}
  render (){
    return(
          <div className="biography" id="biography">
              <h1 id="biography-title">My Bio</h1>
                <div className='bio-summary'>
              <div id="navigator">
                <NavigatorBranch text="Academics" id="academics" onClick={this.handleClick}/>
                <NavigatorBranch text="Coding" id="coding" onClick={this.handleClick}/>
                <NavigatorBranch text="Skills" id="skills" onClick={this.handleClick}/>
              </div>
            </div>
            <div className='bio-content'>
              <h1 id="title">My Academics Journey</h1>
              <div id="details">

              </div>
            </div>
          </div>
        );
  };
}export default Biography;
