import React from 'react';
import fk from './assets/fk_logo.png';
import abc from './assets/abc.jpg';
import ubj from './assets/ubj.png';
import jmx from './assets/jamirex.jpg';
import itm from './assets/itm.png';
import kakobrands from './assets/kakobrands.png';

class Work extends React.Component{

  constructor(props){
    super(props);
    this.getClients = this.getClients.bind(this);
    this.populate = this.populate.bind(this);
    this.state = {clients: [{id:0,name:'FK Law Chambers',link:'http://fklawchambers.co.tz',image:fk},{id:1,name:'ABC Dental Clinic',link:'http://abcdentalclinic.co.tz',image:abc},{id:2,name:'UBJ Law Chamber', link:'http://ubjlawchamber.co.tz',image:ubj},{id:3,name:'Jamirex Hotel',link:'http://jamirexhotel.co.tz',image:jmx},{id:4,name:'ITM Tanzania Ltd',link:'http://registration.itmafrica.co.tz',image:itm},{id:5,name:'Kakobrands',link:'https://kakobrands.com',image:kakobrands}]};
  }
  setClients(clients){
    this.setState = {clients:clients};
  }
  getClients(){
    return this.state.clients;
  }
  componentDidMount(){
    this.populate();
  }
  populate(){
    return (
      <div className="work-content" id="work-content">

        <h1 id="work-content-title">Clients</h1>
        <div className="work-details">
      {
        this.getClients().map((data)=>(

            <a className="work-item" key={data['id']} href={data['link']}>
              <img src={data['image']} alt={data['name']}/>
            </a>
      ))}</div></div>
    );
  }
  render(){
    return this.populate();
  }
} export default Work;
