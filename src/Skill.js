import React from 'react';


class Skill extends React.Component{

  constructor(props){
    super(props);
    this.technologies = this.props.technologies;
    this.title = this.props.title;
  }
  render(){
    return (
      <div className="skill">
        <h2>{this.title}</h2>
        {
          for(let i=0; i < this.technologies.length; i++){
              <span>{this.technologies['name']}</span><br>
          }
        }

      </div>
    );
  };
} export default Skill;
