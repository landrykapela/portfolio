import React from 'react';

class NavigatorBranch extends React.Component {
  constructor(props){
    super(props);
    this.text = this.props.text;
    this.behavior = this.props.behavior;
    this.id = this.props.id;

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.showCodingBio = this.showCodingBio.bind(this);
    this.clearContent = this.clearContent.bind(this);
    this.showPrograms = this.showPrograms.bind(this);
    this.insertProgram = this.insertProgram.bind(this);
    this.getCodingPrograms = this.getCodingPrograms.bind(this);
    this.getSkills = this.getSkills.bind(this);
    this.insertSkills = this.insertSkills.bind(this);
    this.showSkills = this.showSkills.bind(this);
    this.contentDetails = this.contentDetails.bind(this);

    this.defaultPrograms = [{name:'Information Technology and Management',level:'Graduate', program:'Master of Science',institution:'Avinashilingam University (India) in Collaboration with IFM (Dar es Salaam)',date:'2012-2014',achievement:'Master of Science in IT and Management'},
    {name:'Information Communication Technology Management',level:'Undergraduate', program:'Bachelor of Science',institution:'Mzumbe University (Tanzania)',date:'2006-2009',achievement:'Bachelor of Science in Information Communication Technology Management (ICTM)'}];
  }

  contentDetails(){
    return document.getElementById('details');
  }

  componentDidMount(){
    if(this.id === 'academics'){
        this.showPrograms(this.defaultPrograms);
      }
  }
  clearContent(){
    let details = this.contentDetails();
    if(details.hasChildNodes()){
      while(details.firstChild){
        details.removeChild(details.firstChild);
      }
    }

  }
  insertProgram(program){
    let content = document.createElement("div");
    content.classList.add("details-item");
    let programText = document.createTextNode(program['name']);
    let programHolder = document.createElement("h2");
    let level = document.createElement("p");
    let prg = document.createElement("p");
    let date = document.createElement("p");
    let achievement = document.createElement("p");
    let institution = document.createElement("p");

    level.textContent = "Level:  " + program['level'];
    prg.textContent = "Program:  "+ program['program'];
    date.textContent = "Date: " + program['date'];
    achievement.textContent = "Achievement: " + program['achievement'];
    institution.textContent = "Institution: " + program['institution'];

    programHolder.appendChild(programText);
    content.appendChild(programHolder);
    content.appendChild(level);
    content.appendChild(prg);
    content.appendChild(date);
    content.appendChild(achievement);
    content.appendChild(institution);
    return content;
  }
  getSkills(){
    return [
      {
        name:'Backend Development',
        technologies:
          {
            name:
            ['PHP','Laravel','MAMP/LAMP/WAMP','NodeJS','ExpressJS','Python','Flask']
          }
        },
      {
        name:'Frontend Development',
        technologies:
          {
            name:
            ['HTML5','Bootstrap','Material Design Lite','JavaScript','ReactJS','CSS3']
          }
      },
      {
        name:'Android Development',
        technologies:
          {
            name:
            ['Android Components','Firebase','Material Design','Data Persistence','Job Scheduling']
          }
      }
    ]
  }
  insertSkills(skills){
    let content = document.createElement("div");
    content.classList.add("details-item");
    let skillNameText = document.createTextNode(skills['name']);
    let skillNameHolder = document.createElement("h2");
    skillNameHolder.appendChild(skillNameText);
    let technologies = document.createElement("div");
      let item = document.createElement('div');
      item.id ='skill-holder';
      item.classList.add('skill-holder');
    for(let i=0;i<skills['technologies']['name'].length;i++){
      let skill = document.createElement('div');
      skill.classList.add('skill');
      skill.id = skills['technologies']['name'][i].replace(" ","-").toLowerCase();
      let name = skills['technologies']['name'][i];
      skill.textContent = name;
      item.appendChild(skill);
      technologies.appendChild(item);
    }
    content.appendChild(skillNameHolder);
    content.appendChild(technologies);
    // let prg = document.createElement("p");
    // let date = document.createElement("p");
    // let achievement = document.createElement("p");
    // let institution = document.createElement("p");
    //
    // level.textContent = "Level:  " + program['level'];
    // prg.textContent = "Program:  "+ program['program'];
    // date.textContent = "Date: " + program['date'];
    // achievement.textContent = "Achievement: " + program['achievement'];
    // institution.textContent = "Institution: " + program['institution'];
    //
    // programHolder.appendChild(programText);
    // content.appendChild(programHolder);
    // content.appendChild(level);
    // content.appendChild(prg);
    // content.appendChild(date);
    // content.appendChild(achievement);
    // content.appendChild(institution);
    return content;
  }
  getCodingPrograms(){
    return [{name:'Full Stack Web Developer with ReactJS and NodeJS',level:'Advanced', program:'ALC in Tanzania',institution:'OpenClassrooms',date:'October 2018 - March 2019',achievement:'Certificate of Achievement'},
    {name:'Google Associate Android Developer',level:'Expert', program:'ALC With Google 3.1',institution:'PluralSight',date:'November 2018 - March 2019',achievement:'Google Associate Android Developer Certificate (Not taken exam yet)'},
    {name:'Android Developer',level:'Intermediate', program:'ALC With Google 3.0 (Google Africa Scholarship Challenge)',institution:'Udacity',date:'May 2018 - July 2018',achievement:'Certificate of Achievement'}];

  }

  showCodingBio(){
    let programs = this.getCodingPrograms();
    this.showPrograms(programs);

  }
  showPrograms(programs){

    let details = this.contentDetails();

    for(let i=0; i< programs.length; i++){
      let content = this.insertProgram(programs[i]);
      details.appendChild(content);
    }

  }

  showSkills(skills){
      let details = this.contentDetails();
    for(let k=0; k < skills.length;k++){
      details.appendChild(this.insertSkills(skills[k]));
    }
  }

  handleClick(event){
    event.preventDefault();
    let id = event.target.id;
    let item = document.getElementById(id);
    let navItems = document.getElementById('navigator').childNodes;
    for(let i=0; i<navItems.length;i++){
      if(navItems[i].classList.contains('branch-active')){
        navItems[i].classList.remove('branch-active');
      }
    }

      // this.clearContent();
    item.classList.add('branch-active');
    let title = document.getElementById("title");
    title.textContent = "My "+id[0].toUpperCase() + id.substr(1,id.length) + " Journey";
    if(id ===  'skills') title.textContent = "My Acquired " + id[0].toUpperCase() + id.substr(1,id.length);
//clear content
    this.clearContent();

    switch(id){
      case 'coding':
        this.showCodingBio();
        break;
      case 'academics':
        this.showPrograms(this.defaultPrograms);
        break;
      case 'skills':
      console.log("Skills");
        this.showSkills(this.getSkills());
        break;
      default:
        this.showPrograms(this.defaultPrograms);
        break;
    }
  }
  handleMouseOver(){
    let item = document.getElementById(this.id);
    item.classList.add('branch-focused');
  }
  handleMouseOut(){
    let item = document.getElementById(this.id);
    item.classList.remove('branch-focused');

  }
  render(){
    return(
      <span onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className={"nav-branch" + (this.id === 'academics' ? ' branch-active' : '')} id={this.id}>{this.text}</span>
    );
  };
}
export default NavigatorBranch;
